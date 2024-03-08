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
import Createpost from "../pages/createPost/createPost";
import CBB from "../pages/feed/CBB/cbb";
import { LoginForm } from "../components/accountBox/loginForm";
import Login from "../components/login";
import Home from "../pages/home";


function AppRoutes(props) {
    return (
        <Routes>
            {}
            <Route index element={<AccountBox {...props} /> } />
            <Route path='/Mainpage' element={<Mainpage {...props} />}/>
            <Route path='/NBA' element={<NBA {...props} />}/>
            <Route path='/NFL' element={<NFL {...props} />}/>
            <Route path='/UFC' element={<UFC {...props} />}/>
            <Route path='/Profile' element={<Profile {...props} />}/>
            <Route path='/Sidebar' element={<Sidebar {...props} />}/>
            <Route path='/Settings' element={<Settings {...props} />}/>
            <Route path='/Createpost' element={<Createpost {...props} />}/>
            <Route path='/CBB' element={<CBB {...props} />}/>
            <Route path='/LoginForm' element={<LoginForm {...props} />}/>
            <Route path='/Login' element={<Login {...props}/>}/>
            <Route path="/Home" element={<Home/>}/>
        </Routes>
    )
    
}

export default AppRoutes;