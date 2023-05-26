import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validateTokenSchema } from "../../../validation/validateToken";
import { actionLogin } from "../../../redux/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { FormInputBoxStyle } from "../../../styles/formInputBox";
import { FormStyle } from "./styles";
import { LogoutButton } from "../../../styles/buttons";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { authStatus } = useSelector((state) => state.login);
  useEffect(() => {
    if (authStatus) {
      navigate("/dashboard");
    }
  }, [authStatus]);

  useEffect(() => {
    const client_token = Cookies.get("api_sports_key");
    if (client_token) {
      navigate("/dashboard");
    }
  }, []);

  function loginAction(data) {
    dispatch(actionLogin(data));
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateTokenSchema),
  });

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
          <span>{errors.key?.message}</span>
        </FormInputBoxStyle>
        <LogoutButton type="submit">Entrar</LogoutButton>
      </div>
    </FormStyle>
  );
}
