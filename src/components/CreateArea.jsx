import React, { useState } from "react";

function CreateArea() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [noteDatabase, setNoteDatabase] = useState([]);

  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setNote({
      title: inputName === "title" ? inputValue : note.title,
      content: inputName === "content" ? inputValue : note.content,
    });

    console.log(note);
  }

  function addNote(event) {
    setNoteDatabase({
      title: note.title,
      content: note.content,
    });

    setNote({
      title: "",
      content: ""
    });

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
        <button type="submit" onClick={addNote}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
