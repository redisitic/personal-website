import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC_VKpzHcTwxXzakb04PxkHs56S44C2bTM",
  authDomain: "redisitic.firebaseapp.com",
  databaseURL: "redisitic.firebaseio.com",
  projectId: "redisitic",
  storageBucket: "redisitic.appspot.com",
  messagingSenderId: "278302736666",
  appId: "1:278302736666:web:dc4774de7936eaca9daca3",
  measurementId: "G-6K76MZ9KF8"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');

document.addEventListener("DOMContentLoaded", function() {
  var currentYear = new Date().getFullYear();
  var yearElements = document.getElementsByClassName("year");
  for (var i = 0; i < yearElements.length; i++) {
      yearElements[i].innerHTML = currentYear;
  }
});