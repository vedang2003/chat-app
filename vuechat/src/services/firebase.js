import * as initializeApp from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAfoL0FiEjEFq5tWUySc4QRjM4BBTuz3ME",
    authDomain: "vuechat-e49e6.firebaseapp.com",
    projectId: "vuechat-e49e6",
    storageBucket: "vuechat-e49e6.appspot.com",
    messagingSenderId: "485911233852",
    appId: "1:485911233852:web:e8cf7d9601333863690a39"
};

firebaseConfig.initializeApp(firebaseConfig);

export default firebase;