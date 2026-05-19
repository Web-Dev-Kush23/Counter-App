"use client"; // 👈 Required for client-side interactivity

import { useState } from "react";
import Link from "next/link";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Simple Counter
        </h1>

        <p className="text-5xl font-semibold mb-6 text-blue-600">{count}</p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            -
          </button>

          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            Reset
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            +
          </button>
        </div>
        <div>
            <Link href="/" className="mt-6 inline-block text-blue-500 hover:underline"> Go Back Home</Link>
        </div>
      </div>
    </main>
  );
}
