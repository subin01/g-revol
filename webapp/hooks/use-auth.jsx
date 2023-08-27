import { onAuthStateChanged } from "firebase/auth";
import { proxy, subscribe, useSnapshot } from "valtio";
import { watch, devtools } from 'valtio/utils'

import {auth} from '../firebase/init'



let initialCurrentUser = new Promise((r) => {
  let unsub = onAuthStateChanged(auth, (firebaseUser) => {
    resolve(firebaseUser)
    unsub();
  });
  
});

let state = proxy({
  currentUser: initialCurrentUser,
  get status() {
    return this.currentUser instanceof Promise
      ? "unknown"
      : this.currentUser === null
      ? "unauthenticated"
      : "authenticated";
  }
});

onAuthStateChanged(auth, (firebaseUser) => {
  // resolve();
  state.currentUser = firebaseUser;
});

export default function useAuth() {
  return useSnapshot(state);
}

subscribe(state.currentUser, ()=> {
console.log("state changed", state);

})

const unsub = devtools(state, { name: 'GRevol', enabled: true });
