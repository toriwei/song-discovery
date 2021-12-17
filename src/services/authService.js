import { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

export function SignIn() {
  return (
    <button
      className="signinbutton"
      onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
    >
      Sign In!
    </button>
  );
}

export function SignOut() {
  return (
    <div>
      <span className="helloUser">Hello, {auth.currentUser.displayName}</span>{" "}
      &nbsp;
      <img src={auth.currentUser.photoURL} width="20" />
      <button className="buttons" onClick={() => signOut(auth)}>
        Sign Out
      </button>
    </div>
  );
}

export function useAuthentication() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
  }, []);
  return user;
}
