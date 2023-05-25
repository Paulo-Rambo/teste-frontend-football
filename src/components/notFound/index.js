import { NotFound } from "./styles";

export default function NotFoundComponent(props) {
  return (
    <NotFound>
      <span className="notFoundText">{props.text}</span>
    </NotFound>
  );
}
