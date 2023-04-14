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
          <div className="h-full bg-yellow-400">
            <div className="flex-1 relative flex flex-col p-8">
              <div className="absolute right-0 pr-8">
                <button
                  type="button"
                  className="text-black"
                  onClick={handleClose}
                >
                  {CloseButtonSVG}
                </button>
              </div>
              <MobileNavigation navigation={navigation} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
