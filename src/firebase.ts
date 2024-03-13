import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyCPEc5fT1LD2fHo6Rdw3Tjgp9u_QKb_xMM',
	authDomain: 'beeton-2a536.firebaseapp.com',
	projectId: 'beeton-2a536',
	storageBucket: 'beeton-2a536.appspot.com',
	messagingSenderId: '262189608755',
	appId: '1:262189608755:web:c04b939c1599d010e7d846',
}

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
