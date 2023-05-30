import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import Header from "../../components/header";
import { MainStyle } from "./styles";
import RootState from "../../interfaces/types";

export default function Dashboard() {
  const { authStatus } = useSelector((state: RootState) => state.login);
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
