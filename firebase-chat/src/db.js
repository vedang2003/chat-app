import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyAW-Iiw-Ib7aK0sa3bK3mgk3ZimKJtRxVA",
    authDomain: "firevuechat-42db2.firebaseapp.com",
    projectId: "firevuechat-42db2",
    storageBucket: "firevuechat-42db2.appspot.com",
    messagingSenderId: "456093947356",
    appId: "1:456093947356:web:215e19db94a0c09049eb19"
}

const db = firebase.initializeApp(config);
export default db;