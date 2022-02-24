import Navbar from './navbar'
import Footer from './footer'

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
