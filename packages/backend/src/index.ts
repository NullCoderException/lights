import express from "express";
import { lights } from "@lights/shared";

const app = express();
const port = 3000;

function isString(value: any): value is string {
  return typeof value === "string";
}

app.get("/api/lights", (req, res) => {
  const { manufacturer, finishGroup, batteryType, anduril } = req.query;

  let filteredLights = [...lights];

  if (isString(manufacturer)) {
    filteredLights = filteredLights.filter(
      (light) => light.manufacturer.toLowerCase() === manufacturer.toLowerCase()
    );
  }

  if (isString(finishGroup)) {
    filteredLights = filteredLights.filter(
      (light) => light.finish_group.toLowerCase() === finishGroup.toLowerCase()
    );
  }

  if (isString(batteryType)) {
    filteredLights = filteredLights.filter(
      (light) => light.finish_group.toLowerCase() === batteryType.toLowerCase()
    );
  }

  if (anduril !== undefined) {
    // Convert string query param to boolean
    const andurilValue = anduril === "true";
    filteredLights = filteredLights.filter(
      (light) => light.anduril === andurilValue
    );
  }

  // Other filters...

  res.json(filteredLights);
});

// GET endpoint for specific flashlight by manufacturer and model
app.get("/api/lights/:manufacturer/:model", (req, res) => {
  const { manufacturer, model } = req.params;

  const filteredLights = lights.filter(
    (light) =>
      light.manufacturer.toLowerCase() === manufacturer.toLowerCase() &&
      light.model.toLowerCase() === model.toLowerCase()
  );

  if (filteredLights.length === 0) {
    return res.status(404).json({ error: "Flashlight not found" });
  }

  res.json(filteredLights);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Total lights in collection: ${lights.length}`);
});
