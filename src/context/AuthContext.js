"use client";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    userObserver();
  }, []);

  // Register
  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName });
      router.push("/profile");
      toast.success("Registered Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Login a user
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/profile");
      toast.success("Logged In Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // logout
  const logout = () => {
    signOut(auth);
    toast.success("Logged out Successully");
  };

  // user observer

  const userObserver = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { email, displayName, photoURL } = currentUser;
        setCurrentUser({ email, displayName, photoURL });
        sessionStorage.setItem(
          "user",
          JSON.stringify({ email, displayName, photoURL }),
        );
      } else {
        setCurrentUser(false);
        sessionStorage.clear();
        router.replace('/login')
      }
    });
  };

  // signup with google
  const signupProvider = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/profile");
      toast.success("Logged In Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // forgotpassword

  const forgotpassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.warn("Please check your email!");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const value = {
    currentUser,
    createUser,
    signIn,
    logout,
    signupProvider,
    forgotpassword,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
