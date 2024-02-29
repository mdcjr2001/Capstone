import "./styles.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function Createpost() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [inputValue, setInputValue] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleInputValue = () => {
    if (!firstName || !lastName) {
      return;
    }
    if (editIndex === -1) {
      // Adding a new item
      setInputValue((prevVal) => [
        ...prevVal,
        {
          firstName: firstName,
          lastName: lastName
        }
      ]);
    } else {
      // Updating an existing item
      const updatedItems = [...inputValue];
      updatedItems[editIndex] = {
        firstName: firstName,
        lastName: lastName
      };
      setInputValue(updatedItems);
      setEditIndex(-1);
    }

    setFirstName("");
    setLastName("");
  };

  const handleDeleteAll = () => {
    setInputValue([]);
    setEditIndex(-1);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFirstName(inputValue[index].firstName);
    setLastName(inputValue[index].lastName);
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
      <input
        type="text"
        placeholder="Enter Caption"
        value={firstName}
        onChange={handleFirstNameChange}
        className="p-1"
      />
      &nbsp;
      <input
        type="text"
        placeholder="Enter Tags"
        value={lastName}
        onChange={handleLastNameChange}
        className="p-1"
      />
      &nbsp;
      {!firstName || !lastName ? (
        <Button variant="primary" onClick={handleInputValue} disabled>
          {editIndex === -1 ? "Add" : "Update"}
        </Button>
      ) : (
        <Button variant="primary" onClick={handleInputValue}>
          {editIndex === -1 ? "Add" : "Update"}
        </Button>
      )}
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
                    <th>Caption</th>
                    <th>Last Name</th>
                    <th width="240px">Tags</th>
                  </tr>
                </thead>
                <tbody>
                  {inputValue.map((item, index) => {
                    return (
                      <tr key={index} className="al">
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>
                          {editIndex === index ? (
                            <Button
                              variant="outline-danger"
                              style={{
                                marginRight: "5px",
                                height: "2.2rem"
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
                                  height: "2.2rem"
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
                                  height: "2.2rem"
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
      </div>
    </div>
  );
}

