import { Route, Routes } from "react-router-dom";
import AccountBox from "../components/accountBox";
import { SignupForm } from "../components/accountBox/signupForm";
import { Forgotpassword } from "../components/accountBox/Forgotpassword";
import Mainpage from "../pages/feed/mainpage";
import NBA from "../pages/feed/NBA/nba";
import NFL from "../pages/feed/NFL/nfl";
import UFC from "../pages/feed/UFC/ufc";
import Profile from "../pages/Profile/profile";
import Sidebar from "../components/Sidebar/sidebar";
import Settings from "../pages/settings/settings";
import CBB from "../pages/feed/CBB/cbb";
import { LoginForm } from "../components/accountBox/loginForm";
import Home from "../pages/home";
import Messages from "../pages/Messages/messages";
import CFB from "../pages/feed/CFB/cfb";
import WCBB from "../pages/feed/WCBB/wcbb";
import WNBA from "../pages/feed/WNBA/wnba";
import CreatePost from "../pages/createPost/createPost"
import Create from "../pages/createPost/create";
import Edit from "../pages/createPost/Edit";


function AppRoutes(props) {
    return (
        <Routes>
            <Route index element={<AccountBox {...props} /> } />
            <Route path='/Mainpage' element={<Mainpage {...props} />}/>
            <Route path='/NBA' element={<NBA {...props} />}/>
            <Route path='/NFL' element={<NFL {...props} />}/>
            <Route path='/UFC' element={<UFC {...props} />}/>
            <Route path='/Profile' element={<Profile {...props} />}/>
            <Route path='/Sidebar' element={<Sidebar {...props} />}/>
            <Route path='/Settings' element={<Settings {...props} />}/>
            <Route path='/CreatePost' element={<CreatePost {...props} />}/>
            <Route path='/CBB' element={<CBB {...props} />}/>
            <Route path='/LoginForm' element={<LoginForm {...props} />}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Messages" element={<Messages/>}/>
            <Route path='/WCBB' element={<WCBB {...props} />}/>
            <Route path='/WNBA' element={<WNBA {...props} />}/>
            <Route path='/CFB' element={<CFB {...props} />}/>
            <Route path='/Create' element={<Create {...props} />}/>
            <Route path='/Edit' element={<Edit {...props} />}/>


        </Routes>
    )
    
}

export default AppRoutes;