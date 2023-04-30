import Link from 'next/link'
import React from 'react'

interface FooterProps {
  googleMapsLink?: string
  cmsLink: string
}

export const Footer: React.FC<FooterProps> = ({ googleMapsLink, cmsLink }) => {
  return (
    <div className="w-full bg-slate-700">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full px-4 lg:px-10 md:px-8 sm:px-6">
          <div className="text-xl flex flex-col md:flex-row text-center justify-center flex-wrap md:gap-4 py-4  text-white">
            <Link href={`${cmsLink}`}>Einloggen</Link>
            <Link href={'/impressum'}>Impressum</Link>
            <Link href={'/datenschutz'}>Datenschutzerklärung</Link>
            <Link href={`${googleMapsLink}`}>Zur Halle</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
