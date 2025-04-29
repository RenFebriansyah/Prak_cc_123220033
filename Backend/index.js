import express from "express";
import cors from "cors";
import NoteRoute from "./routes/NoteRoutes.js";

const app = express();


app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.render("index"));
app.use(NoteRoute);

app.listen(4000, ()=> console.log('Server aktif dan berjalan...'));
