import "./styles.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Sidebar from "../../components/Sidebar/sidebar";
import { BoxContainer, SubmitButton } from "../../components/accountBox/common";
import axios from "axios";

export default function CreatePost() {
  const [caption, setCaptionChange] = useState("");
  const [img, setImgChange] = useState("");
  const [tags, setTagsChange] = useState("");
  const [inputValue, setInputValue] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  

  async function submit(e) {
    e.preventDefault();
    console.log("button clicked")
    console.log(caption, tags, inputValue, editIndex, img);
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
          alert("wrong post");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  function getImg(event) {
    setImg(event.target.files[0]);
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

  const handleInputValue = () => {
    if ( img || !caption || !tags) {
      return;
    }
    if (editIndex === -1) {
      // Adding a new item
      setInputValue((prevVal) => [
        ...prevVal,
        {
         img: img,
          caption: caption,
          tags: tags,
        },
      ]);
    } else {
      // Updating an existing item
      const updatedItems = [...inputValue];
      updatedItems[editIndex] = {
       img: img,
        caption: caption,
        tags: tags,
      };
      setInputValue(updatedItems);
      setEditIndex(-1);
    }
    setImg("");
    setCaptionChange("");
    setTagsChange("");
  };

  const handleDeleteAll = () => {
    setInputValue([]);
    setEditIndex(-1);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setImg(inputValue[index].img);
    setCaptionChange(inputValue[index].firstName);
    setImgChange(inputValue[index].lastName);
  };

  const DeleteItem = (index) => {
    const filteredItems = [...inputValue];
    filteredItems.splice(index, 1);
    setInputValue(filteredItems);
    setEditIndex(-1);
  };

  return (
    <div className="App">
      <h1>Create a Post</h1>
      {/* input field */}
      {/* <input type= "text" onChange={getFile}></input> */}
      <input
        type="text"
        placeholder="Enter Image Link"
        value={img}
        onChange={handleImgChange}
        className="p-1"
      />
      <img src= {img} />
      <input
        type="text"
        placeholder="Enter Caption"
        value={caption}
        onChange={handleCaptionChange}
        className="p-1"
      />
      &nbsp;
      <input
        type="text"
        placeholder="Enter Tags"
        value={tags}
        onChange={handleTagsChange}
        className="p-1"
      />
      &nbsp;
      { img || !caption || !tags ? (
        <Button variant="primary" onClick={handleInputValue}>
          {editIndex === -1 ? "Add" : "Update"}
        </Button>
      ) : (
        <Button variant="primary" onClick={submit}>
          {editIndex === -1 ? "Add" : "Update"}
        </Button>
      )}
      <BoxContainer>
        <SubmitButton onClick={submit}>Upload</SubmitButton>
      </BoxContainer>
      &nbsp;
      {inputValue.length === 0 ? (
        <Button variant="danger" onClick={handleDeleteAll} disabled>
          DeleteAll
        </Button>
      ) : (
        <Button variant="danger" onClick={handleDeleteAll}>
          DeleteAll
        </Button>
      )}
      {/* Display content */}
      <div className="mt-3">
        {inputValue.length === 0 ? (
          <div className="h3">Add content for your post</div>
        ) : (
          <div className="container">
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Caption</th>
                    {/* <th>Tags</th> */}
                    <th width="240px">Tags</th>
                  </tr>
                </thead>
                <tbody>
                  {inputValue.map((item, index) => {
                    return (
                      <tr key={index} className="al">
                        {/* <td>{item img}</td> */}
                        <td>{item.caption}</td>
                        <td>{item.tags}</td>
                        <td>
                          {editIndex === index ? (
                            <Button
                              variant="outline-danger"
                              style={{
                                marginRight: "5px",
                                height: "2.2rem",
                              }}
                              onClick={() => DeleteItem(index)}
                            >
                              <span role="img" aria-label="delete">
                                ❌
                              </span>
                            </Button>
                          ) : (
                            <>
                              <Button
                                variant="outline-primary"
                                style={{
                                  marginRight: "5px",
                                  height: "2.2rem",
                                }}
                                onClick={() => handleEdit(index)}
                              >
                                <span role="img" aria-label="edit">
                                  🖊️
                                </span>
                              </Button>
                              <Button
                                variant="outline-danger"
                                style={{
                                  marginRight: "5px",
                                  height: "2.2rem",
                                }}
                                onClick={() => DeleteItem(index)}
                              >
                                <span role="img" aria-label="delete">
                                  ❌
                                </span>
                              </Button>
                            </>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
        <Sidebar />
      </div>
    </div>
  );
}
