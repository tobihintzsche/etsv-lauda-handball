import Head from 'next/head'
import Footer from './footer'
import { Navigation } from './Navbar/Navigation'

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="">
        <Navigation />

        <div className="max-w-screen-2xl mx-auto flex justify-center">
          <div className="flex justify-between w-full lg:mx-10 md:mx-8 mx-4">
            <main className="">{children}</main>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
