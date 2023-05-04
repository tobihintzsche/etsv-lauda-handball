/* eslint-disable @next/next/inline-script-id */
import Script from 'next/script'
import React, { useEffect, useState } from 'react'

export interface GameplanProps {
  gameplan_script: string
  name: string
}

export const Gameplan: React.FC<GameplanProps> = ({
  gameplan_script,
  name,
}) => {
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    try {
      eval(
        gameplan_script
          .replace(/<\/?script>/gi, '')
          .replace('handball-spielplan', `handball-spielplan-${name}`)
      )
    } catch (error) {
      setError(true)
    }
  }, [gameplan_script])

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `(function(e,t,n,r,i,s,o){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)}, e[i].l=1*new Date;s=t.createElement(n),o=t.getElementsByTagName(n)[0];s.async=1; s.src=r;o.parentNode.insertBefore(s,o)})(window,document,"script", 'https://www.handball.net/widgets/embed/v1.js',"_hb");      `,
        }}
      />

      <div className="w-full">
        <div className="text-3xl lg:text-4xl">{`${name.toUpperCase()} SPIELPLAN`}</div>
        <div id={`handball-spielplan-${name}`} />
      </div>
    </>
  )
}
