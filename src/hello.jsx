import React from 'react';
import './App.css'; 
const AuthButtons = () => {
  const handleSignIn = () => 
    console.log("Sign In button clicked");
  };

  const handleSignUp = () => {
    console.log("Sign Up button clicked");
  };
  return (
    <div class = "form-box ">
              <h1 id="title"> Sign Up </h1> 
                <form>
                 <div className = "input-group " >
                   <div className = "input-field "id="nameField">
                      <i className="fa-solid fa-user"></i>
                     <input type="name" placeholder="name"/>
            </div>
                 <div className = "input-field " >
                     <i className="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Email"/>
            </div>
                 <div className = "input-field " >
                 <i className="fa-solid fa-lock"></i>
                 <input type="password" placeholder="password"/>
             </div>
             <p>Lost Password <a href="#"> Click Here!</a></p>
           </div>
           </form>
    
    <div className="auth-buttons">
      <button className="sign-in-button" onClick={handleSignIn}>
        Sign In
      </button>
      <button className="sign-up-button" onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
    </div>

  );

export default AuthButtons;
