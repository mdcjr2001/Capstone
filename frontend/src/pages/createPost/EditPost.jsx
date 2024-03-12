import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const EditPost = () => {
  const location = useLocation();
  const [post, setPost] = useState({});
  const [caption, setCaption] = useState("");

  useEffect(() => {
    setCaption(location.state.caption);
  }, []);
  console.log("edit post", location.state);

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("button clicked");
    console.log('submit',caption);
    try {
      await axios
        .put(`http://localhost:8001/api/posts/${location.state._id}`, {
          // userId,
          caption,
        //   img,
        //   tags,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("Post already exists");
          }
        })
        .catch((e) => {
          alert("wrong post");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
        <button onClick={handleSubmit}>Submit</button>
      <input
        type="text"
        placeholder="Enter Caption"
        value={caption}
        onChange={handleCaptionChange}
        className="p-1"
      />
      {/* Edit Form */}
    </div>
  );
};

export default EditPost;
