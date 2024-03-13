import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Box, Button, Container, FormGroup, Table } from "@mui/material";
import {
  BoxContainer,
  FormContainer,
  SubmitButton,
  Input,
} from "../../components/accountBox/common";

const EditPost = () => {
  const location = useLocation();
  const [post, setPost] = useState({});
  const [caption, setCaption] = useState("");
  const [tags, setTags] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    setCaption(location.state.caption);
    setTags(location.state.tags);
    setImg(location.state.img);
  }, []);
  console.log("edit post", location.state);

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };
  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };
  const handleImgChange = (e) => {
    setImg(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("button clicked");
    console.log("submit", caption, tags, img);
    try {
      await axios
        .put(`http://localhost:8001/api/posts/${location.state._id}`, {
          // userId,
          caption,
          img,
          tags,
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
      <h1>Update Your Posts</h1>
      <img src="https://media0.giphy.com/media/2x0tJVAL3IqFnZYhYt/giphy.gif?cid=790b76110k2tgqn7cuiy8spvqd8kme9mfbzcxsu9rvzduohj&ep=v1_gifs_search&rid=giphy.gif&ct=g"></img>
      <BoxContainer>
        <FormContainer>
          <Input
            type="text"
            placeholder="Enter Caption"
            value={caption}
            onChange={handleCaptionChange}
            className="p-1"
          />
          <Input
            type="text"
            placeholder="Enter Tags"
            value={tags}
            onChange={handleTagsChange}
            className="p-2"
          />
          <Input
            type="text"
            placeholder="Enter Img Link"
            value={img}
            onChange={handleImgChange}
            className="p-3"
          />

          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </FormContainer>
      </BoxContainer>
      {/* Edit Form */}
    </div>
  );
};

export default EditPost;
