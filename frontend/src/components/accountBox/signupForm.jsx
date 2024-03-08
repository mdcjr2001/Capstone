import React, { useContext, useState, useEffect } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../../marginer";
import { AccountContext } from "./accountContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function SignupForm(props) {
  const history = useNavigate();

  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    console.log("button clicked");

    try {
      await axios
        .post("http://localhost:8001/api/users/create/", {
          emailId,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("User already exists");
          } else if (res.data == "notexist") {
            history("/NBA", { state: { id: emailId } });
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  // const navigate = useNavigate();

  // const handleLogin = () => {
  //     navigate('/NBA')
  // }

  const { switchToSignin } = useContext(AccountContext);
  return (
    <BoxContainer>
      <FormContainer>
        <img
          src="https://t4.ftcdn.net/jpg/03/30/40/57/360_F_330405756_ybSB0fbh76IfrxGLVqiSxIm4vqCBc5tQ.jpg"
          alt="logo"
          width="230"
        />
        {/* <Input type="text"  placeholder="Full name" /> */}
        <Input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <Input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        {/* <Input type="password" placeholder="Confirm password" /> */}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton onClick={submit}>Signup</SubmitButton>
      <LineText>
        Already have an account?{" "}
        <BoldLink onClick={switchToSignin} href="#">
          Signin
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}