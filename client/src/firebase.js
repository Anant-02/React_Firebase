// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    ​​  GoogleAuthProvider,
    ​​  getAuth,
    ​​  signInWithPopup,
    ​​  signInWithEmailAndPassword,
    ​​  createUserWithEmailAndPassword,
    ​​  sendPasswordResetEmail,
    ​​  signOut,
    ​​} from "firebase/auth";
​​import {
    ​​  getFirestore,
    ​​  query,
    ​​  getDocs,
    ​​  collection,
    ​​  where,
    ​​  addDoc,
    ​​} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSWpXZBPU_M_0lqg-GzlFtF3s2WjNcNk0",
  authDomain: "budgetboss-33f35.firebaseapp.com",
  projectId: "budgetboss-33f35",
  storageBucket: "budgetboss-33f35.appspot.com",
  messagingSenderId: "57378588056",
  appId: "1:57378588056:web:f7fd44e231996c6cfb57ed",
  measurementId: "G-SF4DMHK4ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async() => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if(docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid : user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    }catch(err) {
        console.log(err);
        alert(err.message);
    }
}

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const registerWithEmailAndPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail (auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const logout = () => {
    signOut(auth);
}

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout
};