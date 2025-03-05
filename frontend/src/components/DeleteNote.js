import React, { useState } from "react";
import axios from "axios";

const DeleteNote = ({ id, onDelete }) => {
  const [isModalActive, setModalActive] = useState(false);

  const openModal = () => setModalActive(true);
  const closeModal = () => setModalActive(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/Notes/${id}`);
      onDelete(); // Refresh list setelah delete
      closeModal();
    } catch (error) {
      console.error("Gagal menghapus note:", error);
    }
  };

  return (
    <>
      {/* Tombol delete yang membuka modal */}
      <button onClick={openModal} className="card-footer-item button is-danger has-text-white">
        Delete
      </button>

      {/* Modal pop-up */}
      <div className={`modal ${isModalActive ? "is-active" : ""}`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Konfirmasi Hapus</p>
            <button className="delete" aria-label="close" onClick={closeModal}></button>
          </header>
          <section className="modal-card-body">
            <p>Apakah yakin ingin menghapus note ini?</p>
          </section>
          <footer className="modal-card-foot">
            <button onClick={handleDelete} className="button is-danger">Hapus</button>
            <button onClick={closeModal} className="button">Batal</button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default DeleteNote;
