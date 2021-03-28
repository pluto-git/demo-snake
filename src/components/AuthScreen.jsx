import React, { useRef, useState } from "react";
import {useHistory, Redirect} from "react-router-dom";
import GameHomePage from "./GameHomePage.jsx";

import Card from "../ui/Card.jsx";

//import FirstGameSceneComponent from "./FirstGameSceneComponent";

import classes from "./AuthScreen.module.css";

function AuthScreen() {
  const loginInputRef = useRef();
  const [login, setLogin] = useState();
  const [isAuthorized, setAuthorized] = useState(false);
  const history = useHistory();

  function getId(prefix) {
    return Math.random()
      .toString(36)
      .replace("0.", prefix || "");
  }
  //getting login, generating uni id , saving in the state and the localStorage
  function submitHandler(event) {
      console.log("Clicked");
    event.preventDefault();
    const enteredLogin = loginInputRef.current.value;
    const id = getId(enteredLogin + "_");
    localStorage.setItem(enteredLogin, id);

    history.push('/starting');
    
  }

  function checkLength(event){
      console.log(event.target.value.length);
    if(event.target.value.length !==0){
        setAuthorized (true);
    }else{
        setAuthorized (false);
    }
  }

  
  return (
    <Card>
    <form className={classes.form} onSubmit={submitHandler} >
      <div className={classes.control}>
        <label htmlFor="login">Login</label>
        <input type="text" required id="login" ref={loginInputRef} onChange={checkLength}></input>
      </div>
      <div className={classes.actions}>

      {isAuthorized?
      <button disabled={false}>START GAME</button>:
      <button disabled={true}>INPUT YOUR NAME</button>
      }

      </div>
    </form>
    </Card>
  );

}

export default AuthScreen;
