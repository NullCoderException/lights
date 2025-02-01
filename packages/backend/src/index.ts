import express from "express";
import { lights } from "@lights/shared";

const app = express();
const port = 3000;

app.get("/api/lights", (req, res) => {
  res.json(lights);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Total lights in collection: ${lights.length}`);
});
