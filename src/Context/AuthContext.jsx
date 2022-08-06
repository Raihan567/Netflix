import { auth, db, doc, setDoc } from "firebase/firestore";
import { useContext, createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  // signUp
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      savedShow: [],
    });
  }

  // Login with
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Logout
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ logIn, logOut, signUp, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function userAuth() {
  return useContext(AuthContext);
}
