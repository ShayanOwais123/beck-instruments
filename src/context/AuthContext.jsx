import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Signup: creates a new user in Firebase with email + password
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Login: signs an existing user in with email + password
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Logout: signs the current user out
  function logout() {
    return signOut(auth);
  }

  // This runs once when the app loads, and again any time the login
  // state changes (login/logout). Firebase tells us who is logged in.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup: stop listening when component unmounts
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  // Don't render the app until we know if someone is logged in or not
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
