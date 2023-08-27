import { proxy, useSnapshot, subscribe } from 'valtio'
import { watch, devtools } from 'valtio/utils'
import { IGameStore, ISeverResponseData } from '@shared/types'

/* --------------------- Store --------------------------  */
export const store = proxy<IGameStore>({
  app: {
    notification: null,
    loader: false,
    sideBarOpen: false,
  },
  user: {},
  matches: [],
  authUser: {
    uid: undefined,
  },
})

const unsub = devtools(store, 'Player6Cricket')

/* ----------------- Utils & Actions -------------------  */
const severity = ['info', 'warning', 'success', 'error']
export function showNotification(message: string, severityLevel: number = 0) {
  store.app.notification = { message, type: severity[severityLevel] }
}

export function showServerNotification(data: ISeverResponseData) {
  store.app.notification = { message: data.message, type: data.error ? severity[3] : severity[2] }
}

export function showLoader(flag: boolean) {
  store.app.loader = flag
}

export { useSnapshot, subscribe, watch }
// export default store
