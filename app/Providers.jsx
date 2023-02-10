"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-auto max-w-6xl">
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Providers