// src/components/NoteList.js
import React from "react";
import Note from "./Note";

const NoteList = ({ notes, deleteNote, setEditNote }) => {
  return (
    <div className="note-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <Note key={note.id} note={note} deleteNote={deleteNote} setEditNote={setEditNote} />
        ))
      ) : (
        <p>No notes to display!</p>
      )}
    </div>
  );
};

export default NoteList;
