import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return {
    message: "Welcome to your Flashlight Collection",
  };
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{data.message}</h1>
      <p className="text-lg text-gray-600">
        Track and manage your flashlight collection with ease.
      </p>
    </div>
  );
}
