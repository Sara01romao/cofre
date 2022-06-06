import Logo from "../../assets/images/logo.svg";
import { HeaderStyle } from "./styles";


export function Header() {
  return (
    <HeaderStyle>
      <nav>
        <img src={Logo} alt="Logo Cofre" />
      </nav>
    </HeaderStyle>
  );
}
