// Теперь функция принимает title И text
export function addNote(title, text) {
  return {
    type: 'ADD_NOTE',
    // Payload теперь не просто строка, а объект с двумя полями
    payload: {
      title: title,
      text: text,
    },
  }
}

export function deleteNote(id) {
  return {
    type: 'DELETE_NOTE',
    payload: id,
  }
}
