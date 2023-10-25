import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdXVvJ-FqeF626XFihI7izuPaslc1hmPw",
  authDomain: "netfilx-react-17ad6.firebaseapp.com",
  projectId: "netfilx-react-17ad6",
  storageBucket: "netfilx-react-17ad6.appspot.com",
  messagingSenderId: "647524074548",
  appId: "1:647524074548:web:08747eb6889d3626c37661",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
