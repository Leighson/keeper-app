import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function generateKey() {
  let date = new Date();
  return date.getTime() + Math.random();
}

function App() {
  const [noteDatabase, setNoteDatabase] = useState([]);

  return (
    <div>
      <Header />
      <CreateArea setNoteDatabase={setNoteDatabase} />
      {noteDatabase.map((note) => {
        return (
          <Note key={generateKey()} title={note.title} content={note.content} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
