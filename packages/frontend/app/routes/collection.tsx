import { useLoaderData } from "@remix-run/react";
import FlashlightCard from "../components/flashlights/FlashlightCard";
import { Flashlight } from "@lights/shared";

export const loader = async () => {
  const response = await fetch("http://localhost:3000/api/lights");
  const lights = await response.json();
  return { lights };
};

export default function Collection() {
  const { lights } = useLoaderData<{ lights: Flashlight[] }>();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm dark:shadow-gray-900/10">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            My Collection
          </h1>
          <p className="mt-1 text-base font-medium text-gray-600 dark:text-gray-400">
            {lights.length} lights
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex gap-4 w-full sm:w-auto">
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 
                     text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 
                     bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 
                     focus:ring-blue-500 transition-colors"
          >
            Filter
          </button>
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 
                     text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 
                     bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 
                     focus:ring-blue-500 transition-colors"
          >
            Sort
          </button>
        </div>
      </div>

      {/* Grid of flashlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {lights.map((light: Flashlight) => (
          <FlashlightCard
            key={`${light.manufacturer}-${light.model}-${light.finish}`}
            light={light}
          />
        ))}
      </div>
    </div>
  );
}
