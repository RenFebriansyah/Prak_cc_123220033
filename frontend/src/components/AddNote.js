import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const [penulis, setPenulis] = useState("");
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [tag, setTag] = useState("Penting");
  const navigate = useNavigate();

  const saveNote = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/Notes", {
        penulis,
        judul,
        isi,
        tag,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">

      <h1 className="title has-text-primary has-text-centered">NoteNow</h1>
        <form onSubmit={saveNote}>
          <div className="field">
            <label className="label">Penulis</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={penulis}
                onChange={(e) => setPenulis(e.target.value)}
                placeholder="Penulis"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Judul</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Judul"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Isi</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={isi}
                onChange={(e) => setIsi(e.target.value)}
                placeholder="Isi"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tag</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                >
                  <option value="Penting">Penting</option>
                  <option value="Cukup Penting">Cukup Penting</option>
                  <option value="Tidak Penting">Tidak Penting</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNote;