import { useContext, useEffect } from "react";
import api from "../../api";
import { AddressContext } from "../../context/AddressContext";
import { UserContext } from "../../context/UserContext";
import { Container, ContainerInterno } from "../AllPages.styles";
import {
  Card,
  CardTitle,
  ContainerHome,
  LinkHome,
  PNumber,
} from "./Home.styles";

function Home() {
  const { addressGet, returnAddress } = useContext<any>(AddressContext);
  const { usersLength, getUsers } = useContext<any>(UserContext);
  const getToken = localStorage.getItem("token");

  useEffect(() => {
    if (getToken) {
      api.defaults.headers.common["Authorization"] = getToken;
    }
    returnAddress();
    getUsers();
  }, []);

  return (
    <Container>
      <ContainerInterno>
        <ContainerHome>
          <Card>
            <LinkHome to="/users">
              <CardTitle>Users</CardTitle>
              <PNumber>{usersLength.length}</PNumber>
            </LinkHome>
          </Card>
          <Card>
            <LinkHome to="/address">
              <CardTitle>Address</CardTitle>
              <PNumber>{addressGet.length}</PNumber>
            </LinkHome>
          </Card>
        </ContainerHome>
      </ContainerInterno>
    </Container>
  );
}

export default Home;
