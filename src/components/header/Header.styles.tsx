import styled from "styled-components";
import logoVemSer from "../../images/logo-vemser.png";

export const ContainerHeader = styled.header`
  background-color: #363740;
  min-width: 15%;
`;

export const HeaderLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoImg = styled.img.attrs((props) => ({
  src: logoVemSer,
  alt: "logo vemSer dbc",
}))`
  height: 150px;
  width: 150px;
`;

export const HeaderMenu = styled.div`
  padding-left: 32px;
`;

export const MenuUl = styled.ul`
  list-style: none;
  text-decoration: none;
  color: #a4a6b3;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MenuLi = styled.li`
  text-decoration: none;
  color: #a4a6b3;
`;

export const MenuWithIcons = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
