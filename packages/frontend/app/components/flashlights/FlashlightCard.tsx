import React from "react";
import type { Flashlight } from "@lights/shared";

interface FlashlightCardProps {
  light: Flashlight;
}

const FlashlightCard: React.FC<FlashlightCardProps> = ({ light }) => {
  const primaryEmitter = light.emitters[0];
  const hasAdditionalEmitters = light.emitters.length > 1;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
      <div className="p-5">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {light.manufacturer} {light.model}
            </h3>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {light.finish}
            </p>
          </div>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
            ${
              light.shipping_status === "Received"
                ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                : light.shipping_status === "In Transit"
                ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
                : "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
            }`}
          >
            {light.shipping_status}
          </span>
        </div>

        {/* Emitter Info */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-2 rounded">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Primary Emitter
            </span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {primaryEmitter.count}x {primaryEmitter.type} {primaryEmitter.cct}
            </span>
          </div>

          {hasAdditionalEmitters && (
            <div className="text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-2 rounded">
              +{light.emitters.length - 1} additional emitter
              {light.emitters.length > 2 ? "s" : ""}
            </div>
          )}

          <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-2 rounded">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Battery
            </span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {light.battery_type}
            </span>
          </div>

          {light.special_features.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {light.special_features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>

        {light.notes && (
          <div className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-400 border-t dark:border-gray-600 pt-3">
            {light.notes}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashlightCard;
