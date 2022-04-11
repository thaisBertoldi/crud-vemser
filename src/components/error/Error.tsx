import image from "../../images/image-erro.gif";
import { ContainerError } from "./Error.styles";

export default function Error() {
  return (
    <ContainerError>
      <h2>Oshi, deu erro. Pq será?</h2>
      <img src={image} alt="error" />
    </ContainerError>
  );
}
