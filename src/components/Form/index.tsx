import { useForm } from "react-hook-form";
import * as S from "./style";
import { saveAs } from "file-saver";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validations";

interface IForm {
  title: string;
  salary: number;
  activities: string;
  benefits: string;
  steps: string;
  skills: string;
  experiences: string;
}

export default function Form() {
  const [workers, setWorkers] = useState<IForm[]>([]);

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<IForm>(formOptions);

  const onSubmit = (data: IForm): void => {
    setWorkers((prevState) => [...prevState, data]);
    reset();
  };

  function exportUserInfo(userInfo: IForm[]) {
    if (workers.length) {
      const fileData = JSON.stringify(userInfo);
      const blob = new Blob([fileData], { type: "text/plain" });
      saveAs(blob, "Funcionarios.txt");
      return;
    }
    alert("Nenhum cargo cadastrado");
  }

  function FindIfJobHasAlreadyInDb() {
    const title = watch("title");
    const findWorker = workers.filter(
      (worker) => worker.title.toLowerCase() === title.toLowerCase()
    );
    const mostRecentRole = findWorker[findWorker.length - 1];
    if (findWorker) {
      setValue("salary", mostRecentRole?.salary);
      setValue("activities", mostRecentRole?.activities);
      setValue("skills", mostRecentRole?.skills);
      setValue("experiences", mostRecentRole?.experiences);
    }
  }

  return (
    <>
      <S.Form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <S.Container>
          <S.Wrapper>
            <label>Título do cargo:</label>
            <S.Input
              type="text"
              placeholder="Título do cargo"
              {...register("title", {
                required: true,
              })}
              onBlur={FindIfJobHasAlreadyInDb}
              className={errors.title ? "is-invalid" : ""}
            />
            <p className="invalid-feedback">{errors.title?.message}</p>
            <label>Sálario:</label>
            <S.Input
              type="number"
              placeholder="Sálario do cargo"
              {...register("salary", { required: true })}
              className={errors.salary ? "is-invalid" : ""}
            />
            <p className="invalid-feedback">{errors.salary?.message}</p>
          </S.Wrapper>
          <S.TextAreaContainer>
            <label>Atividades que o cargo exerce:</label>
            <textarea
              placeholder="Ex :  Atender balcão, limpar a loja..."
              {...register("activities", {
                required: true,
              })}
              className={errors.activities ? "is-invalid" : ""}
            />
            <p className="invalid-feedback">{errors.activities?.message}</p>
          </S.TextAreaContainer>
          <S.TextAreaContainer>
            <label>Benefícios do cargo:</label>
            <textarea
              placeholder="Ex: Vale Alimentação,Vale transporte..."
              {...register("benefits", {
                required: true,
              })}
              className={errors.benefits ? "is-invalid" : ""}
            />
            <p className="invalid-feedback">{errors.benefits?.message}</p>
          </S.TextAreaContainer>
          <S.TextAreaContainer>
            <label>Etapas do processo:</label>
            <textarea
              placeholder="Ex: Entrevista, Teste Técnico..."
              {...register("steps", { required: true })}
              className={errors.steps ? "is-invalid" : ""}
            />
            <p className="invalid-feedback">{errors.steps?.message}</p>
          </S.TextAreaContainer>
          <S.TextAreaContainer>
            <label>Habilidades necessárias:</label>
            <textarea
              placeholder="Ex: Conhecimentos de padaria,Curso de Doceira..."
              {...register("skills", {
                required: true,
              })}
              cols={5}
              rows={5}
              className={errors.skills ? "is-invalid" : ""}
            />
            <p className="invalid-feedback">{errors.skills?.message}</p>
          </S.TextAreaContainer>
          <S.TextAreaContainer>
            <label>Experiência necessária:</label>
            <textarea
              placeholder="Ex: 1 ano de atuação na área..."
              {...register("experiences", {
                required: true,
              })}
              cols={5}
              rows={5}
              className={errors.experiences ? "is-invalid" : ""}
            />
            <p className="invalid-feedback">{errors.experiences?.message}</p>
          </S.TextAreaContainer>
          <S.Wrapper>
            <S.Button type="submit">Cadastrar</S.Button>
            <S.Button type="button" onClick={() => exportUserInfo(workers)}>
              Exportar
            </S.Button>
          </S.Wrapper>
        </S.Container>
      </S.Form>
    </>
  );
}
