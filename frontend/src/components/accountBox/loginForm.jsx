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
import { BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import logo from "../../images/logo.jpeg"

export function LoginForm(props) {
 
    const navigate = useNavigate();
    
    const handleSignup = () => {
        navigate('/Home') 
    } 
 
    const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <img src="https://t4.ftcdn.net/jpg/03/30/40/57/360_F_330405756_ybSB0fbh76IfrxGLVqiSxIm4vqCBc5tQ.jpg" alt="logo" width="230" />
        <Input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email"   />
        <Input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password"   />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <BoldLink href="./Forgotpassword.jsx">Forgot your password?</BoldLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton onClick={handleSignup}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Don't have an account?{" "}
        <BoldLink onClick={switchToSignup} href="#">
          Signup
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}

