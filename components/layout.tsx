import Footer from './footer'
import { Navigation } from './Navbar/Navigation'

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <>
      <div className="max-w-screen-2xl">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
