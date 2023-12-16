<<<<<<< HEAD
import { combineReducers, configureStore } from '@reduxjs/toolkit'
=======
import { configureStore } from '@reduxjs/toolkit'
>>>>>>> 50250792de628ad99f16fb0485365c0ec4b8365c
import productReducer from './slides/productSlide'
import userReducer from './slides/userSlide'
import orderReducer from './slides/orderSlide'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['product','user']
}

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  order: orderReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
<<<<<<< HEAD
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)
=======
  reducer: {
    product: productReducer,
    user: userReducer
  },
})
>>>>>>> 50250792de628ad99f16fb0485365c0ec4b8365c
