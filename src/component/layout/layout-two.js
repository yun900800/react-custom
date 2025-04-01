import React from "react";
export default function LayoutTwo({ children }) {
  return (
      <div className="flex h-screen flex-col md:flex-row">
        <div className="w-full flex-none md:w-64">
        </div>
        <div className="fcontainer min-w-calc-100p-minus-2rem">{children}</div>
      </div>
    ); 
}