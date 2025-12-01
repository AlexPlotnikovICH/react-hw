import { createStore } from 'redux'
import noteReducer from './reducers/index.js'

const store = createStore(noteReducer)

export default store
