"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface NotesFormProps {
  addNote: (note: string) => void;
}

const NotesForm: React.FC<NotesFormProps> = ({ addNote }) => {
  const [note, setNote] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!note.trim()) return;
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={note}
          onChange={handleChange}
          className="p-2 rounded border m-2 bg-white text-slate-950 w-full"
          placeholder="Enter your note here..."
        />
        <button
          type="submit"
          className="bg-blue-500 p-2 rounded text-white  hover:bg-blue-600 transition-colors w-full"
        >
          Save Note
        </button>
      </form>
    </div>
  );
};

const NotesList: React.FC<{ notes: string[] }> = ({ notes }) => {
  return (
    <div className="bg-white p-2 rounded shadow mt-4">
      <h2 className="text-xl font-bold mb-2 text-slate-900">Notes List</h2>
      <ul className="space-y-2 transition-all duration-300 ease-in-out">
        {notes.map((note, index) => (
          <li
            className="bg-slate-200 text-slate-950 p-2 rounded-sm flex justify-between items-center"
            key={index}
          >
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
};

const NotesApp: React.FC = () => {
  const [notes, setNotes] = useState<string[]>([]);

  const addNote = (note: string) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  return (
    <div className="max-w-lg mx-auto mt-1 p-6 drop-shadow-lg rounded bg-slate-100">
      <h1
        data-testid="note-title"
        className="text-2xl font-bold mb-4 text-center text-slate-950"
      >
        Notes App
      </h1>
      <p data-testid="note-description" className="text-slate-950">
        Add new notes in the list
      </p>
      <NotesForm addNote={addNote} />
      <NotesList notes={notes} />
    </div>
  );
};

export default NotesApp;
