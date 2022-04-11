import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../../pages/AllPages.styles";
import {
  ContainerHeader,
  HeaderButton,
  HeaderLogo,
  HeaderMenu,
} from "./Header.styles";
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  const { handleLogout, isToken } = useContext<any>(AuthContext);

  if (isToken) {
    return (
      <ContainerHeader>
        <HeaderLogo>
          <Logo />
        </HeaderLogo>
        <HeaderMenu>
          <Menu />
        </HeaderMenu>
        <HeaderButton>
          <Button onClick={handleLogout} color="#3751FF">
            Logout
          </Button>
        </HeaderButton>
      </ContainerHeader>
    );
  }
  return <header></header>;
}

export default Header;
