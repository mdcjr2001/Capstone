import React from "react";
import Sidebar from "../components/Sidebar/sidebar";

function Home() {
  return (
    <div>
      <Sidebar />
      <img
        src="https://t4.ftcdn.net/jpg/03/30/40/57/360_F_330405756_ybSB0fbh76IfrxGLVqiSxIm4vqCBc5tQ.jpg"
        alt="logo"
        width="500"
      />

      <h1>
        {" "}
        Welcome to Sportscentral where you will be amazed at the new, Instagram
        inspired, sports social media app
      </h1>
    </div>
  );
}

export default Home;
