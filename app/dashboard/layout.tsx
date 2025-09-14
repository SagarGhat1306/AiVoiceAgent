import React from 'react'
import NavbarHeader from './component/NavbarHeader'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavbarHeader />
      {children}
    </div>
  )
}
