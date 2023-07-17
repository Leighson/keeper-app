import React, { useState } from "react";
import Button from "./Button";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const emptyNote = {
    id: "",
    title: "",
    content: "",
  };

  const [note, setNote] = useState(emptyNote);
  const [isHidden, setIsHidden] = useState(true);
  const [numRows, setNumRows] = useState(1);

  const generateKey = () => {
    let date = new Date();
    return date.getTime() + Math.random();
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setNote({
      id: "",
      title: inputName === "title" ? inputValue : note.title,
      content: inputName === "content" ? inputValue : note.content,
    });
  };

  const handleFocus = () => {
    setIsHidden(false);
    setNumRows(3);
  };

  const addNote = (event) => {
    note.id = generateKey();

    props.setNoteDatabase((prevNotes) => {
      return [...prevNotes, note];
    });

    setNote(emptyNote);
    setIsHidden(true);
    setNumRows(1);
    event.preventDefault();
  };

  return (
    <div>
      <form className="create-note" onSubmit={addNote}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
          hidden={isHidden}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={numRows}
          onChange={handleChange}
          onFocus={handleFocus}
          value={note.content}
        />
        <Button text=<AddIcon /> type="submit" onClick={addNote} />
      </form>
    </div>
  );
}

export default CreateArea;
