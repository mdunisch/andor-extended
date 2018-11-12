import Vue from 'vue';
import Vuex from 'vuex';

import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyC3bGPoo_SLhtQ3AF-o5bbhuS3-oz0BeaM",
  authDomain: "andor-extended.firebaseapp.com",
  databaseURL: "https://andor-extended.firebaseio.com",
  projectId: "andor-extended",
  storageBucket: "andor-extended.appspot.com",
  messagingSenderId: "809902880262"
});

const firestore = firebase.firestore();
firestore.settings({timestampsInSnapshots: true});

Vue.use(Vuex);

import createEasyFirestore from 'vuex-easy-firestore';

const userDataModule = {
  firestorePath: 'legenden',
  firestoreRefType: 'collection',
  moduleName: 'legendenColletction',
  statePropName: 'legenden'
};

const easyFirestore = createEasyFirestore(userDataModule, {logging: true})

export default new Vuex.Store({
  modules: {},
  plugins: [ easyFirestore ]
});