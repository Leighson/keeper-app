import React from "react";

function Note(props) {
  function deleteNote() {
    props.setNoteDatabase((prevNotes) => {
      return prevNotes.filter((note) => note.id !== props.id)
    })
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button type="button" onClick={() => {deleteNote()}}>
        DELETE
      </button>
    </div>
  );
}

export default Note;