import LoginForm from "../../components/forms/loginForm";
import { MainLoginStyle } from "./styles";
import { FormTitleBoxStyle } from "../../styles/titles";
import Loading from "../../components/loading";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { actionLogin } from "../../redux/login/loginSlice";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RootState from "../../interfaces/types";
import { AppDispatch } from "../../redux/store";

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state).login;
  const navigate = useNavigate();
  const { authStatus } = useSelector((state: RootState) => state.login);

  useEffect(() => {
    if (authStatus) {
      navigate("/dashboard");
    }
  }, [authStatus]);

  useEffect(() => {
    const client_token = Cookies.get("api_sports_key");
    if (client_token && !authStatus) {
      dispatch(actionLogin({ key: client_token }));
    }
  }, []);

  return (
    <>
      <MainLoginStyle>
        {loading ? (
          <Loading />
        ) : (
          <div className="loginDivBox">
            <FormTitleBoxStyle>
              <h3>API-Football</h3>
            </FormTitleBoxStyle>
            <LoginForm />
          </div>
        )}
      </MainLoginStyle>
    </>
  );
}
