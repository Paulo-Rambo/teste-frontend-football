import ManagerRoutes from "./routes";
import GlobalStyles from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <ManagerRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
