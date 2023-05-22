import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserCookie } from "../../redux/login/loginSlice";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

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
        dispatch(setUserCookie(client_token));
      }
    }
  }, []);

  return <div>Dashboard</div>;
}
