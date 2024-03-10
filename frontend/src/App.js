import { useEffect, useState } from "react";
import AppRoutes from "./routes/appRoutes";
import { Toaster } from "react-hot-toast";
import { handleRefresh } from "./redux/auth/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useSelector((state) => state.auth);

  const [check, setCheck] = useState(false);

  useEffect(() => {
    dispatch(handleRefresh());
  }, [location.pathname]);

  useEffect(() => {
    if (check && !auth.auth && !(location.pathname === "/register")) {
      navigate("/login");
    } else if (
      auth.auth &&
      (location.pathname === "/login" || location.pathname === "/register")
    ) {
      navigate("/");
    }

    setCheck(!auth.auth);
  }, [auth]);

  return (
    <>
      <AppRoutes />
      <Toaster position="top-right" reverseOrder={true} />
    </>
  );
}

export default App;
