import { useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { logoutUser } from "../../redux/login/loginSlice";

export default function Header() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  return (
    <header>
      <div>
        <div>API-Football</div>
      </div>
      <div>
        <div onClick={() => handleLogout()}>Logout</div>
      </div>
    </header>
  );
}
