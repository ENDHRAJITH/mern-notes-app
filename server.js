// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
mongoose.connect("mongodb+srv://endhrajiththiyagu:end123@cluster0.3wu5ebk.mongodb.net/");
const PORT = 5000;
console.log("5000")
console.log("5000")

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://endhrajiththiyagu:end123@cluster0.3wu5ebk.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB Error", err));
