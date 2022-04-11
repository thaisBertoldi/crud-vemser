import { Link } from "react-router-dom";
import { LogoImg } from "./Header.styles";

export default function Logo() {
  return (
    <div>
      <Link to='/'><LogoImg /></Link>
      </div>
  )
}
