/* eslint-disable @next/next/inline-script-id */
import Script from 'next/script'
import { Team } from '../../types/teamTypes'
import React from 'react'

export interface TableProps {
  table_script: string
  name: string
}

export const Table: React.FC<TableProps> = ({ table_script, name }) => {
  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `(function(e,t,n,r,i,s,o){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)}, e[i].l=1*new Date;s=t.createElement(n),o=t.getElementsByTagName(n)[0];s.async=1; s.src=r;o.parentNode.insertBefore(s,o)})(window,document,"script", 'https://www.handball.net/widgets/embed/v1.js',"_hb");`,
        }}
      />

      <Script
        dangerouslySetInnerHTML={{
          __html: table_script.replace(/<\/?script>/gi, ''),
        }}
      />
      <div className="w-full">
        <div className="text-3xl lg:text-4xl">{`${name.toUpperCase()} TABELLE`}</div>
        <div id="handball-tabelle" />
      </div>
    </>
  )
}
