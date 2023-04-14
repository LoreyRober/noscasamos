import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export interface Guest {
    name: string,
    isComing: boolean,
    companionName0: string,
    companionName1: string,
    companionName2: string,
    companionName3: string,
    companionName4: string,
    companionName5: string,
    suggestions: string,
}

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

 export const addGuest = async (guest: Guest) => {
     try {
         const docRef = await addDoc(collection(db, "guests"), guest);
         console.log("Document written with ID: ", docRef.id);
     } catch (e) {
         console.error("Error adding document: ", e);
     }
 }
