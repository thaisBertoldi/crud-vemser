import image from "../../images/image-loading.gif";
import imageLoading from "../../images/image-loading-loading.gif";
import { ContainerLoading } from "./Loading.styles";

export default function Loading() {
  return (
    <ContainerLoading>
      <img src={imageLoading} alt="loading" />
      <img src={image} alt="loading" />
    </ContainerLoading>
  );
}
