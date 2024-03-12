// import "./styles.css";
// import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Sidebar from "../../components/Sidebar/sidebar";
// import { BoxContainer, SubmitButton } from "../../components/accountBox/common";
// import axios from "axios";
// import SinglePost from "./SinglePost";
// import { Link } from "react-router-dom";

// export default function CreatePost() {
//   const [posts, setPosts, removePosts, updatePosts] = useState([]);
//   const [caption, setCaptionChange] = useState("");
//   const [img, setImgChange] = useState("");
//   const [tags, setTagsChange] = useState("");
//   const [id, setIdChange] = useState("");
//   const [inputValue, setInputValue] = useState([]);
//   const [editIndex, setEditIndex] = useState(-1);

//   useEffect(() => {
//     const getPosts = async () => {
//       try {
//         await axios
//           .get("http://localhost:8001/api/posts/")
//           .then((res) => {
//             console.log('fetch response', res.data);
//             setPosts(res.data.data)
//           })
//           .catch((e) => {
//             alert("wrong post");
//             console.log(e);
//           });
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     getPosts()
//   }, []);

//   const getPosts = async () => {
//     try {
//       await axios
//         .get("http://localhost:8001/api/posts/")
//         .then((res) => {
//           console.log('fetch response', res.data.data[0]);
//           setPosts(res.data.data)
//         })
//         .catch((e) => {
//           alert("wrong post");
//           console.log(e);
//         });
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   async function submit(e) {
//     e.preventDefault();
//     console.log("button clicked");
//     console.log(caption, tags, inputValue, editIndex, img);
//     try {
//       await axios
//         .post("http://localhost:8001/api/posts/createpost/", {
//           id,
//           caption,
//           img,
//           tags,
//         })
//         .then((res) => {
//           if (res.data == "exist") {
//             alert("Post already exists");
//           }
//         })
//         .catch((e) => {
//           alert("wrong post");
//           console.log(e);
//         });
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   // async function handlesubmit(e) {
//   //   e.preventDefault();
//   //   console.log("button clicked");
//   //   console.log(caption, tags, inputValue, editIndex, img);
//   //   try {
//   //     await axios
//   //       .delete("http://localhost:8001/api/posts/<id>", {
//   //         id,
//   //         caption,
//   //         img,
//   //         tags,
//   //       })
//   //       .then((res) => {
//   //         if (res.data == "exist") {
//   //           alert("Post already exists");
//   //         }
//   //       })
//   //       .catch((e) => {
//   //         alert("wrong post");
//   //         console.log(e);
//   //       });
//   //   } catch (e) {
//   //     console.log(e);
//   //   }
//   // }

//   // function handleImgChangx(event) {
//   //   setImgChange(event.target.files[0]);
//   // }

//   const handleImgChange = (e) => {
//     setImgChange(e.target.value);
//   };

//   const handleIdChange = (e) => {
//     setTagsChange(e.target.value);
//   };

//   const handleCaptionChange = (e) => {
//     setCaptionChange(e.target.value);
//   };

//   const handleTagsChange = (e) => {
//     setTagsChange(e.target.value);
//   };

//   const handleInputValue = () => {
//   if (img || !caption || !tags || !id ) {
//       return;
//     }
//     if (editIndex === -1) {
//       // Adding a new item
//       setInputValue((prevVal) => [
//         ...prevVal,
//         {
//           id: id,
//           img: img,
//           caption: caption,
//           tags: tags,
//         },
//       ]);
//     } else {
//       // Updating an existing item
//       const updatedItems = [...inputValue];
//       updatedItems[editIndex] = {
//         img: img,
//         id: id,
//         caption: caption,
//         tags: tags,
//       };
//       setInputValue(updatedItems);
//       setEditIndex(-1);
//     }
//     setImgChange("");
//     setCaptionChange("");
//     setTagsChange("");
//     setIdChange("");
//   };

//   const handleDeleteAll = () => {
//     setInputValue([]);
//     setEditIndex(-1);
//   };

//   const handleEdit = (item, index) => {
//     setEditIndex(index);
//     // setImg(inputValue[index].img);
//     // setCaptionChange(inputValue[index].caption);
//     setTagsChange(inputValue[index].tags);
//   };

//   // const deletPost = (postTags) => {
//   //   const filteredItems = [...posts];
//   //   filteredItems.splice(posts, 1);
//   //   setInputValue(filteredItems);
//   //   setEditIndex(-1);
//   // };

//   const deletePost = (item, index) => {
//     posts.splice(index, 1)
//     setPosts([1]);
//   };

//   const editPost = (item, index) => {
//     setEditIndex(index);
//     setTagsChange(inputValue[index])
//   }

//   return (
//     <div className="App">
//       <h1>Create a Post</h1>
//       {/* input field */}
//       <input type= "file" onChange={img}></input>
//       <input
//         type="text"
//         placeholder="Enter Post Id"
//         value={id}
//         onChange={handleIdChange}
//         className="p-1"
//       />
//       <input
//         type="text"
//         placeholder="Enter Image Link"
//         value={img}
//         onChange={handleImgChange}
//         className="p-1"
//        />
//       <img src={img} />
//       <input
//         type="text"
//         placeholder="Enter Caption"
//         value={caption}
//         onChange={handleCaptionChange}
//         className="p-1"
//       />
//       &nbsp;
//       <input
//         type="text"
//         placeholder="Enter Tags"
//         value={tags}
//         onChange={handleTagsChange}
//         className="p-1"
//       />
//       &nbsp;
//        {!img || !caption || !tags || !id ? (
//         <Button variant="primary" onClick={submit}>
//           {editIndex === -1 ? "Add" : "Update"}
//         </Button>
//       ) : (
//         <Button variant="primary" onClick={handleInputValue}>
//           {editIndex === -1 ? "Add" : "Update"}
//         </Button>
//       )}
//       <BoxContainer>
//         <SubmitButton onClick={submit}>Upload</SubmitButton>
//       </BoxContainer>
//       &nbsp;
{
  /* {inputValue.length === 0 ? (
        <Button variant="danger" onClick={handleDeleteAll} disabled>
          DeleteAll
        </Button>
      ) : (
        <Button variant="danger" onClick={handleDeleteAll}>
          DeleteAll
        </Button>
      )} */
}
{
  /* Display content */
}
// <h1>Display Content</h1>
// <button onClick={getPosts}>Get Posts</button>

// <div className="display">
{
  /* {
        posts.map((item, index)=>(
          <tr key={index}>
            <td>{id}</td>
            <td>{tags}</td>
            <td>{caption}</td>
            <p>{item.tags}</p>
            <p>{item.id}</p> */
}
{
  /* <SinglePost key={tags} post={posts} onDelete={deletePost} /> */
}
{
  /* <SinglePost key={tags} post={posts} onchange={editPost} /> */
}
{
  /* <BoxContainer>
        <SubmitButton onClick={deletePost}>Delete</SubmitButton>
      </BoxContainer>
      <BoxContainer>
        <Link to ={`/UpdatePost/${id}`}> Edit</Link>
      </BoxContainer>
            </tr>
        ))
      }
      </div>
      <div className="justify">
       {
        posts.map((item, index)=>(
          <div key={index}>
            <p>{item.tags}</p>
            </div>
        ))
      }
      </div> */
}
{
  /* <div className="mt-3">
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
                    <th>Tags</th>
                    <th width="240px">Tags</th>
                  </tr>
                </thead>
                <tbody>
                  {inputValue.map((item, index) => {
                    return (
                      <tr key={index} className="al">
                        <td>{item img}</td>
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
                              onClick={() => deletePost(index)}
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
      </div> */
}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";

import array from "./array";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BoxContainer, SubmitButton } from "../../components/accountBox/common";
import axios from "axios";
import Sidebar from "../../components/Sidebar/sidebar";

