import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, query, where, getDoc, doc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)

  export const getProducts = (key, operator, value) => {

    return new Promise((resolve, reject) => {
      const collectionQuery = key && operator && value ? 
      query(collection(db, 'products'), where(key, operator, value)) :
      collection(db, 'products')

      getDocs(collectionQuery).then((querySnapshot) => {
        const products = querySnapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data()}
        })
        resolve(products)
      }).catch(error => {
        reject('Error: ', error)
      })
    })
  }

  export const getProduct = (data, collection, itemId) => {

    return new Promise ((resolve, reject) => {
      getDoc(doc(data, collection, itemId)).then((querySnapshot) => {
        const product = { id: querySnapshot.id, ...querySnapshot.data() }
        resolve(product)
      }).catch(error => {
        reject('Error: ', error)
      })
    })
  }