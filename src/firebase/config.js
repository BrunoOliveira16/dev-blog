import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2exPQg5BqRKWuFYn3S8Q9EtK1DAlqjU4",
  authDomain: "dev-blog-54a3f.firebaseapp.com",
  projectId: "dev-blog-54a3f",
  storageBucket: "dev-blog-54a3f.appspot.com",
  messagingSenderId: "316245127339",
  appId: "1:316245127339:web:7f4ebf45cfe1ae2f2887ee"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };