import React from 'react';
import './App.css';
import jwt_decode from 'jwt-decode';
import Dashboard from './Dashboard';
import SignIn from './SignIn'
import images from "./images"



function App() {
  const okaa = {
    picture: images.userPfp
  }

  const [user, setUser] = React.useState({});

  function handleCallbackResponse(response) {
    // console.log(jwt_decode(response.credential))
    const userObj = jwt_decode(response.credential);
    setUser(userObj);
  }


  React.useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "1072165603404-mjl83mqm1prodtl2ocosd6iajqa8c3j1.apps.googleusercontent.com",
      callback: handleCallbackResponse

    })

    google.accounts.id.renderButton(
      document.querySelector('#signInBtn'),
      { theme: "outline", size: "large" }
    )
  }, [user])

  function signOut(e) {
    setUser({});
  }

  return (
    <main>

      {Object.keys(user).length ? <Dashboard picture={user.picture} signOut={signOut} /> : <SignIn setUser={setUser} />}
    </main >
  );
}

export default App;
