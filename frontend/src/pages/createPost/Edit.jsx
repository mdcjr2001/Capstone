
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import array from "./array";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
	
	const [Caption, setCaption] = useState("");
	const [Tags, setTags] = useState("");
	const [id, setid] = useState("");
	const [image, setimage] = useState("");


	let history = useNavigate();


	let index = array
		.map(function (e) {
			return e.id;
		})
		.indexOf(id);


	const handelSubmit = (e) => {

		e.preventDefault();
		if (Caption == "" || Tags == "") {
			alert("invalid input");
			return;
		}


		let a = array[index];

        a.id = id;
		a.Caption = Caption;
		a.Tags = Tags;
        a.image = image;
	


		history("/Createpost");
	};

	
	useEffect(() => {
		setCaption(localStorage.getItem("Caption"));
		setTags(localStorage.getItem("Tags"));
		setid(localStorage.getItem("id"));
        setimage(localStorage.getItem("image link"));

	}, []);

	return (
		<div>
			<Form
				className="d-grid gap-2"
				style={{ margin: "5rem" }}
			>
			
				<Form.Group
					className="mb-3"
					controlId="formBasicEmail"
				>
					<Form.Control
						value={Caption}
						onChange={(e) =>
							setCaption(e.target.value)
						}
						type="text"
						placeholder="Enter Caption"
					/>
				</Form.Group>


				<Form.Group
					className="mb-3"
					controlId="formBasicPassword"
				>
					<Form.Control
						value={Tags}
						onChange={(e) =>
							setTags(e.target.value)
						}
						type="text"
						placeholder="Tags"
					/>
				</Form.Group>

                <Form.Group
					className="mb-3"
					controlId="formBasicPassword"
				>
					<Form.Control
						value={image}
						onChange={(e) =>
							setimage(e.target.value)
						}
						type="text"
						placeholder="Image Link"
					/>
				</Form.Group>

				
				<Button
					onClick={(e) => handelSubmit(e)}
					variant="primary"
					type="submit"
					size="lg"
				>
					Update
				</Button>


				<Link className="d-grid gap-2" to="/Createpost">
					<Button variant="warning" size="lg">
						Home
					</Button>
				</Link>
			</Form>
		</div>
	);
}

export default Edit;
