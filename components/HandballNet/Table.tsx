import Script from 'next/script'
import { Team } from '../../types/teamTypes'

export interface TableProps {
  team: Team
}

export const Table: React.FC<TableProps> = ({ team }) => {
  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            (function(e,t,n,r,i,s,o){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)}, e[i].l=1*new Date;s=t.createElement(n),o=t.getElementsByTagName(n)[0];s.async=1; s.src=r;o.parentNode.insertBefore(s,o)})(window,document,"script", 'https://www.handball.net/widgets/embed/v1.js',"_hb");
      `,
        }}
      />

      <Script
        dangerouslySetInnerHTML={{
          __html: team.handball_net_configuration.table_script.replace(
            /<\/?script>/gi,
            ''
          ),
        }}
      />
      <div className="w-full">
        <h1 className="text-3xl mb-4">{`${team.name} Tabelle`}</h1>
        <div id="handball-tabelle" />
      </div>
    </>
  )
}
