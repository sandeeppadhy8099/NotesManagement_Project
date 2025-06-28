// src/components/NoteForm.js
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const NoteForm = ({ addOrUpdateNote, editNote, setEditNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setContent(editNote.content);
      setColor(editNote.color);
    }
  }, [editNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: editNote ? editNote.id : uuidv4(),
      title,
      content,
      color,
    };
    addOrUpdateNote(newNote);
    setTitle("");
    setContent("");
    setColor("#ffffff");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
      <label>
        Choose Color:
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>
      <button type="submit">{editNote ? "Update Note" : "Add Note"}</button>
      {editNote && (
        <button
          type="button"
          onClick={() => {
            setEditNote(null);
            setTitle("");
            setContent("");
            setColor("#ffffff");
          }}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default NoteForm;
