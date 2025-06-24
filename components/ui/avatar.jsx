import React from "react"

export function Avatar({ children, className = "", ...props }) {
  return (
    <div className={`rounded-full overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  )
}

export function AvatarImage({ src, alt }) {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />
}

export function AvatarFallback({ children }) {
  return (
    <div className="flex items-center justify-center bg-gray-200 text-gray-700 w-full h-full">
      {children}
    </div>
  )
}
