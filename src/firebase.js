import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDmc_6P2i69C5V_2tzUYXpCK5TTREDi2JM',
	authDomain: 'frs-app-ca7ad.firebaseapp.com',
	databaseURL: 'https://frs-app-ca7ad-default-rtdb.firebaseio.com',
	projectId: 'frs-app-ca7ad',
	storageBucket: 'frs-app-ca7ad.appspot.com',
	messagingSenderId: '47203164102',
	appId: '1:47203164102:web:a5a0e692ae83361a45dcc7',
	measurementId: 'G-GCF5ZTBNYZ',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
