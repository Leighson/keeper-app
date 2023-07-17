import React, { useState } from "react";
import Button from "./Button";

function CreateArea(props) {
  const emptyNote = {
    id: "",
    title: "",
    content: "",
  };

  const [note, setNote] = useState(emptyNote);

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
  }

  const addNote = (event) => {
    note.id = generateKey();

    props.setNoteDatabase((prevNotes) => {
      return [...prevNotes, note];
    });

    setNote(emptyNote);
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={note.content}
        />
        <Button text="Add" type="submit" onClick={addNote} />
      </form>
    </div>
  );
}

export default CreateArea;
