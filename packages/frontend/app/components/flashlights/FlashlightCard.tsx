import React from "react";
import type { Flashlight } from "@lights/shared";

interface FlashlightCardProps {
  light: Flashlight;
}

const FlashlightCard: React.FC<FlashlightCardProps> = ({ light }) => {
  const primaryEmitter = light.emitters[0];
  const hasAdditionalEmitters = light.emitters.length > 1;

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
      <div className="p-5">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              {light.manufacturer} {light.model}
            </h3>
            <p className="text-sm font-medium text-gray-600">{light.finish}</p>
          </div>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
            ${
              light.shipping_status === "Received"
                ? "bg-green-100 text-green-800"
                : light.shipping_status === "In Transit"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {light.shipping_status}
          </span>
        </div>

        {/* Emitter Info */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
            <span className="text-sm font-medium text-gray-700">
              Primary Emitter
            </span>
            <span className="text-sm font-semibold text-gray-900">
              {primaryEmitter.count}x {primaryEmitter.type} {primaryEmitter.cct}
            </span>
          </div>

          {hasAdditionalEmitters && (
            <div className="text-sm font-medium text-gray-600 bg-gray-50 p-2 rounded">
              +{light.emitters.length - 1} additional emitter
              {light.emitters.length > 2 ? "s" : ""}
            </div>
          )}

          <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
            <span className="text-sm font-medium text-gray-700">Battery</span>
            <span className="text-sm font-semibold text-gray-900">
              {light.battery_type}
            </span>
          </div>

          {light.special_features.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {light.special_features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>

        {light.notes && (
          <div className="mt-4 text-sm font-medium text-gray-600 border-t pt-3">
            {light.notes}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashlightCard;
