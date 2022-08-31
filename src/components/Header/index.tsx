import Logo from "../../assets/logo.png";
import * as S from "./style";

export default function Header() {
  return (
    <S.Container>
      <img src={Logo} alt="Dona maria e cupcake" />
      <h1>Cadastro de Funcionários</h1>
      <div></div>
    </S.Container>
  );
}
