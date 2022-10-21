import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase/firebase.init";

export const AuthContext = createContext();

const auth = getAuth(app);

const UseContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signout = () => signOut(auth);
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      currentUser ? setUser(currentUser) : setUser({});
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user?.email) {
      setLoading(false);
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, loading, setLoading, createUser, signout, signin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UseContext;
