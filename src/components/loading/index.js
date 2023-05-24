import { RotateImage } from "./styles";
import loading from "../../statics/loading-loader-svgrepo-com.svg";

export default function Loading() {
  return (
    <RotateImage>
      <img alt="Loading Image" src={loading} className="rotating-image"></img>
    </RotateImage>
  );
}
