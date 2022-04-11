import * as Yup from "yup";
import moment from "moment";
import InputMask from "react-input-mask";
import Notiflix from "notiflix";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import api from "../../api";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import { UserContext } from "../../context/UserContext";
import { NewUserDTO } from "../../model/NewUserDTO";
import { UsersDTO } from "../../model/UsersDTO";
import { AlertErrorInput } from "../address/Address.styles";
import { Button, Container, ContainerInterno } from "../AllPages.styles";
import {
  AllUsersTitle,
  DivButtons,
  DivLabelField,
  FormNewUser,
  Input,
  ListUsers,
  TableUsers,
} from "./Users.styles";

function Users() {
  const [idUser, setIdUser] = useState<number | null>();
  const { user, getUsers, loading, error, deleteUser } =
    useContext<any>(UserContext);
  const getToken = localStorage.getItem("token");
  const [isUpdate, setIsUpdate] = useState(false);

  const formatarCPF = (cpf: string) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  const topPage = () => {
    return window.scrollTo(0, 0);
  }

  useEffect(() => {
    if (getToken) {
      api.defaults.headers.common["Authorization"] = getToken;
    }
    getUsers();
  }, []);

  const createUser = async (values: NewUserDTO) => {
    values.dataNascimento = moment(values.dataNascimento, "DD/MM/YYYY").format(
      "YYYY-MM-DD"
    );
    values.cpf = values.cpf.replaceAll(".", "").replaceAll("-", "");
    try {
      const { data } = await api.post("/pessoa", values);
      Notiflix.Notify.success("Contato criado com sucesso!");
      getUsers();
    } catch (error) {
      console.log("Algo de errado nao esta certo no createUser", error);
      Notiflix.Notify.failure(
        "Sinto muito, mas nao foi possivel criar esse contato."
      );
    }
  };

  async function choiceUpdateAddress(id: number) {
    setIsUpdate(true);
    try {
      const { data } = await api.get(`pessoa/{idPessoa}?idPessoa=${id}`);
      setIdUser(id);
      formik.setFieldValue("nome", data.nome);
      formik.setFieldValue("email", data.email);
      formik.setFieldValue(
        "dataNascimento",
        moment(data.dataNascimento, "YYYY-MM-DD").format("DD/MM/YYYY")
      );
      topPage()
      formik.setFieldValue("cpf", data.cpf);
    } catch (error) {
      console.log("Erro ao tentar acessar api endereço por id", error);
    }
  }

  const updateUser = async () => {
    const newUserData = {
      nome: formik.values.nome,
      dataNascimento: moment(formik.values.dataNascimento, "DD/MM/YYYY").format(
        "YYYY-MM-DD"
      ),
      email: formik.values.email,
      cpf: formik.values.cpf,
      idPessoa: idUser,
    };
    try {
      const { data } = await api.put(`/pessoa/${idUser}`, newUserData);
      Notiflix.Notify.success("Usuário atualizado com sucesso!");
      getUsers();
    } catch (error) {
      console.log("Deu erro na hora de tentar atualizar o usuário. Afe", error);
      Notiflix.Notify.failure(
        "Sinto muito, mas nao foi possivel atualizar esse usuário."
      );
    }
    setIsUpdate(false);
  };

  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      dataNascimento: "",
      cpf: "",
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(
          2,
          "Uma vez eu chamei minha mãe de Ô e ela disse que ninguém tem um nome tão curto."
        )
        .max(50, "Esse é mesmo o seu nome ou você deitou no teclado?")
        .matches(/[a-z]/gi, "Você precisa preencher esse campo apenas com letras")
        .required("Você precisa preencher esse campo"),
      email: Yup.string()
        .email("Este campo precisa ser preenchido com um email.")
        .required("Você precisa preencher esse campo"),
      dataNascimento: Yup.string().required(
        "Você precisa preencher esse campo"
      ).test('dataNascimento', "Data inválida", (value) => {return moment(value, 'DDMMYYYY').isValid()}),
      cpf: Yup.string().required("Você precisa preencher esse campo"),
    }),
    onSubmit: async (values: NewUserDTO, { resetForm }) => {
      if (!isUpdate) {
        createUser(values);
      } else {
        updateUser();
      }
      resetForm();
    },
  });

  return (
    <Container>
      <ContainerInterno>
        <h3>Cadastrar novo usuário:</h3>
        <form onSubmit={formik.handleSubmit}>
          <FormNewUser>
            <DivLabelField>
              <label htmlFor="nome">Nome:</label>
              <Input
                id="nome"
                name="nome"
                placeholder="Name"
                value={formik.values.nome}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.nome && formik.touched.nome ? (
                <AlertErrorInput>{formik.errors.nome}</AlertErrorInput>
              ) : null}
            </DivLabelField>

            <DivLabelField>
              <label htmlFor="email">Email:</label>
              <Input
                id="email"
                name="email"
                placeholder="youremail@email.com"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <AlertErrorInput>{formik.errors.email}</AlertErrorInput>
              ) : null}
            </DivLabelField>

            <DivLabelField>
              <label htmlFor="dataNascimento">Data de nascimento:</label>
              <Input
                as={InputMask}
                mask="99/99/9999"
                id="dataNascimento"
                name="dataNascimento"
                placeholder="00/00/0000"
                value={formik.values.dataNascimento}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.dataNascimento && formik.touched.dataNascimento ? (
                <AlertErrorInput>
                  {formik.errors.dataNascimento}
                </AlertErrorInput>
              ) : null}
            </DivLabelField>

            <DivLabelField>
              <label htmlFor="cpf">CPF:</label>
              <Input
                as={InputMask}
                mask="999.999.999-99"
                id="cpf"
                name="cpf"
                placeholder="000.000.000-00"
                value={formik.values.cpf}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.cpf && formik.touched.cpf ? (
                <AlertErrorInput>{formik.errors.cpf}</AlertErrorInput>
              ) : null}
            </DivLabelField>

            <DivLabelField>
              <DivButtons>
                {!isUpdate && (
                  <Button type="submit" color={"#29CC97"}>
                    Cadastrar
                  </Button>
                )}
                {isUpdate && (
                  <Button type="submit" color={"#b4cc29"}>
                    Atualizar
                  </Button>
                )}
              </DivButtons>
            </DivLabelField>
          </FormNewUser>
        </form>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : (
          <>
            <AllUsersTitle>All users</AllUsersTitle>
            <TableUsers>
              <p>Name User</p>
              <p>Birthday</p>
              <p>Cpf</p>
              <p>Email</p>
            </TableUsers>
            {user.map((u: UsersDTO["users"]) => (
              <ListUsers key={u.idPessoa}>
                <div>
                  <h4>{u.nome}</h4>
                </div>
                <div>
                  <p>{moment(u.dataNascimento).format("DD/MM/YYYY")}</p>
                </div>
                <div>
                  <p>{formatarCPF(u.cpf)}</p>
                </div>
                <div>
                  <p>{u.email}</p>
                </div>
                <Button
                  type="button"
                  color={"green"}
                  onClick={() => choiceUpdateAddress(u.idPessoa)}
                >
                  Atualizar
                </Button>
                <Button
                  type="button"
                  color={"red"}
                  onClick={() => deleteUser(u.idPessoa)}
                >
                  Deletar
                </Button>
              </ListUsers>
            ))}
          </>
        )}
      </ContainerInterno>
    </Container>
  );
}

export default Users;
