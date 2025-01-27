export enum BatteryType {
  AA = "AA",
  AAA = "AAA",
  FOURTEEN500 = "14500", // Using FOURTEEN500 since enums can't start with numbers
  EIGHTEEN350 = "18350",
  EIGHTEEN650 = "18650",
  TWENTY1700 = "21700",
  DUAL_FUEL_AA = "AA/14500", // For your Ryder and other dual fuel lights
  DUAL_FUEL_AAA = "AAA/10440", // For future compatibility
}

export enum Manufacturer {
  ACEBEAM = "Acebeam",
  WURKKOS = "Wurkkos",
  SOFIRN = "Sofirn",
  SKILLHUNT = "Skilhunt",
  CONVOY = "Convoy",
  EMISAR = "Emisar",
}

export enum FinishGroup {
  MAO = "MAO",
  ANODIZED = "Anodized",
  TITANIUM = "Titanium",
  COPPER = "Copper",
  COPPER_TITANIUM = "Copper+Titanium",
}

export enum ShippingStatus {
  RECEIVED = "Received",
  IN_TRANSIT = "In Transit",
  ORDERED = "Ordered",
}

export interface Emitter {
  type: string;
  cct: string;
  count: number;
}

export interface Flashlight {
  model: string;
  manufacturer: Manufacturer;
  finish: string;
  finish_group: FinishGroup;
  battery_type: BatteryType; // Updated to use enum
  emitters: Emitter[];
  driver: string;
  ui: string;
  anduril: boolean;
  special_features: string[];
  notes: string;
  purchase_date: string;
  shipping_status: ShippingStatus;
  status: "Active" | "Storage" | "Gifted" | "Retired";
}
