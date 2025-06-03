import express from "express";
import cors from "cors";
import NoteRoute from "routes/NoteRoutes.js";
import "models/index.js"; 
import cookieParser from "cookie-parser";

// Konfigurasi CORS agar mengizinkan domain frontend terdeploy
const corsOptions = {
 origin: [
    "https://frontend-service-dot-projekcc017033.uc.r.appspot.com",
    "http://localhost:3000", // Tambahkan localhost untuk pengembangan lokal
  ], // Ganti dengan URL frontend yang terdeploy
  credentials: true, // Memungkinkan penggunaan cookies
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions)); // Menggunakan opsi CORS

// Menambahkan penanganan preflight request (OPTIONS)
app.options("*", cors(corsOptions)); // Menanggapi preflight requests

const app = express();
app.use(cors());
app.use(express.json());
app.use(NoteRoute);

app.listen(4000, ()=> console.log('Server aktif dan berjalan...'));