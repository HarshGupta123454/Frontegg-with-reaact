
import './App.css';
import { useEffect } from "react"
import { ContextHolder } from '@frontegg/rest-api';
import {Routes,Route , useNavigate} from "react-router-dom";
import { useAuth, useLoginWithRedirect } from "@frontegg/react";
import About from './About';
import Login from './Login';
import Navbar from './Navbar';

function App() {
  const navigate = useNavigate()
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
    useEffect(() => {
 
    if(isAuthenticated){
      navigate("/about")
      alert("hua")

    }
    // if(!isAuthenticated){
    //   navigate("/")
    //   alert("nhi hua")
    // }
    
  }, []);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };
  return (
  <>
  
  <Routes>
    <Route path='/' element={<Navbar/>}>
      <Route index  element={<Login/>}/>
      <Route path= '/about' element= {<About/>}/>
    </Route>
  </Routes>
  
  {/* <h1>{isAuthenticated? <About/>:<Login/>}</h1> */}
  
  </>
  );  
}

export default App;


{/* {isAuthenticated? <About sr={user?.profilePictureUrl} al= {user?.name}/>:<Login log={logout()}/>} */}
  {/* <div className="App">
      { isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name}/>
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
          </div>
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div> */}
