import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { userSlice } from "../store/user-slice"

const rootReducer = combineSlices(userSlice)
export type RootState = ReturnType<typeof rootReducer>

import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { PersistPartial } from "redux-persist/lib/persistReducer"

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: persistedReducer,
    devTools: import.meta.env.MODE !== "production",
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }),
    preloadedState: preloadedState as RootState & PersistPartial,
  })
  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()
export const persistor = persistStore(store)
export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]

export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
