import moment from "moment";
import "moment/locale/vi";
import { useEffect, useState } from "react";
import CustomCreateReply from "./CustomCreateReply";
import ReplyCard from "./ReplyCard";

const CommentCard = ({ comment }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replies, setReplies] = useState([]);

  moment.locale("vi");

  const toggleReplyForm = () => {
    setShowReplyForm(!showReplyForm);
  };

  useEffect(() => {
    setReplies(comment?.replies || []);
  }, [comment.replies]);

  const addReply = (newReply) => {
    setReplies([newReply, ...replies]);
  };

  return (
    <div className="mb-2 bg-primary p-4 rounded-xl">
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
            <button onClick={toggleReplyForm}>Phản hồi</button>
          </span>
        </div>
      </div>

      {replies?.length > 0
        ? replies?.map((item, index) => (
            <div className="ml-14">
              <ReplyCard key={index} reply={item} />
            </div>
          ))
        : null}

      {showReplyForm && (
        <div className="ml-11">
          <CustomCreateReply commentId={comment._id} addReply={addReply} />
        </div>
      )}
    </div>
  );
};

export default CommentCard;
