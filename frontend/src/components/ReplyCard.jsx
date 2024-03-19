import moment from "moment";
import "moment/locale/vi";

const ReplyCard = ({ key, reply }) => {
  return (
    <div className="mb-2 bg-primary p-1 rounded-xl">
      <div className="flex gap-3 items-center mb-2">
        <img
          src={reply.user.pic}
          alt="img"
          className="w-10 h-10 object-cover rounded-full"
        />

        <div className="flex flex-col">
          <span className="font-medium pt-1">
            {reply.user.name} . {moment(reply.updatedAt).fromNow()}
          </span>
          <p className="font-small">{reply.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ReplyCard;
