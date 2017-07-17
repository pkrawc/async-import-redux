import { combineReducers, createStore } from 'redux'
import auth from './authReducer'
import ui from './uiReducer'
import user from './userReducer'

export const createReducer = asyncReducers => combineReducers({
  ui,
  auth,
  user,
  ...asyncReducers
})

export const configureStore = intitialState => {
  const store = createStore(createReducer(), intitialState)
  store.asyncReducers = {}
  return store
}

export const injectAsynReducer = (store, name, reducer) => {
  store.asyncReducers[name] = reducer
  store.replaceReducer(createReducer(store.asyncReducers))
}

const store = configureStore()

window.store = store

export default store
