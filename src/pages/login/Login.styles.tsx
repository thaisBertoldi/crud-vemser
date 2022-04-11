import styled from "styled-components";
import logoVemSer from "../../images/logo-vemser.png";

export const ContainerLogin = styled.div`
  background-color: #363740;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100%;
`;

export const ContainerInterno = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  width: 380px;
  height: 582px;
  border-radius: 8px;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DivWhitSpan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginTitle = styled.h1`
  font-size: 24px;
  color: #333;
  @import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;0,700;1,400&display=swap");
  font-family: Mulish, sans-serif;
`;

export const LoginForm = styled.input`
  max-width: 316px;
  height: 42px;
  border-radius: 8px;
`;

export const ImageLogo = styled.img.attrs(props => ({src: logoVemSer, alt: "logo vemSer dbc"}))`
  height: 100px;
  width: 100px;
`;

export const SpanLogo = styled.span`
  @import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;0,700;1,400&display=swap");
  font-size: 19px;
  opacity: 0.5;
  font-family: Mulish, sans-serif;
`;

export const SpanTitle = styled.span`
  @import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;0,700;1,400&display=swap");
  font-size: 14px;
  opacity: 0.5;
  font-family: Mulish, sans-serif;
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonLogin = styled.button`
  background-color: #3751ff;
  text-align: center;
  color: white;
  width: 316px;
  height: 40px;
  border-radius: 8px;
`;

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0.5;
  width: 316px;
  padding: 30px;
`;

export const DivEye = styled.div`
    position: absolute;
    margin-left: 290px;
    margin-top: 95px;
`;