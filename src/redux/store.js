import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/loginSlice";
import dashboardReducer from "./dashboard/dashBoardSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    dashboard: dashboardReducer,
  },
});

export default store;
