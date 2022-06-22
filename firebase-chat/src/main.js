import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAW-Iiw-Ib7aK0sa3bK3mgk3ZimKJtRxVA",
    authDomain: "firevuechat-42db2.firebaseapp.com",
    databaseURL: "https://firevuechat-42db2-default-rtdb.firebaseio.com",
    projectId: "firevuechat-42db2",
    storageBucket: "firevuechat-42db2.appspot.com",
    messagingSenderId: "456093947356",
    appId: "1:456093947356:web:215e19db94a0c09049eb19"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
