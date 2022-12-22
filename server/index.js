import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: "*" }));

app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://sourav2002:sourav2002@cluster0.nffgcj3.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose.set('strictQuery', true);

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`server running on port : http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
  // mongoose.set('useFindAndModify', false);
