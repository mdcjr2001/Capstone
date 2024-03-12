// import "./styles.css";
// import React, { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import { BoxContainer, SubmitButton } from "../../components/accountBox/common";
// import axios from "axios";


// export default function Create() {
// const [posts, setPosts] = useState([]);
//   const [caption, setCaption] = useState("");
//   const [tags, setTags] = useState("");
//   const [inputValue, setInputValue] = useState([]);
//   const [editIndex, setEditIndex] = useState(-1);


//   useEffect(() => {
//         const getPosts = async () => {
//           try {
//             await axios
//               .get("http://localhost:8001/api/posts/")
//               .then((res) => {
//                 console.log('fetch response', res.data);
//                 setPosts(res.data.data)
//               })
//               .catch((e) => {
//                 alert("wrong post");
//                 console.log(e);
//               });
//           } catch (e) {
//             console.log(e);
//           }
//         };
//         getPosts()
//       }, []);
    
//       const getPosts = async () => {
//         try {
//           await axios
//             .get("http://localhost:8001/api/posts/")
//             .then((res) => {
//               console.log('fetch response', res.data.data[0]);
//               setPosts(res.data.data)
//             })
//             .catch((e) => {
//               alert("wrong post");
//               console.log(e);
//             });
//         } catch (e) {
//           console.log(e);
//         }
//       };
    
    
    
    
//       async function submit(e) {
//         e.preventDefault();
//         console.log("button clicked");
//         console.log(caption, tags, inputValue, editIndex);
//         try {
//           await axios
//             .post("http://localhost:8001/api/posts/createpost/", {
//               // userId,
//               caption,
//               // img,
//               tags,
//             })
//             .then((res) => {
//               if (res.data == "exist") {
//                 alert("Post already exists");
//               }
//             })
//             .catch((e) => {
//               alert("wrong post");
//               console.log(e);
//             });
//         } catch (e) {
//           console.log(e);
//         }
//       }
    

//   const handleCaptionChange = (e) => {
//     setCaption(e.target.value);
//   };

//   const handleTagsChange = (e) => {
//     setTags(e.target.value);
//   };

//   const handleInputValue = () => {
//     if (!caption || !tags) {
//       return;
//     }
//     if (editIndex === -1) {
//       // Adding a new item
//       setInputValue((prevVal) => [
//         ...prevVal,
//         {
//           caption: caption,
//           tags: tags
//         }
//       ]);
//     } else {
//       // Updating an existing item
//       const updatedItems = [...inputValue];
//       updatedItems[editIndex] = {
//         caption: caption,
//         tags: tags
//       };
//       setInputValue(updatedItems);
//       setEditIndex(-1);
//     }

//     setCaption("");
//     setTags("");
//   };

//   const handleDeleteAll = () => {
//     setInputValue([]);
//     setEditIndex(-1);
//   };

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setCaption(inputValue[index].caption);
//     setTags(inputValue[index].lastName);
//   };

//   const DeleteItem = (index) => {
//     const filteredItems = [...inputValue];
//     filteredItems.splice(index, 1);
//     setInputValue(filteredItems);
//     setEditIndex(-1);
//   };

//   return (
//     <div className="App">
//       <h1>Create a Post</h1>
//       {/* input field */}
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
//       {/* <input
//         type="text"
//         placeholder="Enter Image Link"
//         value={img}
//         onChange={handleImgChange}
//         className="p-1"
//       /> */}
//       {/* &nbsp; */}
//       {!caption || !tags ? (
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
//         </BoxContainer>
//       &nbsp;
//       {inputValue.length === 0 ? (
//         <Button variant="danger" onClick={handleDeleteAll} disabled>
//           DeleteAll
//         </Button>
//       ) : (
//         <Button variant="danger" onClick={handleDeleteAll}>
//           DeleteAll
//         </Button>
//       )}
//       {/* Display content */}
//       <button onClick={getPosts}>Get Posts</button>

