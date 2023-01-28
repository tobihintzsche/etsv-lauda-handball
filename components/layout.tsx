import Footer from './footer'
import { Navbar } from './Navbar'

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
