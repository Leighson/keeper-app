import React from "react";
import Button from "./Button";
import DeleteIcon from "@mui/icons-material/Delete";

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
      <Button text=<DeleteIcon /> type="button" onClick={deleteNote} />
    </div>
  );
}

export default Note;
