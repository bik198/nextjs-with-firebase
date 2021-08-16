import firebase from 'firebase/app'
// the below imports are option - comment out what you don't need
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/performance'

const clientCredentials = {
    apiKey: "AIzaSyCqvAQzFpuVe6aZJ4JymVW8zSlqqvI7Ix8",
    authDomain: "next-firebase-ionic.firebaseapp.com",
    projectId: "next-firebase-ionic",
    storageBucket: "next-firebase-ionic.appspot.com",
    messagingSenderId: "304085977413",
    appId: "1:304085977413:web:c85acf04418d857185962c",
    measurementId: "G-F4ZGDLEFVT"
}

export default function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(clientCredentials)
        // Check that `window` is in scope for the analytics module!
        if (typeof window !== 'undefined') {
            // Enable analytics. https://firebase.google.com/docs/analytics/get-started
            if ('measurementId' in clientCredentials) {
                firebase.analytics()
                firebase.performance()
            }
        }
        console.log('Firebase was successfully init.')
    }
}
