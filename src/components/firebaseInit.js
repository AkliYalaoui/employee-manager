import config from './firebaseConfig'
import firebase from 'firebase'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp(config);
export default firebaseApp.firestore();