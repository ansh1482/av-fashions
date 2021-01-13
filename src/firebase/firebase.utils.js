import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC5yVl50EnftUr0lwsZ2tcJegCToRKEu5Y",
    authDomain: "av-fashion-bdcf8.firebaseapp.com",
    projectId: "av-fashion-bdcf8",
    storageBucket: "av-fashion-bdcf8.appspot.com",
    messagingSenderId: "709402320628",
    appId: "1:709402320628:web:da50023da8c0abfaf288a1",
    measurementId: "G-8DBPES8XXQ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log(error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
