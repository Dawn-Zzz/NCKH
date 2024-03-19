import {
  getPostById,
  getPostByIdError,
  getPostByIdSuccess,
} from "./postDetailsUtc2Slice";
import { getNotificationPostByIdAPI } from "../../services/postUtc2Service";

export const handleNotificationPostById = (postUtc2Id) => {
  return async (dispatch, getState) => {
    dispatch(getPostById());

    let res = await getNotificationPostByIdAPI(postUtc2Id);

    if (res.status === "success") {
      dispatch(getPostByIdSuccess(res.responseData));
    } else {
      dispatch(getPostByIdError());
    }
  };
};
