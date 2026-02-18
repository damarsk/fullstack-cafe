import React from 'react'

interface BlankLayoutProps {
  children: React.ReactNode
}

export default function BlankLayout({ children }: BlankLayoutProps) {
  return (
    <main className="min-h-screen w-screen flex items-center justify-center bg-gray-800">
      <div className="w-full max-w-[420px] sm:max-w-[420px] md:max-w-[820px] min-h-screen flex items-center justify-center bg-gray-100">
        {children}
      </div>
    </main>
  );
}