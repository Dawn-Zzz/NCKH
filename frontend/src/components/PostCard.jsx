import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/vi";

const PostCard = ({ post }) => {
  moment.locale("vi");

  return (
    <Link to={`/community/post/${post._id}`}>
      <div className="mb-2 bg-primary p-4 rounded-xl">
        <div className="flex gap-3 items-center mb-2">
          <img
            src={post.user.pic}
            alt="img"
            className="w-14 h-14 object-cover rounded-full"
          />

          <div className="flex flex-col">
            <p className="font-medium text-lg text-ascent-1">{post.title}</p>
            <span className="text-ascent-2">
              {moment(post.updatedAt).fromNow()}
            </span>
            <span className="text-ascent-1">{post.user.name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
