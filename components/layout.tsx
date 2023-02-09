import Footer from './footer'
import { Navigation } from './Navbar/Navigation'

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <>
      <div className="">
        <Navigation />
        <div className="max-w-screen-2xl mx-auto">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}
