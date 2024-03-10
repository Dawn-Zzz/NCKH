import { useDispatch } from "react-redux";
import { handleLogout, handleRefresh } from "../redux/auth/authAction";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const onClickLogout = () => {
    const confirmed = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
    if (confirmed) {
      dispatch(handleLogout());
      dispatch(handleRefresh());
    }
  };
  return (
    <>
      Home
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            onClickLogout();
          }}
        >
          logout
        </button>
      </div>
      <div>
        <NavLink
          to="/profile"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          profile
        </NavLink>
      </div>
    </>
  );
};

export default Home;
