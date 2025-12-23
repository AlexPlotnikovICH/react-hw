import { createStore } from 'redux'
import userReducer from './reducers.js'
const store = createStore(userReducer)

export default store
