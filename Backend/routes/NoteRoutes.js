import express from "express";
import {
    getNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
} from "../controllers/NoteController.js";
import {
  Register,
  Login,
  refreshToken,
  logout,
} from "../controller/UserController.js";
import { verifyToken } from "../middleware/verifytoken.js";

const router = express.Router();

// User Routes
router.post("/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", logout);

router.get('/Notes', verifyToken,  getNotes);
router.get('/Notes/:id', verifyToken, getNoteById);
router.post('/Notes', verifyToken, createNote);
router.patch('/Notes/:id', verifyToken, updateNote);
router.delete('/Notes/:id', verifyToken, deleteNote);

router.all("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

export default router;