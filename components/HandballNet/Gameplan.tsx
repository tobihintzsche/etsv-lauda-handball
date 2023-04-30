import Script from 'next/script'
import { Team } from '../../types/teamTypes'

export interface GameplanProps {
  team: Team
}

export const Gameplan: React.FC<GameplanProps> = ({ team }) => {
  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `(function(e,t,n,r,i,s,o){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)}, e[i].l=1*new Date;s=t.createElement(n),o=t.getElementsByTagName(n)[0];s.async=1; s.src=r;o.parentNode.insertBefore(s,o)})(window,document,"script", 'https://www.handball.net/widgets/embed/v1.js',"_hb");      `,
        }}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: team.handball_net_configuration.gameplan_script.replace(
            /<\/?script>/gi,
            ''
          ),
        }}
      />
      <div className="w-full">
        <div className="text-3xl lg:text-4xl">{`${team.name.toUpperCase()} SPIELPLAN`}</div>
        <div id="handball-spielplan" />
      </div>
    </>
  )
}
