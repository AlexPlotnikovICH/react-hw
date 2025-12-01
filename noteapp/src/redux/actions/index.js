export function addNote(text) {
  return {
    type: 'ADD_NOTE',
    payload: text,
  }
}

export function deleteNote(id) {
  return {
    type: 'DELETE_NOTE',
    payload: id,
  }
}
