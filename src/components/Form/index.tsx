import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as S from "./style";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<FieldValues> = (data): void => {
    console.log(data);
  };
  console.log(errors);

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Container>
        <S.Wrapper>
          <label>Título do cargo:</label>
          <S.Input
            type="text"
            placeholder="Título do cargo"
            {...(register("title"), { required: true })}
          />
          <label>Sálario:</label>
          <S.Input
            type="number"
            placeholder="Sálario do cargo"
            {...(register("salary"), { required: true })}
          />
        </S.Wrapper>
        <S.TextAreaContainer>
          <label>Atividades que o cargo exerce:</label>
          <textarea
            placeholder="Ex :  Atender balcão, limpar a loja..."
            {...(register("activities"), { required: true })}
          />
        </S.TextAreaContainer>
        <S.TextAreaContainer>
          <label>Benefícios do cargo:</label>
          <textarea
            placeholder="Ex: Vale Alimentação,Vale transporte..."
            {...register("benefits", { required: true })}
          />
        </S.TextAreaContainer>
        <S.TextAreaContainer>
          <label>Etapas do processo:</label>
          <textarea
            placeholder="Ex: Entrevista, Teste Técnico..."
            {...register("steps", { required: true })}
          />
        </S.TextAreaContainer>
        <S.TextAreaContainer>
          <label>Habilidades necessárias:</label>
          <textarea
            placeholder="Ex: Conhecimentos de padaria,Curso de Doceira..."
            {...register("skills", { required: true })}
            cols={5}
            rows={5}
          />
        </S.TextAreaContainer>
        <S.TextAreaContainer>
          <label>Experiência necessária:</label>
          <textarea
            placeholder="Ex: 1 ano de atuação na área..."
            {...register("experiences", { required: true })}
          />
        </S.TextAreaContainer>
        <S.Button type="submit">Cadastrar</S.Button>
      </S.Container>
    </S.Form>
  );
}
