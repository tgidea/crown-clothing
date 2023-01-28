import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyD6C27mUJMF7DkQj4KnWcU9FqC-l82x3hA",
  authDomain: "crwn-db-9c484.firebaseapp.com",
  projectId: "crwn-db-9c484",
  storageBucket: "crwn-db-9c484.appspot.com",
  messagingSenderId: "424143685511",
  appId: "1:424143685511:web:a9f7ef5907456e8ec63522"
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();

// using in sign-in
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth , googleProvider);
export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("DOne");
}

export const getCollectionAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const quertSnapShot = await getDocs(q);
  return quertSnapShot.docs.map( docSnapShot => docSnapShot.data() );
  
  // const categoryMap = quertSnapShot.docs.reduce((accumulator, docSnapShot) => {
  //   let { title, items } = docSnapShot.data();
  
  //   accumulator[title.toLowerCase()] = items;
  //   return accumulator;
  // }, {});
  // return categoryMap;
}
// getCollectionAndDocuments();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {},
) => {
  //userauth user should be object containing uid
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  // this userDocRef created by google used to check whther user exist or not .
  // it not make a documnet but create unique reference
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    }
    catch (error) {
      console.log("Error creating the user", error.message);
    }
  }
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutAuthUser = async () => {
  return await signOut(auth);
}

export const onAuthStateChangedListener = async (callback) => {
  return onAuthStateChanged(auth, callback);
}

// export const createToken = async(userAuth) => {
//   if(!userAuth)return;
//   try{
//     const response = await auth.createToken(userAuth.uid);

//   }catch(error){
//     console.log(error);
//   }
// }