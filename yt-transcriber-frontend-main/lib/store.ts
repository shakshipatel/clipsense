import { combineSlices, configureStore } from '@reduxjs/toolkit'

import { currentDialogSlice } from './features/currentDialog/currentDialogSlice'
import { userSlice } from './features/user/userSlice'
import { summarySlice } from './features/summary/summarySlice'

export const makeStore = () => {
  const rootReducer = combineSlices(currentDialogSlice, userSlice, summarySlice)
  return configureStore({
    reducer: rootReducer
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']