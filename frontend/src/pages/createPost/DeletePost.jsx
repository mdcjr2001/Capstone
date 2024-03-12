import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";

import array from "./array";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BoxContainer, SubmitButton } from "../../components/accountBox/common";
import axios from "axios";
import Sidebar from "../../components/Sidebar/sidebar";

function DeletePost() {
  const [Caption, setCaption] = useState("");
  const [Tags, setTags] = useState("");
  const { postId } = useParams();
  const [posts, setPosts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Caption, Tags);

    const postData = {
      // id: id,
      Caption,
      Tags,
    };
    const handleDelete = async (postId) => {
        const response = await fetch(`http://localhost:8001/api/posts/${postId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        });
        if (response.ok) {
          alert("Post has been deleted");
        }
      };
    
      let history = useNavigate();

      return(
        <div>
            DeletePost
        </div>
      )
  }
}
