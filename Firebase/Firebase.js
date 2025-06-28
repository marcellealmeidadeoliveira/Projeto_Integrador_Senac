import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBTf9VzYR1NqkYYUPDKhxUeAilQL9z-z04",
  authDomain: "relaxface-f5f1d.firebaseapp.com",
  projectId: "relaxface-f5f1d",
  storageBucket: "relaxface-f5f1d.appspot.com",
  messagingSenderId: "1067700044104",
  appId: "1:1067700044104:web:88f3143443bcdc82e8b37d",
  measurementId: "G-WN373PKRMQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
