import {
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
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
import AsyncStorage from '@react-native-async-storage/async-storage'

// reducer

const initialState = {
  pokemon: [],
}

const pokedex = createSlice({
  name: 'gameInfo',
  initialState,
  reducers: {
    setPokemon: (state, { payload }) => {
      state.pokemon = payload.pokemon
    },
  },
})

export const {} = pokedex.actions

const rootReducer = pokedex.reducer

// persistence

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store)
