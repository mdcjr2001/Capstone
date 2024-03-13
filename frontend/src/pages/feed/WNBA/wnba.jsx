import React, { useState } from "react";
import Post from "../../../Post/Post";
import "./wnba.css"
import Sidebar from "../../../components/Sidebar/sidebar";


function WNBA() {

  const [posts, setPosts] = useState([
    {
      user: "bleacherreport",
      postImage:
      "https://media.bleacherreport.com/image/upload/c_crop,h_1.00,w_1.00,x_0.00,y_0.00/w_650/v1689377523/t9ckf74qc0jaxbut5h2z.jpg",
        likes: 54,
        caption: 'Sabrina Ionescu',
        comments: 35,
      timestamp: "2d",
    },
    {
      user: "wnba",
      postImage:
      "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1706139863/ljsezfd75uwetvuan3ph.jpg",
      likes: 432,
      comments: 145,
      timestamp: "2d",
    },
    {
      user: "wnbaonespn",
      postImage:
        "https://media.bleacherreport.com/image/upload/c_crop,h_1.00,w_1.00,x_0.00,y_0.00/w_650/v1709242455/eso7b9ao9oigdmhe3ohm.jpg",
      likes: 140,
      comments: 24,
      timestamp: "2d",
    },
    {
      user: "wbb",
      postImage:
        "https://img.bleacherreport.net/img/article/media_slots/photos/003/064/902/58a488006c829963c0c206d098a215e0_crop_exact.jpg?w=2975&h=2048&q=85",
      likes: 14,
      comments: 45,
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

export default WNBA;