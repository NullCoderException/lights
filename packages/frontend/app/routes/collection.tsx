import { useLoaderData } from "@remix-run/react";
import { lights } from "@lights/shared";
import FlashlightCard from "../components/flashlights/FlashlightCard";

export const loader = async () => {
  return { lights };
};

export default function Collection() {
  const { lights } = useLoaderData<typeof loader>();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Collection</h1>
          <p className="mt-1 text-base font-medium text-gray-600">
            {lights.length} lights
          </p>
        </div>

        {/* Future filter controls */}
        <div className="flex gap-4 w-full sm:w-auto">
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Filter
          </button>
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sort
          </button>
        </div>
      </div>

      {/* Grid of flashlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {lights.map((light) => (
          <FlashlightCard
            key={`${light.manufacturer}-${light.model}-${light.finish}`}
            light={light}
          />
        ))}
      </div>
    </div>
  );
}
