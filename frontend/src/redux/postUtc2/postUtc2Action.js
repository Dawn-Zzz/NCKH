import { getNotificationPostAPI } from "../../services/postUtc2Service";
import {
  getPostUtc2,
  getPostUtc2Error,
  getPostUtc2Success,
} from "./postUtc2Slice";

export const handleGetNotificationPost = () => {
  return async (dispatch, getState) => {
    dispatch(getPostUtc2());

    let res = await getNotificationPostAPI();

    if (res.status === "success") {
      dispatch(getPostUtc2Success(res.responseData));
    } else {
      dispatch(getPostUtc2Error());
    }
  };
};
