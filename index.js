import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import routes from "./routes/routes";

const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, "/build")));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb:localhost/anon-msg-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

routes(app);

app.get("/", (req, res) => {
  res.send("Testing");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
