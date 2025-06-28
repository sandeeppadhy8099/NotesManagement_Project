// src/App.js
import React, { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import Filter from "./components/Filter";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);
  const [filterColor, setFilterColor] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addOrUpdateNote = (newNote) => {
    if (editNote) {
      setNotes(notes.map((note) => (note.id === newNote.id ? newNote : note)));
      setEditNote(null);
    } else {
      setNotes([...notes, newNote]);
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = filterColor ? notes.filter((note) => note.color === filterColor) : notes;

  return (
    <div className="app">
      <h1>Notes App</h1>
      <NoteForm addOrUpdateNote={addOrUpdateNote} editNote={editNote} setEditNote={setEditNote} />
      <Filter setFilterColor={setFilterColor} />
      <NoteList notes={filteredNotes} deleteNote={deleteNote} setEditNote={setEditNote} />
    </div>
  );
};

export default App;
