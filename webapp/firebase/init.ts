// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { onAuthStateChanged } from "firebase/auth";
import { proxy, snapshot, subscribe, useSnapshot } from "valtio";
import { watch, subscribeKey, devtools } from "valtio/utils";
import { firebaseConfig } from "../firebase/config";

// Just for export
import {
  getFirestore,
  query,
  where,
  collection,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";

import {
  useCollection,
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";

declare module "valtio" {
  function useSnapshot<T extends object>(p: T): T;
}

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

// const analytics = getAnalytics(app);

const store = proxy({
  firebaseUser: null,
  isDataLoading: true,
  goals: {},
  projects: {},
  challenges: {},
  actions: {},
});

async function getCollection(name = "goals") {
  const obj = {};
  const snap = await getDocs(collection(db, name));
  snap.forEach((doc) => {
    // @ts-ignore
    obj[doc.id] = doc.data();
  });
  return obj;
}

async function initializeStore() {
  const goals = await getCollection("goals");
  const projects = await getCollection("projects");
  const challenges = await getCollection("challenges");
  const actions = await getCollection("actions");

  store.goals = goals;
  store.projects = projects;
  store.challenges = challenges;
  store.actions = actions;
  store.isDataLoading = false;
}
initializeStore();

subscribe(store, () => {
  const snap = snapshot(store);
  console.log("store changed", snap);
});

const unsub = devtools(store, { name: "GRevol", enabled: true });

export {
  app,
  store,
  useSnapshot,
  db,
  auth,
  query,
  where,
  collection,
  doc,
  setDoc,
  useCollection,
  useCollectionData,
  useDocumentData,
};