//       <div className="mt-3">
//         {inputValue.length === 0 ? (
//           <div className="h3">Add content for your post</div>
//         ) : (
//           <div className="container">
//             <div className="card-body">
//               <table className="table table-bordered">
//                 <thead>
//                   <tr>
//                     <th>Caption</th>
//                     <th>Last Name</th>
//                     <th width="240px">Tags</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {inputValue.map((item, index) => {
//                     return (
//                       <tr key={index} className="al">
//                         <td>{item.caption}</td>
//                         <td>{item.tags}</td>
//                         <td>
//                           {editIndex === index ? (
//                             <Button
//                               variant="outline-danger"
//                               style={{
//                                 marginRight: "5px",
//                                 height: "2.2rem"
//                               }}
//                               onClick={() => DeleteItem(index)}
//                             >
//                               <span role="img" aria-label="delete">
//                                 ❌
//                               </span>
//                             </Button>
//                           ) : (
//                             <>
//                               <Button
//                                 variant="outline-primary"
//                                 style={{
//                                   marginRight: "5px",
//                                   height: "2.2rem"
//                                 }}
//                                 onClick={() => handleEdit(index)}
//                               >
//                                 <span role="img" aria-label="edit">
//                                   🖊️
//                                 </span>
//                               </Button>
//                               <Button
//                                 variant="outline-danger"
//                                 style={{
//                                   marginRight: "5px",
//                                   height: "2.2rem"
//                                 }}
//                                 onClick={() => DeleteItem(index)}
//                               >
//                                 <span role="img" aria-label="delete">
//                                   ❌
//                                 </span>
//                               </Button>
//                             </>
//                           )}
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }





import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import array from "./array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {


    const [id, setId] = useState("")
	const [Caption, setCaption] = useState("");
	const [Tags, setTags] = useState("");
    const [image, setImage] = useState("");


	let history = useNavigate();


	const handelSubmit = (e) => {
		e.preventDefault(); 

		const ids = uuid(); 
		let uni = ids.slice(0, 8); 

		let a = Caption,
			b = Tags,
            c = id;
            c = image;
		if (Caption == "" || Tags == "" || id == "" || image == "") {
			alert("invalid input");
			return;
		}
		array.push({ id: uni, Caption: a, Tags: b, c: image });

		history("/CreatePost");
	};

	return (
		<div>
			<Form
				className="d-grid gap-2"
				style={{ margin: "5rem" }}
			>
				
				
                <Form.Group
					className="mb-3"
					controlId="formBasicAge"
				>
					<Form.Control
						onChange={(e) =>
							setId(e.target.value)
						}
						type="number"
						placeholder="Id"
						required
					/>
				</Form.Group>
                
                <Form.Group
					className="mb-3"
					controlId="formBasicName"
				>
					<Form.Control
						onChange={(e) =>
							setCaption(e.target.value)
						}
						type="text"
                        
						placeholder="Enter Caption"
						required
					/>
				</Form.Group>

				
				<Form.Group
					className="mb-3"
					controlId="formBasicAge"
				>
					<Form.Control
						onChange={(e) =>
							setTags(e.target.value)
						}
						type="text"
						placeholder="Tags"
						required
					/>
				</Form.Group>

                <Form.Group
					className="mb-3"
					controlId="formBasicAge"
				>
					<Form.Control
						onChange={(e) =>
							setImage(e.target.value)
						}
						type="text"
						placeholder="Image Link"
						required false
					/>
				</Form.Group>

				
				<Link className="d-grid gap-2" to="/Createpost">
                    <Button
					onClick={(e) => handelSubmit(e)}
					variant="primary"
					type="submit"
				>
					Submit
				</Button>
                </Link>

				
				<Link className="d-grid gap-2" to="/Createpost">
					<Button variant="info" size="lg">
						Home
					</Button>
				</Link>
			</Form>
		</div>
	);
}

export default Create;
