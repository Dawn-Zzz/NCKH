import moment from "moment";
import "moment/locale/vi";
import { useEffect, useState } from "react";
import CustomCreateReply from "./CustomCreateReply";
import ReplyCard from "./ReplyCard";
import { useDispatch, useSelector } from "react-redux";
import { handleGetReplyByCommentId } from "../redux/reply/replyAction";
import Loading from "./Loading";
import toast from "react-hot-toast";

const CommentCard = ({ key, comment }) => {
  moment.locale("vi");
  const dispatch = useDispatch();
  const reply = useSelector((state) => state.reply);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replies, setReplies] = useState([]);

  const addReply = (data) => {
    // Cố gắn tìm hướng giải quyết khác
    let updatedReplies = replies.map((comment) => {
      if (comment._id === data.commentId) {
        return {
          ...comment,
          replies: [...comment.replies, data.reply],
        };
      }
      return comment;
    });

    console.log("updatedReplies", updatedReplies);

    setReplies(updatedReplies);
  };

  const toggleReplyForm = (commentId) => {
    setShowReplyForm(!showReplyForm);
    if (!showReplyForm) {
      dispatch(handleGetReplyByCommentId(commentId));
    } else {
      setReplies((prevReplies) =>
        prevReplies.filter((reply) => reply._id !== commentId)
      );
    }
  };

  useEffect(() => {
    if (showReplyForm && !reply.isLoading) {
      setReplies((prevReplies) => [...prevReplies, reply.data]);
      console.log("check");
    }
  }, [showReplyForm, reply.data]);

  return (
    <div key={key} className="mb-2 bg-primary p-4 rounded-xl">
      <div className="flex gap-3 items-center mb-2">
        <img
          src={comment.user.pic}
          alt="img"
          className="w-14 h-14 object-cover rounded-full"
        />

        <div className="flex flex-col">
          <span className="font-medium pt-1">
            {comment.user.name} . {moment(comment.updatedAt).fromNow()}
          </span>
          <p className="font-small">{comment.content}</p>
          <span className="font-medium pt-1">
            <button onClick={() => toggleReplyForm(comment._id)}>
              Phản hồi
            </button>
          </span>
        </div>
      </div>
      {replies._id === comment._id ? (
        <>
          {replies.replies?.length > 0 && showReplyForm && (
            <div className="ml-14">
              {replies.replies?.map((reply, index) => (
                <ReplyCard key={index} reply={reply} />
              ))}
            </div>
          )}
        </>
      ) : null}

      {replies.map((item, index) => (
        <>
          {item._id === comment._id ? (
            <>
              {item.replies.length > 0 && showReplyForm && (
                <div className="ml-14">
                  {item.replies.map((reply, index) => (
                    <ReplyCard key={index} reply={reply} />
                  ))}
                </div>
              )}
            </>
          ) : null}
        </>
      ))}

      {showReplyForm && (
        <div className="ml-11">
          <CustomCreateReply commentId={comment._id} addReply={addReply} />
        </div>
      )}
    </div>
  );
};

export default CommentCard;
