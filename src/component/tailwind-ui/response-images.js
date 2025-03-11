import React from "react";
export default function ResponseImages({ src, alt }) {
  return (
    <div className="md:flex m-4">
        <div className="md:shrink-0">
        <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={src}
            alt={alt}
        />
        </div>
        <div className="p-8">
        <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase text-center sm:text-left">Company retreats</div>
        <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
            Incredible accommodation for your team
        </a>
        <p className="mt-2 text-gray-500">
            Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
            places to do just that.
        </p>
        </div>
    </div>
  );
}