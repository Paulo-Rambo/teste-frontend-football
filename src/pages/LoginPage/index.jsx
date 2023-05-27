import LoginForm from "../../components/forms/loginForm";
import { MainLoginStyle } from "./styles";
import { FormTitleBoxStyle } from "../../styles/titles";
import Loading from "../../components/loading";
import { useSelector } from "react-redux";

export default function LoginPage() {
  const { loading } = useSelector((state) => state).login;
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
