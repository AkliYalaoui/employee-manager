import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import './components/firebaseConfig'

let app;
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    console.log(user);
    app = createApp(App).use(router).mount('#app')
  }
})
