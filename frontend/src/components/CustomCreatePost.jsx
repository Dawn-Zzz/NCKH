import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
import { handleCreatePost } from "../redux/post/postAction";

const CustomCreatePost = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);

  const onclickCreatePosts = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    dispatch(handleCreatePost(formData));
  };

  return (
    <div className="bg-primary px-4 rounded-lg">
      <div className="w-full flex items-center gap-2 py-4 border-b border-[#66666645]">
        <img
          src={auth.pic}
          alt="User Image"
          className="w-14 h-14 rounded-full object-cover"
        />
        <TextInput
          styles="w-full  py-5"
          placeholder="Title...."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextInput
          styles="w-full  py-5"
          placeholder="Content...."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-start py-2">
        <label className="flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer px-3">
          <input
            type="file"
            onChange={(e) => setImages(e.target.files)}
            className="hidden"
            accept=".jpg, .png, .jpeg , image/*"
            multiple
          />
          <i class="fa-solid fa-image"></i>
          <span>Image</span>
        </label>

        <label className="flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer px-3">
          <input
            type="file"
            multiple
            onChange={(e) => setFiles(e.target.files)}
            className="hidden"
            accept=".pdf, .doc, .docx"
          />
          <i class="fa-solid fa-file"></i>
          <span>Files</span>
        </label>

        <div>
          <CustomButton
            title="Post"
            containerStyles="bg-[#0444a4] text-white py-1 px-6 rounded-full font-semibold text-sm"
            onClick={() => {
              onclickCreatePosts();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomCreatePost;
