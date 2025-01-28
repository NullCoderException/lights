import {
  Flashlight,
  Manufacturer,
  FinishGroup,
  BatteryType,
  ShippingStatus,
  EmitterColor,
  FormFactor,
} from "../types.js";

export const lights: Flashlight[] = [
  {
    model: "E75",
    manufacturer: Manufacturer.ACEBEAM,
    finish: "Teal",
    finish_group: FinishGroup.ANODIZED,
    battery_type: BatteryType.TWENTY1700,
    emitters: [
      {
        type: "519A",
        color: EmitterColor.WHITE,
        cct: "5000K",
        count: 4,
      },
    ],
    driver: "Buck",
    ui: "Dual Switch",
    anduril: false,
    form_factors: [FormFactor.TUBE],
    special_features: ["USB-C charging", "TIR optic"],
    notes: "",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "L35 2.0",
    manufacturer: Manufacturer.ACEBEAM,
    finish: "Marbled MAO",
    finish_group: FinishGroup.MAO,
    battery_type: BatteryType.TWENTY1700,
    emitters: [
      {
        type: "SFT-70",
        color: EmitterColor.WHITE,
        cct: "6500K",
        count: 1,
      },
    ],
    driver: "Buck",
    ui: "Dual Switch",
    anduril: false,
    form_factors: [FormFactor.TUBE],
    special_features: ["MAO finish", "TIR optic"],
    notes: "",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "E70 Mini",
    manufacturer: Manufacturer.ACEBEAM,
    finish: "Stonewashed Titanium",
    finish_group: FinishGroup.TITANIUM,
    battery_type: BatteryType.EIGHTEEN350,
    emitters: [
      {
        type: "519A",
        color: EmitterColor.WHITE,
        cct: "5000K",
        count: 3,
      },
    ],
    driver: "Buck",
    ui: "Side Switch",
    anduril: false,
    form_factors: [FormFactor.TUBE],
    special_features: ["Titanium construction", "USB-C charging"],
    notes: "",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "Rider RX 2.0",
    manufacturer: Manufacturer.ACEBEAM,
    finish: "Titanium",
    finish_group: FinishGroup.TITANIUM,
    battery_type: BatteryType.DUAL_FUEL_AA,
    emitters: [
      {
        type: "519A",
        color: EmitterColor.WHITE,
        cct: "5000K",
        count: 1,
      },
    ],
    driver: "Buck",
    ui: "Tail Switch",
    anduril: false,
    form_factors: [FormFactor.TUBE, FormFactor.COMPACT],
    special_features: ["Titanium construction", "Dual fuel"],
    notes: "",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "Tac AA",
    manufacturer: Manufacturer.ACEBEAM,
    finish: "Coyote",
    finish_group: FinishGroup.ANODIZED,
    battery_type: BatteryType.DUAL_FUEL_AA,
    emitters: [
      {
        type: "519A",
        color: EmitterColor.WHITE,
        cct: "5000K",
        count: 1,
      },
    ],
    driver: "Buck",
    ui: "Tail Switch",
    anduril: false,
    form_factors: [FormFactor.TUBE],
    special_features: ["Dual fuel"],
    notes: "",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  // Pokelit collection
  {
    model: "Pokelit",
    manufacturer: Manufacturer.ACEBEAM,
    finish: "Green",
    finish_group: FinishGroup.ANODIZED,
    battery_type: BatteryType.DUAL_FUEL_AA,
    emitters: [
      {
        type: "219F",
        color: EmitterColor.WHITE,
        cct: "5000K",
        count: 1,
      },
    ],
    driver: "Buck",
    ui: "Tail Switch",
    anduril: false,
    form_factors: [FormFactor.TUBE, FormFactor.COMPACT],
    special_features: ["Dual fuel", "EDC"],
    notes: "",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "Pokelit",
    manufacturer: Manufacturer.ACEBEAM,
    finish: "Stonewashed Titanium",
    finish_group: FinishGroup.TITANIUM,
    battery_type: BatteryType.DUAL_FUEL_AA,
    emitters: [
      {
        type: "?",
        color: EmitterColor.WHITE,
        cct: "6500K",
        count: 1,
      },
    ],
    driver: "Buck",
    ui: "Tail Switch",
    anduril: false,
    form_factors: [FormFactor.TUBE, FormFactor.COMPACT],
    special_features: ["Dual fuel", "Titanium construction"],
    notes: "Cool white version",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "Pokelit",
    manufacturer: Manufacturer.ACEBEAM,
    finish: "Cracked Titanium",
    finish_group: FinishGroup.TITANIUM,
    battery_type: BatteryType.DUAL_FUEL_AA,
    emitters: [
      {
        type: "519A",
        color: EmitterColor.WHITE,
        cct: "5000K",
        count: 1,
      },
    ],
    driver: "Buck",
    ui: "Side Switch",
    anduril: false,
    form_factors: [FormFactor.TUBE, FormFactor.COMPACT],
    special_features: ["Dual fuel", "Titanium construction", "Cracked finish"],
    notes: "No memory version",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  // Convoy light
  {
    model: "S2+",
    manufacturer: Manufacturer.CONVOY,
    finish: "White MAO",
    finish_group: FinishGroup.MAO,
    battery_type: BatteryType.EIGHTEEN650,
    emitters: [
      {
        type: "B35AM",
        color: EmitterColor.WHITE,
        cct: "4500K",
        count: 1,
      },
    ],
    driver: "12-Group",
    ui: "Click",
    anduril: false,
    form_factors: [FormFactor.TUBE],
    special_features: ["MAO finish", "High CRI"],
    notes: "",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  // Emisar lights
  {
    model: "D4K",
    manufacturer: Manufacturer.EMISAR,
    finish: "Stone White",
    finish_group: FinishGroup.MAO,
    battery_type: BatteryType.TWENTY1700,
    emitters: [
      {
        type: "519A",
        color: EmitterColor.WHITE,
        cct: "5700K",
        count: 2,
      },
      {
        type: "W1",
        color: EmitterColor.WHITE,
        cct: "6000K",
        count: 2,
      },
    ],
    driver: "Linear + FET",
    ui: "Anduril 2",
    anduril: true,
    form_factors: [FormFactor.TUBE],
    special_features: ["Dual channel", "RGB aux LEDs", "MAO finish"],
    notes: "Flood + Throw combo",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "D3AA",
    manufacturer: Manufacturer.EMISAR,
    finish: "Gray",
    finish_group: FinishGroup.ANODIZED,
    battery_type: BatteryType.DUAL_FUEL_AA,
    emitters: [
      {
        type: "FFL351A",
        color: EmitterColor.WHITE,
        cct: "4000K",
        count: 3,
      },
    ],
    driver: "Boost",
    ui: "Anduril 2",
    anduril: true,
    form_factors: [FormFactor.TUBE],
    special_features: ["RGB aux LEDs", "Triple emitter", "Dual fuel"],
    notes: "",
    purchase_date: "2024",
    shipping_status: ShippingStatus.IN_TRANSIT,
    status: "Active",
  },
  // Olight lights

  // Skilhunt lights
  {
    model: "E3A",
    manufacturer: Manufacturer.SKILLHUNT,
    finish: "Slate Blue",
    finish_group: FinishGroup.ANODIZED,
    battery_type: BatteryType.DUAL_FUEL_AAA,
    emitters: [
      {
        type: "LH351B",
        color: EmitterColor.WHITE,
        cct: "5000K", // Assuming neutral white based on typical Skilhunt specs
        count: 1,
      },
    ],
    driver: "Linear", // Simple single-mode driver
    ui: "Twist",
    form_factors: [FormFactor.TUBE, FormFactor.COMPACT],
    anduril: false,
    special_features: [
      "Keychain light",
      "IPX-8 waterproof",
      "Bead surface lens",
    ],
    notes: "Single mode 100 lumen keychain light",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  // Sofirn lights
  {
    model: "SC13A",
    manufacturer: Manufacturer.SOFIRN,
    finish: "Black",
    finish_group: FinishGroup.ANODIZED,
    battery_type: BatteryType.EIGHTEEN350,
    emitters: [
      {
        type: "519A",
        color: EmitterColor.WHITE,
        cct: "5000K",
        count: 1,
      },
    ],
    driver: "Linear + FET",
    ui: "Anduril 2",
    anduril: true,
    form_factors: [FormFactor.TUBE, FormFactor.COMPACT],
    special_features: ["Aux LEDs"],
    notes: "",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "HS21",
    manufacturer: Manufacturer.SOFIRN,
    finish: "Black",
    finish_group: FinishGroup.ANODIZED,
    battery_type: BatteryType.EIGHTEEN650,
    emitters: [
      {
        type: "SFT40",
        color: EmitterColor.WHITE,
        cct: "6500K",
        count: 1,
      },
      {
        type: "CSP1919",
        color: EmitterColor.WHITE,
        cct: "5000K",
        count: 6,
      },
      {
        type: "HFL1-R",
        color: EmitterColor.RED,
        cct: null,
        count: 6,
      },
    ],
    driver: "Buck",
    ui: "Rotary",
    anduril: false,
    form_factors: [FormFactor.TUBE, FormFactor.HEADLAMP],
    special_features: ["Headlamp", "Dual emitter", "Red light"],
    notes: "Primary headlamp",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "HD25LR",
    manufacturer: Manufacturer.SOFIRN,
    finish: "Black",
    finish_group: FinishGroup.ANODIZED,
    battery_type: BatteryType.EIGHTEEN650,
    emitters: [
      {
        type: "LH351D",
        color: EmitterColor.WHITE,
        cct: "5000K",
        count: 1,
      },
      {
        type: "SST20-DR",
        color: EmitterColor.RED,
        cct: null,
        count: 1,
      },
    ],
    driver: "Buck",
    ui: "Side Switch",
    anduril: false,
    form_factors: [FormFactor.TUBE, FormFactor.HEADLAMP],
    special_features: ["Headlamp", "USB charging"],
    notes: "Old headlamp",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "IF24 Pro",
    manufacturer: Manufacturer.SOFIRN,
    finish: "Black", // Based on typical Sofirn anodizing
    finish_group: FinishGroup.ANODIZED,
    battery_type: BatteryType.EIGHTEEN650,
    emitters: [
      {
        type: "SFT40",
        color: EmitterColor.WHITE,
        cct: "5000K",
        count: 1,
      },
      {
        type: "CSP1313",
        color: EmitterColor.WHITE,
        cct: "5000K",
        count: 22,
      },
      {
        type: "FY-1615RGY",
        color: EmitterColor.RGB,
        cct: "RGB",
        count: 15,
      },
    ],
    driver: "Buck", // Pro version specifically uses Buck driver for main light
    ui: "Rotary + Side Switch",
    anduril: false,
    form_factors: [FormFactor.TUBE, FormFactor.MULTI_FUNCTION],
    special_features: [
      "Rotary mode select",
      "RGB side lights",
      "USB-C charging",
      "Magnetic tail",
      "Multiple light sources",
    ],
    notes: "Multifunction light with white, RGB, and special modes",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED, // Assuming it's received since you're adding it
    status: "Active",
  },
  // Wurkkos
  {
    model: "FC11C",
    manufacturer: Manufacturer.WURKKOS,
    finish: "Orange",
    finish_group: FinishGroup.ANODIZED,
    battery_type: BatteryType.EIGHTEEN650,
    emitters: [
      {
        type: "519A",
        color: EmitterColor.WHITE,
        cct: "4000K",
        count: 1,
      },
    ],
    driver: "Buck",
    ui: "Side Switch",
    anduril: false,
    form_factors: [FormFactor.TUBE],
    special_features: ["USB-C charging", "Magnetic tail"],
    notes: "",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "FC11C",
    manufacturer: Manufacturer.WURKKOS,
    finish: "Green",
    finish_group: FinishGroup.ANODIZED,
    battery_type: BatteryType.EIGHTEEN650,
    emitters: [
      {
        type: "519A",
        color: EmitterColor.WHITE,
        cct: "5000K",
        count: 1,
      },
    ],
    driver: "Buck",
    ui: "Side Switch",
    anduril: false,
    form_factors: [FormFactor.TUBE],
    special_features: ["USB-C charging", "Magnetic tail"],
    notes: "",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "FC11",
    manufacturer: Manufacturer.WURKKOS,
    finish: "Black",
    finish_group: FinishGroup.ANODIZED,
    battery_type: BatteryType.EIGHTEEN650,
    emitters: [
      {
        type: "519A",
        color: EmitterColor.WHITE,
        cct: "5000K",
        count: 1,
      },
    ],
    driver: "Linear + FET",
    ui: "Side Switch",
    anduril: false,
    form_factors: [FormFactor.TUBE],
    special_features: ["USB-C charging", "Magnetic tail"],
    notes: "Original FC11 version",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "HD01 Pro",
    manufacturer: Manufacturer.WURKKOS,
    finish: "Orange",
    finish_group: FinishGroup.ANODIZED,
    battery_type: BatteryType.BUILT_IN, // Based on size and typical Wurkkos spec
    emitters: [
      {
        type: "HM",
        color: EmitterColor.WHITE,
        cct: "6500K", // Typical CCT for this model
        count: 1,
      },
      {
        type: "CSP1313",
        color: EmitterColor.WHITE,
        cct: "6500K",
        count: 16,
      },
      {
        type: "UV",
        color: EmitterColor.UV,
        cct: "365nm",
        count: 1,
      },
      {
        type: "RGB",
        color: EmitterColor.RGB,
        cct: null,
        count: 15,
      },
      {
        type: "Green Laser",
        color: EmitterColor.GREEN,
        cct: null,
        count: 1,
      },
    ],
    driver: "Linear + FET", // Based on similar Wurkkos models
    ui: "Dual Side Switch",
    anduril: false,
    form_factors: [FormFactor.FLAT, FormFactor.MULTI_FUNCTION],
    special_features: [
      "UV light",
      "Green laser",
      "RGB aux",
      "USB-C charging",
      "Magnetic tail",
      "ATR",
    ],
    notes: "Multi-function light with UV, laser, and RGB aux",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED, // Assuming it's received since you're adding it
    status: "Active",
  },
  {
    model: "HD10",
    manufacturer: Manufacturer.WURKKOS,
    finish: "White MAO",
    finish_group: FinishGroup.MAO,
    battery_type: BatteryType.TWENTY1700,
    emitters: [
      {
        type: "CSP2323",
        color: EmitterColor.WHITE,
        cct: "4000K",
        count: 3,
      },
    ],
    driver: "Buck",
    ui: "Side Switch",
    anduril: false,
    form_factors: [
      FormFactor.TUBE,
      FormFactor.COMPACT,
      FormFactor.RIGHT_ANGLE,
      FormFactor.HEADLAMP,
    ],
    special_features: ["MAO finish", "Right angle light"],
    notes: "",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "TS11",
    manufacturer: Manufacturer.WURKKOS,
    finish: "Orange",
    finish_group: FinishGroup.ANODIZED,
    battery_type: BatteryType.TWENTY1700,
    emitters: [
      {
        type: "SFT40",
        color: EmitterColor.WHITE,
        cct: "6000K",
        count: 1,
      },
    ],
    driver: "Linear + FET",
    ui: "Anduril 2",
    anduril: true,
    form_factors: [FormFactor.TUBE],
    special_features: ["RGB aux LEDs"],
    notes: "",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "TD05",
    manufacturer: Manufacturer.WURKKOS,
    finish: "Black",
    finish_group: FinishGroup.ANODIZED,
    battery_type: BatteryType.EIGHTEEN650,
    emitters: [
      {
        type: "SFT40",
        color: EmitterColor.WHITE,
        cct: "5000K",
        count: 1,
      },
    ],
    driver: "Buck",
    ui: "Dual Switch",
    anduril: false,
    form_factors: [FormFactor.TUBE],
    special_features: ["Side + Tail switch"],
    notes: "",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "HD20",
    manufacturer: Manufacturer.WURKKOS,
    finish: "Green",
    finish_group: FinishGroup.ANODIZED,
    battery_type: BatteryType.TWENTY1700, // Can use 18650 too but primary is 21700
    emitters: [
      {
        type: "LH351D",
        color: EmitterColor.WHITE,
        cct: "5000K",
        count: 1,
      },
      {
        type: "XP-L HD",
        color: EmitterColor.WHITE,
        cct: "5000K",
        count: 1,
      },
    ],
    driver: "Buck",
    ui: "Side Switch",
    anduril: false,
    form_factors: [
      FormFactor.TUBE,
      FormFactor.RIGHT_ANGLE,
      FormFactor.HEADLAMP,
    ],
    special_features: ["Dual emitter", "Headlamp", "IP68 waterproof"],
    notes: "High CRI flood + throw combination headlamp",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "TS10 V2",
    manufacturer: Manufacturer.WURKKOS,
    finish: "White MAO",
    finish_group: FinishGroup.MAO,
    battery_type: BatteryType.FOURTEEN500,
    emitters: [
      {
        type: "CSP2323",
        color: EmitterColor.WHITE,
        cct: "4000K",
        count: 3,
      },
    ],
    driver: "Linear + FET",
    ui: "Anduril 2",
    anduril: true,
    form_factors: [FormFactor.TUBE, FormFactor.COMPACT],
    special_features: ["RGB aux LEDs", "MAO finish"],
    notes: "",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "TS10 V2",
    manufacturer: Manufacturer.WURKKOS,
    finish: "Green",
    finish_group: FinishGroup.ANODIZED,
    battery_type: BatteryType.FOURTEEN500,
    emitters: [
      {
        type: "CSP2323",
        color: EmitterColor.WHITE,
        cct: "6000K",
        count: 3,
      },
    ],
    driver: "Linear + FET",
    ui: "Anduril 2",
    anduril: true,
    form_factors: [FormFactor.TUBE, FormFactor.COMPACT],
    special_features: ["RGB aux LEDs"],
    notes: "",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "TS10 V2",
    manufacturer: Manufacturer.WURKKOS,
    finish: "Orange",
    finish_group: FinishGroup.ANODIZED,
    battery_type: BatteryType.FOURTEEN500,
    emitters: [
      {
        type: "CSP2323",
        color: EmitterColor.WHITE,
        cct: "4000K",
        count: 3,
      },
    ],
    driver: "Linear + FET",
    ui: "Anduril 2",
    anduril: true,
    form_factors: [FormFactor.TUBE, FormFactor.COMPACT],
    special_features: ["RGB aux LEDs"],
    notes: "",
    purchase_date: "2024",
    shipping_status: ShippingStatus.IN_TRANSIT,
    status: "Active",
  },
  {
    model: "TS10 V2",
    manufacturer: Manufacturer.WURKKOS,
    finish: "Copper+Titanium",
    finish_group: FinishGroup.COPPER_TITANIUM,
    battery_type: BatteryType.FOURTEEN500,
    emitters: [
      {
        type: "CSP2323",
        color: EmitterColor.WHITE,
        cct: "4000K",
        count: 3,
      },
    ],
    driver: "Linear + FET",
    ui: "Anduril 2",
    anduril: true,
    form_factors: [FormFactor.TUBE, FormFactor.COMPACT],
    special_features: ["RGB aux LEDs"],
    notes: "",
    purchase_date: "2024",
    shipping_status: ShippingStatus.RECEIVED,
    status: "Active",
  },
  {
    model: "TS10 V2",
    manufacturer: Manufacturer.WURKKOS,
    finish: "Copper",
    finish_group: FinishGroup.COPPER,
    battery_type: BatteryType.FOURTEEN500,
    emitters: [
      {
        type: "CSP2323",
        color: EmitterColor.WHITE,
        cct: "3000K",
        count: 3,
      },
    ],
    driver: "Linear + FET",
    ui: "Anduril 2",
    anduril: true,
    form_factors: [FormFactor.TUBE, FormFactor.COMPACT],
    special_features: ["RGB aux LEDs"],
    notes: "",
    purchase_date: "2024",
    shipping_status: ShippingStatus.IN_TRANSIT,
    status: "Active",
  },
  {
    model: "TS10 SG",
    manufacturer: Manufacturer.WURKKOS,
    finish: "Blue",
    finish_group: FinishGroup.ANODIZED,
    battery_type: BatteryType.FOURTEEN500,
    emitters: [
      {
        type: "SFT25R",
        color: EmitterColor.WHITE,
        cct: "6500K",
        count: 1,
      },
    ],
    driver: "Linear + FET",
    ui: "Anduril 2",
    anduril: true,
    form_factors: [FormFactor.TUBE, FormFactor.COMPACT],
    special_features: ["RGB aux LEDs", "Single emitter"],
    notes: "SG variant",
    purchase_date: "2024",
    shipping_status: ShippingStatus.IN_TRANSIT,
    status: "Active",
  },
];
