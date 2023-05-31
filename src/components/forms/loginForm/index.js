import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validateTokenSchema } from "../../../validation/validateToken";
import { FormInputBoxStyle } from "../../../styles/formInputBox";
import { FormStyle } from "./styles";
import { LogoutButton } from "../../../styles/buttons";
import { useDispatch } from "react-redux";
import { actionLogin } from "../../../redux/login/loginSlice";

export default function LoginForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateTokenSchema),
  });

  function loginAction(data) {
    dispatch(actionLogin(data));
  }

  return (
    <FormStyle onSubmit={handleSubmit(loginAction)}>
      <div className="justifyComponents">
        <FormInputBoxStyle>
          <label htmlFor="key">Coloque sua chave aqui</label>
          <input
            id="key"
            type="text"
            placeholder="chave..."
            {...register("key")}
          ></input>
          <span className="spanError">{errors.key?.message}</span>
        </FormInputBoxStyle>
        <div className="buttonDiv">
          <LogoutButton id="loginInput" name="login" type="submit">
            Entrar
          </LogoutButton>
        </div>
      </div>
    </FormStyle>
  );
}
