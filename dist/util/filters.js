export const filterLights = (lights, criteria) => {
    return lights.filter((light) => Object.entries(criteria).every(([key, value]) => light[key] === value));
};
// Example usage functions:
export const getByManufacturer = (lights, manufacturer) => {
    return filterLights(lights, { manufacturer });
};
export const getByBatteryType = (lights, batteryType) => {
    return filterLights(lights, { battery_type: batteryType });
};
export const getAndurilLights = (lights) => {
    return filterLights(lights, { anduril: true });
};
