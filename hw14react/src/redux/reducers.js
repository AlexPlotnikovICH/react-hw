import { SET_USER_INFO } from './actions.js'

const initialState = {
  name: 'Unknown User',
  status: 'Guest',
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default userReducer
