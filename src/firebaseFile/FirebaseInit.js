import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";
const FirebaseInit = () => {
    return initializeApp(firebaseConfig);
};

export default FirebaseInit;