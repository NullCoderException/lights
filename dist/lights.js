import fs from "fs";
import Papa from "papaparse";
// Define sample flashlight data
const lights = [
    {
        model: "Acebeam L35 2.0",
        manufacturer: "Acebeam",
        finish: "MAO White",
        finish_group: "MAO",
        battery_type: "21700",
        emitters: [
            {
                type: "SFT-70",
                cct: "6500K",
                count: 1,
            },
        ],
        driver: "Buck",
        ui: "Dual Switch",
        special_features: ["MAO finish", "TIR optic"],
        notes: "Primary thrower",
        purchase_date: "2023",
        status: "Active",
    },
    {
        model: "HD01 Pro",
        manufacturer: "Wurkkos",
        finish: "Black",
        finish_group: "Anodized",
        battery_type: "21700",
        emitters: [
            {
                type: "Main LED",
                cct: "6500K",
                count: 1,
            },
            {
                type: "UV",
                cct: "365nm",
                count: 1,
            },
        ],
        driver: "Regular",
        ui: "Side Switch",
        special_features: ["UV", "Green Laser", "Power Bank"],
        notes: "Multi-function light",
        purchase_date: "2024",
        status: "Active",
    },
];
const csvRows = [];
// Header row - now properly typed
const headers = [
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
    const row = [
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
