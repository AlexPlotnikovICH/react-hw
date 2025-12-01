import { useState } from "react";
import { addNote } from "../../redux/actions";
import { connect } from "react-redux";

function NoteForm({ dispatch }) {
  const [noteData, setNoteData] = useState({
    title: "",
    text: "",
  });

  function handleFormData(event) {
    const { name, value } = event.target;
    setNoteData({ ...noteData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(
      addNote({
        id: Math.random(),
        ...noteData,
      })
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        value={noteData.title}
        name="title"
        onChange={(event) => handleFormData(event)}
      />
      <input
        type="text"
        placeholder="text"
        value={noteData.text}
        name="text"
        onChange={(event) => handleFormData(event)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default connect()(NoteForm);
