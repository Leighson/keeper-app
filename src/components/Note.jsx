import React from "react";
import Button from "./Button";

function Note(props) {
  const deleteNote = () => {
    props.setNoteDatabase((prevNotes) => {
      return prevNotes.filter((note) => note !== props.note);
    });
  };

  return (
    <div className="note">
      <h1>{props.note.title}</h1>
      <p>{props.note.content}</p>
      <Button
        text="DELETE"
        type="button"
        onClick={deleteNote}
      />
    </div>
  );
}

export default Note;