function CreatePost() {
  const [Caption, setCaption] = useState("");
  const [Tags, setTags] = useState("");
  // const { postId } = useParams();
  const [posts, setPosts] = useState([]);
  const [post, postId ] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Caption, Tags);

    const postData = {
      // id: id,
      Caption,
      Tags,
    };

    try {
      const response = await fetch(
        "http://localhost:8001/api/posts/createpost/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Post has been created");
        navigate("/Createpost");
      } else {
        alert(data.message || "Failed to create post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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

  function setID(postId, Caption, Tags, image) {
    localStorage.setItem("postid", postId);
    localStorage.setItem("Caption", Caption);
    localStorage.setItem("Tags", Tags);
    localStorage.setItem("image", image);
  }

  function deleted(id) {
    let index = array
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    array.splice(index, 1);

    history("/Createpost");
  }

  return (
    <div style={{ margin: "5rem" }}>
      <h1>Create Your Post Here</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Caption</th>
            <th>Tags</th>
            <th>Image Link</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.Caption}</td>
                <td>{item.Tags}</td>
                <td>{item.image}</td>

                <td>
                  <Link to={`/Edit`}>
                    <Button
                      onClick={(e) =>
                        setID(item.id, item.Caption, item.Tags, item.image)
                      }
                      variant="info"
                    >
                      Update
                    </Button>
                  </Link>
                </td>

                <td>
                  <Button onClick={(e) => deleted(item.id)} variant="danger">
                    Delete
                  </Button>
                </td>
                <td>
                  <BoxContainer>
                    <SubmitButton onClick={handleSubmit}>Post</SubmitButton>
                    <input onChange={(e) => {
                    // setCaption(e.target.value);
                    }} />
                    <SubmitButton onClick={handleDelete}>Delete</SubmitButton>
                    <input onChange={handleDelete} />
                  </BoxContainer>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Link className="d-grid gap-2" to="/Create">
        <Button variant="warning" size="lg">
          Create
        </Button>
      </Link>
      <Sidebar />
    </div>
  );
}

export default CreatePost;
