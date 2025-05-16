// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCZW4Dvo0hbAkRdzWPKYWo-eoUV1acNodI",
  authDomain: "myflutter-maritrex.firebaseapp.com",
  databaseURL: "https://myflutter-maritrex-default-rtdb.firebaseio.com/",
  projectId: "myflutter-maritrex",
  storageBucket: "myflutter-maritrex.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:807564095326:android:fce7781ffb3e1dbf3ca9cf"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue };
