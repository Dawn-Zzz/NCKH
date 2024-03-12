import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <>
      Profile
      <div>
        <NavLink
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          home
        </NavLink>
      </div>
      <div>
        <p>{auth.name}</p>
      </div>
    </>
  );
};

export default Profile;
