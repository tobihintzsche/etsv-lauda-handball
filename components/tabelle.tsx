import Script from 'next/script'

export default function Tabelle() {
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
          __html: `
            _hb({
              widget: 'tabelle',
              teamId: 'handball4all.wuerttemberg.899376',
              container: 'handball-tabelle'
              })
      `,
        }}
      />
      <div className="w-[500px]">
        <div id="handball-tabelle" />
      </div>
    </>
  )
}
