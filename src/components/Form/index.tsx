import * as S from "./style";

export default function Form() {
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
          name="name"
          placeholder="Ex :  Atender balcão, limpar a loja"
        />
      </S.TextAreaContainer>
      <S.TextAreaContainer>
        <label>Benefícios do cargo:</label>
        <textarea name="name" placeholder="Name" />
      </S.TextAreaContainer>
      <S.TextAreaContainer>
        <label>Etapas do processo:</label>
        <textarea name="name" placeholder="Name" />
      </S.TextAreaContainer>
      <S.TextAreaContainer>
        <label>Habilidades necessárias:</label>
        <textarea name="name" placeholder="Name" />
      </S.TextAreaContainer>
      <S.TextAreaContainer>
        <label>Experiência necessária:</label>
        <textarea name="name" placeholder="Name" />
      </S.TextAreaContainer>
      <S.Button>Cadastrar</S.Button>
    </S.Form>
  );
}
