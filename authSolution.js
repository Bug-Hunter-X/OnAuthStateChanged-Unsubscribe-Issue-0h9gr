import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebaseConfig'; //Import your firebase configuration

const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/firebase-auth-data-model
    const uid = user.uid;
    console.log("uid:", uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});

useEffect(() => {
  return () => {
    unsubscribe();
  };
}, []);