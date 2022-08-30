import { useState } from "react";
import * as S from "./style";

export default function Form() {
  const [activities, setActivities] = useState("");
  const [benefits, setBenefits] = useState("");
  const [steps, setSteps] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");

  return (
    <S.Form>
      <div>
        <label>Título do cargo:</label>
        <input type="text" name="title" placeholder="Título do cargo" />
        <label>Sálario:</label>
        <input type="number" name="salary" placeholder="Sálario do cargo" />
      </div>
      <S.TextAreaContainer>
        <label>Atividades que o cargo exerce:</label>
        <textarea
          name="activities"
          placeholder="Ex :  Atender balcão, limpar a loja..."
          value={activities}
          onChange={(e) => setActivities(e.target.value)}
        />
      </S.TextAreaContainer>
      <S.TextAreaContainer>
        <label>Benefícios do cargo:</label>
        <textarea
          name="benefits"
          placeholder="Ex: Vale Alimentação,Vale transporte..."
          value={benefits}
          onChange={(e) => setBenefits(e.target.value)}
        />
      </S.TextAreaContainer>
      <S.TextAreaContainer>
        <label>Etapas do processo:</label>
        <textarea
          name="steps"
          placeholder="Ex: Entrevista, Teste Técnico..."
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
      </S.TextAreaContainer>
      <S.TextAreaContainer>
        <label>Habilidades necessárias:</label>
        <textarea
          name="skills"
          placeholder="Ex: Conhecimentos de padaria,Curso de Doceira..."
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
      </S.TextAreaContainer>
      <S.TextAreaContainer>
        <label>Experiência necessária:</label>
        <textarea
          name="experience"
          placeholder="Ex: 1 ano de atuação na área..."
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </S.TextAreaContainer>
      <S.Button
        onClick={(e) => {
          e.preventDefault();
          console.log(activities);
        }}
      >
        Cadastrar
      </S.Button>
    </S.Form>
  );
}
