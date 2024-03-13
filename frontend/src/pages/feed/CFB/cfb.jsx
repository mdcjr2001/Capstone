import React, { useState } from "react";
import Post from "../../../Post/Post";
// import Suggestions from "./Suggestions";
import "./cfb.css";
import Sidebar from "../../../components/Sidebar/sidebar";

function CFB() {
  const [posts, setPosts] = useState([
    {
      user: "bleacherreport",
      postImage:
        "https://media.bleacherreport.com/image/upload/x_0,y_207,w_1800,h_1198,c_crop/w_1440,h_958,c_fill/w_650/v1709403962/phq2afnrh1aorjaswpdy.jpg",
      likes: 97493,
      comments: 8595,
      timestamp: "2d",
    },
    {
      user: "cfb",
      postImage:
        "https://media.bleacherreport.com/image/upload/c_crop,h_1.00,w_1.00,x_0.00,y_0.00/w_650/v1709606689/m3cn9pl7alrnlt70dtlp.jpg",
      likes: 84500,
      comments: 8544,
      timestamp: "2d",
    },
    {
      user: "cfbonfox",
      postImage:
        "https://media.bleacherreport.com/image/upload/q_auto,w_1500,c_scale,f_auto/w_650/v1709601000/hqbibgxd1arwivzcdvxt.jpg",
      likes: 14094,
      comments: 5890,
      timestamp: "2d",
    },
    {
      user: "pac12",
      postImage:
        "https://media.bleacherreport.com/image/upload/q_auto,w_1500,c_scale,f_auto/w_650/v1709236156/hezhdubyjsdjysjrjyvw.jpg",
      likes: 39845,
      comments: 5895,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <Sidebar />
      <img
        src="https://t4.ftcdn.net/jpg/03/30/40/57/360_F_330405756_ybSB0fbh76IfrxGLVqiSxIm4vqCBc5tQ.jpg"
        alt="logo"
        width="250"
        height={250}
      />
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              comments={post.comments}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CFB;
