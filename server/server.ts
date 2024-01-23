import express from "express";

export const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
