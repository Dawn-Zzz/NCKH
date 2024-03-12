import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetPost } from "../redux/post/postAction";
import { NavLink } from "react-router-dom";

const AllPost = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(handleGetPost());
  }, []);

  return (
    <div>
      <NavLink
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
      >
        home
      </NavLink>
      {post &&
        post.rows.length > 0 &&
        post.rows.map((item) => {
          return (
            <>
              <ul>
                <li>
                  <NavLink
                    to={`${item.id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
                  >
                    {item.title}
                  </NavLink>
                </li>
              </ul>
            </>
          );
        })}
    </div>
  );
};

export default AllPost;
