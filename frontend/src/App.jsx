import React, { useEffect } from "react";
import "./styles.css";
import styled, { ThemeProvider } from "styled-components";
import AccountBox from "./components/accountBox/index"
import AppRoutes from "./routes/AppRoutes";


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