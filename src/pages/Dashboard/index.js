import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import Header from "../../components/header";
import { MainStyle } from "./styles";

export default function Dashboard() {
  const { authStatus } = useSelector((state) => state.login);
  const navigate = useNavigate();
  useEffect(() => {
    if (authStatus) {
      return;
    }
    navigate("/login");
  }, []);

  return (
    <>
      <Header />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </>
  );
}
