// src/components/Note.js
import React from "react";

const Note = ({ note, deleteNote, setEditNote }) => {
  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => setEditNote(note)}>Edit</button>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default Note;
