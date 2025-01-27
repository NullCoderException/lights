# Flashlight Collection Tracker

A TypeScript-based tool for managing and analyzing a flashlight collection. Generates detailed CSV exports with comprehensive information about each light including emitters, battery types, special features, and more.

## Features

- Strong TypeScript typing for flashlight data
- Enum-based categorization of manufacturers, finishes, and battery types
- Support for multiple emitters per light
- Tracks special features like Anduril UI
- CSV export functionality
- Organized data structure for easy maintenance

## Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

4. Run the CSV generator:

```bash
npm run start
```

## Project Structure

    flashlight-tracker/
    ├── src/
    │   ├── data/
    │   │   └── lights.ts    # Flashlight collection data
    │   ├── types.ts         # TypeScript interfaces and enums
    │   └── index.ts         # Main CSV generation logic

## Development

Run in development mode with automatic compilation:

```bash
npm run start
```

## Generated Output

The tool generates a detailed.csv file containing all flashlight information in an organized format.

## License

ISC
