import React from 'react'
export function ResponseLayout({ children, ...delegate }) {
  return (
    <div className="mx-5 max-w-md flex flex-wrap h-full overflow-y-auto rounded-xl bg-white shadow-md md:max-w-max md:justify-center response-bar" {...delegate}>
        {children}
    </div>
  )
}