import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Footer() {
  const { isToken } = useContext<any>(AuthContext);

  return (
    <footer>
      {isToken &&
      <h1>Footer</h1>
      }
    </footer>
  )
}

export default Footer