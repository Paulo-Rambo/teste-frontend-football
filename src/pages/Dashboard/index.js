import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionLogin } from "../../redux/login/loginSlice";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import ContinentsList from "../../components/continentList";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { authStatus } = useSelector((state) => state.login);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authStatus) {
      const client_token = Cookies.get("api_sports_key");
      if (!client_token) {
        navigate("/login");
      } else {
        dispatch(actionLogin({ key: client_token }));
      }
    }
  }, []);

  return (
    <main>
      <ContinentsList />
    </main>
  );
}
