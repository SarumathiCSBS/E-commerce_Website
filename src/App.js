import logo from './logo.svg';
 import './App.css';
//  import React from 'react';
// import ReactDOM from 'react-dom';

import Image from './hands.jpg';
import React, { useState } from 'react';
// export default MyComponent()
const MyComponent = () => 
{
  const [showNameField, setShowNameField] = useState(false);
  const [title, setTitle] = useState('Sign In');

  const handleSignInClick = () => {
    setShowNameField(false);
    setTitle('Sign In');
  };

  const handleSignUpClick = () => {
    setShowNameField(true);
    setTitle('Sign Up');
  };


// function App() 
// {
//   return(
//  <div className = "container">
//    {/* <img src={Image} alt='hello'/> */}
//    <div class = "form-box ">
//             <h1 id="title"> Sign Up </h1> 
//             <form >
//              <div className = "input-group " >
//               <div className = "input-field "id="nameField">
//                   <i className="fa-solid fa-user"></i>
//                 <input type="name" placeholder="name"/>
//         </div>
//              <div className = "input-field " >
//                 <i className="fa-solid fa-envelope"></i>
//             <input type="email" placeholder="Email"/>
//         </div>
//             <div className = "input-field " >
//             <i className="fa-solid fa-lock"></i>
//             <input type="password" placeholder="password"/>
//         </div>
//         <p>Lost Password <a href="#"> Click Here!</a></p>
//       </div>
//       <div className="btn-field">
//         <button type="button" id="signupBtn">Sign up</button>
//         <button type="button" id="signinBtn" className="disable" >Sign in</button>
//         <div>
//       <button onClick={handleSignInClick}>Sign In</button>
//       <button onClick={handleSignUpClick}>Sign Up</button>
//       {showNameField && <input type="text" placeholder="Enter your name" />}
//       <h2>{title}</h2>
//     </div>
//     </div>
//   </form>
// </div>
// </div>

}
export default MyComponent()


 