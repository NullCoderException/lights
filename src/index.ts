import fs from "fs";
import Papa from "papaparse";
import { lights } from "./data/lights.js";

// Type the CSV rows
type CSVRow = string[];
const csvRows: CSVRow[] = [];

// Header row - now properly typed
const headers: CSVRow = [
  "Manufacturer",
  "Model",
  "Finish",
  "Finish Group",
  "Battery Type",
  "Primary Emitter",
  "Primary CCT",
  "Additional Emitters",
  "Driver",
  "UI",
  "Special Features",
  "Notes",
  "Purchase Date",
  "Shipping Status",
  "Status",
];

csvRows.push(headers);

// Data rows
lights.forEach((light) => {
  const primaryEmitter = light.emitters[0];
  const additionalEmitters = light.emitters
    .slice(1)
    .map((e) => `${e.count}x ${e.type} ${e.cct}`)
    .join("; ");

  const row: CSVRow = [
    light.manufacturer,
    light.model,
    light.finish,
    light.finish_group,
    light.battery_type,
    `${primaryEmitter.count}x ${primaryEmitter.type}`,
    primaryEmitter.cct,
    additionalEmitters,
    light.driver,
    light.ui,
    light.special_features.join("; "),
    light.notes,
    light.purchase_date,
    light.shipping_status,
    light.status,
  ];

  csvRows.push(row);
});

// Convert to CSV string and log
const csv = Papa.unparse(csvRows);
console.log("Sample CSV Format:\n");
console.log(csv);

// Write files
fs.writeFileSync("detailed.csv", csv);
