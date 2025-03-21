import React from "react";

export function Button({ size, children }) {
    let sizeClasses = {
      md: "px-4 py-2 rounded-md text-base",
      lg: "px-5 py-3 rounded-lg text-lg",
    }[size];
    return (
      <button type="button" className={`font-bold bg-white block ${sizeClasses} mt-4`}>
        {children}
      </button>
    );
  }

export default function DarkMode() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
        <div>
            <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
            <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
            </svg>
            </span>
        </div>
        <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
        </p>
        <a href="#" className="group rounded-lg p-8 bg-white block">
            <span className="group-hover:underline">Read more…</span>
        </a>
        <Button size="md">Buy Now</Button>
        <Button size="lg">Buy Now</Button>
    </div>
  );
}
