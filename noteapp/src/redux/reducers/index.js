const initialState = {
  notes: [],
};

const noteReducer = (state = initialState, action) => {
  if (action.type === "ADD_NOTE") {
    state.notes = [...state.notes, action.payload];
  }

  if (action.type === "EDIT_NOTE") {
  }

  if (action.type === "DELETE_NOTE") {
  }

  return state;
};

export default noteReducer;
