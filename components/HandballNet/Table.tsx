/* eslint-disable @next/next/inline-script-id */
import Script from 'next/script'
import { useEffect } from 'react'
import { Team } from '../../types/teamTypes'

export interface TableProps {
  table_script: string
  name: string
}

export const Table: React.FC<TableProps> = ({ table_script, name }) => {
  useEffect(() => {
    try {
      eval(
        table_script
          .replace(/<\/?script>/gi, '')
          .replace('handball-tabelle', `handball-tabelle-${name}`)
      )
    } catch (error) {}
  }, [table_script])

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `(function(e,t,n,r,i,s,o){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)}, e[i].l=1*new Date;s=t.createElement(n),o=t.getElementsByTagName(n)[0];s.async=1; s.src=r;o.parentNode.insertBefore(s,o)})(window,document,"script", 'https://www.handball.net/widgets/embed/v1.js',"_hb");`,
        }}
      />

      <div className="w-full">
        <div className="text-3xl lg:text-4xl">{`TABELLE`}</div>
        <div id={`handball-tabelle-${name}`} />
      </div>
    </>
  )
}
