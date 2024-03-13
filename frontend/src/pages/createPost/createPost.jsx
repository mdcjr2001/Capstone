import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Sidebar from "../../components/Sidebar/sidebar";
import {
  BoxContainer,
  FormContainer,
  SubmitButton,
  Input,
} from "../../components/accountBox/common";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreatePosts() {
  const [posts, setPosts] = useState([]);
  const [caption, setCaptionChange] = useState("");
  const [img, setImgChange] = useState("");
  const [tags, setTagsChange] = useState("");
  const [inputValue, setInputValue] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      try {
        await axios
          .get("http://localhost:8001/api/posts/")
          .then((res) => {
            console.log("fetch response", res.data);
            setPosts(res.data.data);
          })
          .catch((e) => {
            alert("wrong post");
            console.log(e);
          });
      } catch (e) {
        console.log(e);
      }
    };
    getPosts();
  }, []);

  const getPosts = async () => {
    console.log("get post clicked");
    try {
      await axios
        .get("http://localhost:8001/api/posts/")
        .then((res) => {
          console.log("fetch response", res.data.data);
          setPosts(res.data.data);
        })
        .catch((e) => {
          alert("Getting posts");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const updatePost = async (id) => {
    await axios
      .post(`http://localhost:8001/api/posts/${id}`)
      .then((res) => {
        console.log("fetch response", res.data);
        setPosts(res.data.data);
      })
      .catch((e) => {
        // alert("wrong post");
        console.log(e);
      });
    getPosts();
  };

  async function submit(e) {
    e.preventDefault();
    console.log("button clicked");
    console.log("submit", caption, tags, inputValue, editIndex, img);
    try {
      await axios
        .post("http://localhost:8001/api/posts/createpost/", {
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
          alert("Successgul creation");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  const handleImgChange = (e) => {
    setImgChange(e.target.value);
  };

  const handleCaptionChange = (e) => {
    setCaptionChange(e.target.value);
  };

  const handleTagsChange = (e) => {
    setTagsChange(e.target.value);
  };

  const handleEditPost = (item) => {
    navigate("/EditPost", { state: item });
  };

  const handleDeletePost = async (item) => {
    console.log("button clicked");
    console.log("submit", caption);
    try {
      await axios
        .delete(`http://localhost:8001/api/posts/${item._id}`, {
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
          alert("Post has been deleted");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <FormContainer>
        <BoxContainer>
          <img src="https://media1.giphy.com/media/j0vnjUEQefNGFaWcLp/giphy.gif"></img>
          <h1>Create a Post</h1>
          {/* input field */}
          <div className="function">
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
              className="p-1"
            />
            <Input
              type="text"
              placeholder="Enter Image Link"
              value={img}
              onChange={handleImgChange}
              className="p-1"
            />
          </div>
          &nbsp;
          <BoxContainer>
            <SubmitButton onClick={submit}>Upload</SubmitButton>
          </BoxContainer>
          &nbsp;
          <h1>Display Content</h1>
          <button onClick={getPosts}>Get Posts</button>
          <div className="display">
            {posts.map((item, index) => (
              <div key={index}>
                <p>{item.caption}</p>
                <p>{item.tags}</p>
                <p>{item.img}</p>
                <button onClick={() => handleEditPost(item)}>Edit Post</button>
                <button onClick={() => handleDeletePost(item)}>
                  Delete Post
                </button>
              </div>
            ))}
          </div>
          <div className="Sidebar">
            <Sidebar />
          </div>
        </BoxContainer>
      </FormContainer>
    </div>
  );
}
