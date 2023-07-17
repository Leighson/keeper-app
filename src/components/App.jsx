import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteDatabase, setNoteDatabase] = useState([]);

  return (
    <div>
      <Header />
      <CreateArea setNoteDatabase={setNoteDatabase} />
      {noteDatabase.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            setNoteDatabase={setNoteDatabase}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
