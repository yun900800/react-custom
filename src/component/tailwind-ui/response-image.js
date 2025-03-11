import React from "react";
export default function ResponseImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="object-cover w-16 md:w-32 lg:w-48"
    />
  );
}