import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LoginDTO } from "../../model/LoginDTO";
import {
  LoginTitle,
  ContainerLogin,
  LoginForm,
  ContainerInterno,
  ImageLogo,
  SpanLogo,
  SpanTitle,
  ButtonLogin,
  FormStyle,
  ButtonDiv,
  DivWhitSpan,
  ContainerForm,
  DivEye,
} from "./Login.styles";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const { handleLogin } = useContext<any>(AuthContext);
  const [token, setToken] = useState<string | null>("");
  const [typePassword, setTypePassword] = useState("password");
  const [isPassword, setIsPassword] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token) {
      navigate("/");
      alert("Você já está logado. Faça logout para acessar com outra conta.");
    }
  }, []);

  const changeTypePasswordText = () => {
    setIsPassword(false);
    setTypePassword("text");
  };

  const changeTypePasswordOcult = () => {
    setIsPassword(true);
    setTypePassword("password");
  };

  return (
    <ContainerLogin>
      <ContainerInterno>
        <DivWhitSpan>
          <ImageLogo />
          <SpanLogo>Dashboard Kit</SpanLogo>
        </DivWhitSpan>
        <DivWhitSpan>
          <LoginTitle>Log in to Dashboard Kit</LoginTitle>
          <SpanTitle>Enter your email and password below</SpanTitle>
        </DivWhitSpan>
        <Formik
          initialValues={{
            usuario: "",
            senha: "",
          }}
          onSubmit={(
            values: LoginDTO,
            { setSubmitting }: FormikHelpers<LoginDTO>
          ) => {
            handleLogin(values);
            setSubmitting(false);
          }}
        >
          <ContainerForm>
            <Form>
              <FormStyle>
                <div>
                  <label htmlFor="usuario"> USUÁRIO</label>
                </div>

                <Field
                  as={LoginForm}
                  name="usuario"
                  id="usuario"
                  placeholder="Digite o nome do usuário"
                />

                <div>
                  <label htmlFor="senha"> SENHA</label>
                </div>

                <Field
                  as={LoginForm}
                  name="senha"
                  type={typePassword}
                  id="senha"
                  placeholder="Digite sua senha"
                />
                <DivEye>
                  {isPassword && (
                    <FaEye onClick={() => changeTypePasswordText()} />
                  )}
                  {!isPassword && (
                    <FaEyeSlash onClick={() => changeTypePasswordOcult()} />
                  )}
                </DivEye>
              </FormStyle>

              <ButtonDiv>
                <ButtonLogin type="submit">Entrar</ButtonLogin>
              </ButtonDiv>
            </Form>
          </ContainerForm>
        </Formik>
      </ContainerInterno>
    </ContainerLogin>
  );
}

export default Login;
