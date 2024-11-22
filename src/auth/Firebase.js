import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { toastErrorNotify, toastWarnNotify , toastSuccessNotify } from "Helpers/ToastNotify";

const firebaseConfig = {
  apiKey: "AIzaSyBs0S_dAuhKYfu7iy9j--abVEEMqb7MHBs",
  authDomain: "global-warming-70c40.firebaseapp.com",
  projectId: "global-warming-70c40",
  storageBucket: "global-warming-70c40.appspot.com",
  messagingSenderId: "662718837579",
  appId: "1:662718837579:web:6da809a03036eac590eece",
  measurementId: "G-4K6GYHTCE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, displayName, navigate) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      navigate("/")
      console.log(userCredential);
    } catch (err) {
      alert(err.message);
    }
}
//* => Authentication => sign-in-method => enable Email/password
export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    toastSuccessNotify("Logged in successfully!");
    console.log(userCredential);
  } catch (err) {
    toastErrorNotify(err.message);
    // alert(err.message);
  }
};

export const logOut = () => {
  signOut(auth);
  toastSuccessNotify("Logged out successfully!");
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      // User is signed out
      setCurrentUser(false);
    }
  });
};

//* => Authentication => sign-in-method => enable Google
export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // console.log(result);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const forgotPassword = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      toastWarnNotify("Please check your mail box!");
    })
    .catch((err) => {
      toastErrorNotify(err.message);
    });
};