import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { logEvent } from "firebase/analytics";
import ua from 'universal-analytics';

const visitor = ua('G-6K76MZ9KF8');
export function trackPageView(path) {
    visitor.pageview(path).send();
  }

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