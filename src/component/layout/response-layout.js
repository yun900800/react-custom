import React from 'react'
export function ResponseLayout({ children, ...delegate }) {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        {children}
    </div>
  )
}