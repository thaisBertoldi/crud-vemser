import { Link } from "react-router-dom";
import { MenuLi, MenuUl, MenuWithIcons } from "./Header.styles";
import { FaHome, FaStreetView, FaUserAlt } from "react-icons/fa";

export default function Menu() {
  return (
    <nav>
      <MenuUl>
        <MenuWithIcons>
          <FaHome />
          <Link to="/">
            <MenuLi>Home</MenuLi>
          </Link>
        </MenuWithIcons>
        <MenuWithIcons>
          <FaStreetView />
          <Link to="/address">
            <MenuLi>Address</MenuLi>
          </Link>
        </MenuWithIcons>
        <MenuWithIcons>
          <FaUserAlt />
          <Link to="/users">
            {" "}
            <MenuLi>Users</MenuLi>
          </Link>
        </MenuWithIcons>
      </MenuUl>
    </nav>
  );
}
