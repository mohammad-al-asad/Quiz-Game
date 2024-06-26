/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import "../firebase.js";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const Auth = getAuth();
    const unSubscribe = onAuthStateChanged(Auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unSubscribe;
  }, []);

  // Sign Up
  async function signup(email, password, username) {
    const Auth = getAuth();
    await createUserWithEmailAndPassword(Auth, email, password);

    // Update
    await updateProfile(Auth.currentUser, {
      displayName: username,
    });

    const user = Auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }

  // Login
  async function login(email, password) {
    const Auth = getAuth();
    return signInWithEmailAndPassword(Auth, email, password);
  }

  // Logout
  async function logout() {
    const Auth = getAuth();
    return signOut(Auth);
  }

  const value = {
    signup,
    login,
    logout,
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
