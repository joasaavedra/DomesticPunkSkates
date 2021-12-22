import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCWdn0e4gvaMsgpOJsimq3FoW9fm9Jupy4",
    authDomain: "ecommerce-react-99.firebaseapp.com",
    projectId: "ecommerce-react-99",
    storageBucket: "ecommerce-react-99.appspot.com",
    messagingSenderId: "698468862525",
    appId: "1:698468862525:web:c1241a88e5edb58a6d3854"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)