import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { flowerRouter } from "./api/flowers";
import { apiRouter } from "./api";
import { seed } from "../script/seed";
import { db } from "./db/db";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();

const PORT = 8080;

//CORS middlware
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader(
    "Access-Control-Allow-Origin",
    process.env.VITE_FRONTEND_HOST_NAME ?? ""
  );

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Pass to next layer of middleware
  next();
});

// body parsing middleware
app.use(express.json());

// auth and api routes
app.use("/api", apiRouter);

// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));

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

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

const init = async () => {
  try {
    if (process.env.SEED === "true") {
      await seed();
    } else {
      await db.sync();
    }
    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
