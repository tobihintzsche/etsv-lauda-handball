import Link from 'next/link'
import { NavigationConfig } from '../../types/navigationTypes'
import { CloseButtonSVG } from './CloseButtonSVG'
import { MobileNavigation } from './MobileNavigation'

interface MobileNavigationOverlayProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  navigationConfig: NavigationConfig
}

export const MobileNavigationOverlay: React.FC<
  MobileNavigationOverlayProps
> = ({ isOpen, setIsOpen, navigationConfig }) => {
  const handleClose = () => {
    setIsOpen(false)
  }

  const { navigation } = navigationConfig

  return (
    <div
      className={`fixed z-50 top-0 left-0 w-full h-full ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen">
          <div className="h-full overflow-y-auto bg-yellow-400">
            <div className="flex-1 relative flex flex-col px-4 md:px-8 pb-2">
              <div className="absolute right-4 md:right-8 md:top-2">
                <button
                  type="button"
                  className="text-black"
                  onClick={handleClose}
                >
                  {CloseButtonSVG}
                </button>
              </div>
              <div className="text-2xl md:text-4xl pb-4 pt-1 md:pt-2 lg:text-3xl">
                <Link href="/">ETSV LAUDA HANDBALL</Link>
              </div>
              <MobileNavigation
                navigation={navigation}
                handleClose={handleClose}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
