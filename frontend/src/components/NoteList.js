import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteNote from "./DeleteNote"; // Import file baru
import "../App.css";
import { BASE_URL } from "../util";

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => { 
    try {
      const response = await axios.get(`${BASE_URL}/Notes`);
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="container mt-5">
    <h1 className="title has-text-primary has-text-centered">NoteNow Catatan</h1>
      <div className="columns is-multiline">
        <div className="column is-12">
          <Link to="add" className="button is-success mb-4">
            Add New
          </Link>
        </div>

        {notes.map((note) => (
          <div key={note.id} className="column is-one-third">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-15 note-title">{note.judul}</p>
                    <p className="subtitle is-8 note-author">By {note.penulis}</p>
                  </div>
                </div>

                <div className="content note-content">
                  {note.isi.length > 100 ? note.isi.substring(0, 100) + "..." : note.isi}
                  <br />
                  <span className="tag is-info mt-2 note-tag">
                    <strong>{note.tag}</strong>
                  </span>
                  <br />
                  <time className="note-datetime" dateTime={note.updatedAt}>
                    {formatDateTime(note.updatedAt)}
                  </time>
                </div>
              </div>

              <footer className="card-footer">
                <Link to={`edit/${note.id}`} className="card-footer-item button is-info has-text-white">
                  Edit
                </Link>
                <DeleteNote id={note.id} onDelete={getNotes} />
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
