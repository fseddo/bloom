import path, { dirname } from "path";
import express from "express";
import { apiRouter } from "./api";
import { fileURLToPath } from "url";

const __filename = dirname(fileURLToPath(import.meta.url));
const __dirname = import.meta.dirname;

export const app = express();

// //CORS middlware
// app.use(function (req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");

//   // Request methods you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );

//   // Request headers you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );

//   // Pass to next layer of middleware
//   next();
// });

// body parsing middleware
app.use(express.json());

// auth and api routes
app.use("/api", apiRouter);

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "dist/index.html"))
);

// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "dist")));

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    next(err);
  } else {
    next();
  }
});

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist/index.html"));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
