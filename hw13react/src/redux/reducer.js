import { SET_FILTER } from './actions'

const initialState = {
  users: [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
    { id: 6, name: 'Michael' },
    { id: 7, name: 'Mary' },
    { id: 8, name: 'Max' },
    { id: 9, name: 'Monica' },
    { id: 10, name: 'Martin' },
    { id: 11, name: 'Sarah' },
    { id: 12, name: 'Steve' },
    { id: 13, name: 'Sam' },
    { id: 14, name: 'Sophie' },
    { id: 15, name: 'Simon' },
    { id: 16, name: 'Alex' },
    { id: 17, name: 'Anna' },
    { id: 18, name: 'Aaron' },
    { id: 19, name: 'Olivia' },
    { id: 20, name: 'Oscar' },
  ],
  filter: '',
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
