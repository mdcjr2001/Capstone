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
import axios from 'axios'

export function LoginForm(props) {


  const history=useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
      e.preventDefault();

      try{

          await axios.post("http://localhost:8000/",{
              email,password
          })
          .then(res=>{
              if(res.data=="exist"){
                  history("/home",{state:{id:email}})
              }
              else if(res.data=="notexist"){
                  alert("User have not sign up")
              }
          })
          .catch(e=>{
              alert("wrong details")
              console.log(e);
          })

      }
      catch(e){
          console.log(e);

      }

  }

    const navigate = useNavigate();
    
    const handleSignup = () => {
        navigate('/NBA') 
    } 
 
    const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email"  onChange={e => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <BoldLink href="./Forgotpassword.jsx">Forgot your password?</BoldLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton onClick={submit}>Signin</SubmitButton>
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

