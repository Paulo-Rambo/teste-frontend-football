import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionLogin } from "../../redux/login/loginSlice";
import { Outlet, useNavigate } from "react-router";
import Cookies from "js-cookie";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { authStatus } = useSelector((state) => state.login);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("teste filho");
    if (authStatus) {
      return;
    }
    const client_token = Cookies.get("api_sports_key");
    if (!client_token) {
      navigate("/login");
    } else {
      dispatch(actionLogin({ key: client_token }));
    }
    return;
  }, []);

  return (
    <main>
      <Outlet />
    </main>
  );
}
