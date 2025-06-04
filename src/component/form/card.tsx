// Card.tsx
import React from 'react'
import clsx from 'clsx'

export const Card = ({ children, className }: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={clsx('rounded-xl border shadow p-4 bg-white', className)}>
      {children}
    </div>
  )
}

const Header = ({ children }: React.PropsWithChildren) => (
  <div className="text-lg font-bold mb-2 border-b pb-1">{children}</div>
)

const Body = ({ children }: React.PropsWithChildren) => (
  <div className="text-gray-700 mb-2">{children}</div>
)

const Footer = ({ children }: React.PropsWithChildren) => (
  <div className="pt-2 border-t text-right text-sm text-gray-500">{children}</div>
)

// 把子组件挂在 Card 上，形成组合式 API
Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export default Card
