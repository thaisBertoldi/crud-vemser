import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Address from "./pages/address/Address";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Users from "./pages/users/Users";
import UserContext from "./context/UserContext";
import { ContainerAllPage } from "./Routes.styles";
import AddressProvider from "./context/AddressContext";

function Routers() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AddressProvider>
          <UserContext>
            <ContainerAllPage>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={<Users />} />
                <Route path="/address" element={<Address />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ContainerAllPage>
            {/* <Footer /> */}
          </UserContext>
        </AddressProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Routers;
