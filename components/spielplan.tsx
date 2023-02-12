import Script from 'next/script'

export default function Spielplan() {
  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
    (function(e,t,n,r,i,s,o){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)}, e[i].l=1*new Date;s=t.createElement(n),o=t.getElementsByTagName(n)[0];s.async=1; s.src=r;o.parentNode.insertBefore(s,o)})(window,document,"script", 'https://www.handball.net/widgets/embed/v1.js',"_hb");      `,
        }}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
    _hb({
      widget: 'spielplan',
      teamId: 'handball4all.wuerttemberg.899376',
      container: 'handball-spielplan'
      })
`,
        }}
      />
      <div className="w-full">
        <h1 className="text-3xl mb-4">Spielplan Herren Kreisliga A</h1>
        <div id="handball-spielplan" />
      </div>
    </>
  )
}
