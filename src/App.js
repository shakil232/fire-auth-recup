import './App.css';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { useState } from 'react';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
function App() {
  const [user, setUser] = useState({});

  const googolProvider = new firebase.auth.GoogleAuthProvider();
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  const githubProvider = new firebase.auth.GithubAuthProvider();

  const handleGoogolAuth = () => {
    firebase.auth().signInWithPopup(googolProvider)

      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        setUser(user)
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential)
      });
  }
  const handleFacebookAuth = () => {
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then(result => {
        var credential = result.credential;
        var user = result.user;
        setUser(user)
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential)
      });
  }
  const handleGutHubAuth = () => {
    firebase
      .auth()
      .signInWithPopup(githubProvider)
      .then(result => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        setUser(user)
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential)
      });
  }

  return (
    <div className='container' >
      <div>
        <button onClick={handleGoogolAuth} className="button"> sign in googol</button><br/> <br/>
        <button onClick={handleFacebookAuth} className="button"> sign in facebook</button><br/> <br/>
        <button onClick={handleGutHubAuth} className="button"> sign in github</button><br/> <br/>

      </div>
      <div className="details-container">
        <h3> Name: {user.displayName}</h3>
        <h3> Email: {user.email}</h3>
        <img src={user.photoURL} alt="" />
      </div>



    </div>
  );
}


export default App;
