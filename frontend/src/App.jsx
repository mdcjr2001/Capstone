import React, { useEffect } from "react";
import "./styles.css";
import styled, { ThemeProvider } from "styled-components";
import AccountBox from "./components/accountBox/index"
import AppRoutes from "./routes/AppRoutes";

// function App() {
//   useEffect(() => {
//     fetch("https://localhost:8000")
//   })
// }

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;


export default function App() {
  return (
  
  <AppContainer>
    <AppRoutes />    
  </AppContainer>
  )
}



// var express = require("express");
// var bodyParser = require("body-parser");

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/gfg');
// var db=mongoose.connection;
// db.on('error', console.log.bind(console, "connection error"));
// db.once('open', function(callback){
// 	console.log("connection succeeded");
// })

// var app=express()


// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({
// 	extended: true
// }));

// app.post('/SignupForm', function(req,res){
// 	var name = req.body.name;
// 	var email =req.body.email;
// 	var pass = req.body.password;
// 	var phone =req.body.phone;

// 	var data = {
// 		"name": name,
// 		"email":email,
// 		"password":pass,
// 		"phone":phone
// 	}
// db.collection('details').insertOne(data,function(err, collection){
// 		if (err) throw err;
// 		console.log("Record inserted Successfully");
			
// 	});
		
// 	return res.redirect('signup_success.html');
// })


// app.get('/',function(req,res){
// res.set({
// 	'Access-control-Allow-Origin': '*'
// 	});
// return res.redirect('index.html');
// }).listen(3000)


// console.log("server listening at port 3000");





// import React, { useContext, useState } from "react";
// import {  
// BoldLink,
//   BoxContainer,
//   FormContainer,
//   Input,
//   LineText,
//   MutedLink,
//   SubmitButton,
// } from "./common";
// import { Marginer } from "../../marginer";
// import { AccountContext } from './accountContext';
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export function SignupForm(props) {

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//     const response = await axios.post('/api/user', {
//     name,
//     email,
//     password,
//     });
//     console.log(response.data);
//     } catch (error) {
//     console.error(error);
//     }
//     };


//     const navigate = useNavigate();
    
//     // const handleLogin = () => {
//     //     navigate('/NBA') 
//     // } 


//   const { switchToSignin } = useContext(AccountContext);
//   return (
//     <BoxContainer>
//       <FormContainer>
//         <Input type="text" placeholder="Full name" />
//         <Input type="email" placeholder="Email" />
//         <Input type="password" placeholder="Password" />
//         <Input type="password" placeholder="Confirm password" />
//       </FormContainer>
//       <Marginer direction="vertical" margin={10} />
//       <SubmitButton onClick={handleSubmit}>Signup</SubmitButton>
//       <LineText>
//         Already have an account?{" "}
//         <BoldLink onClick={switchToSignin} href="#">
//           Signin
//         </BoldLink>
//       </LineText>
//     </BoxContainer>
//   );
// }