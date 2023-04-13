import { NavigationConfig } from '../../types/navigationTypes'

interface MobileNavigationOverlayProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  navigationConfig: NavigationConfig
}

export const MobileNavigationOverlay: React.FC<
  MobileNavigationOverlayProps
> = ({ isOpen, setIsOpen, navigationConfig }) => {
  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const genderMap = {
    men: 'Männlich',
    women: 'Weiblich',
    mixed: 'Gemischt',
  }

  return (
    <div
      className={`fixed z-50 top-0 left-0 w-full h-full ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-co bg-yellow-400 shadow-xl">
            <div className="flex-1 relative flex flex-col p-8">
              <div className="flex justify-end">
                {/* Close Button */}
                <button
                  type="button"
                  className="text-black hover:text-gray-400 focus:text-gray-400 focus:outline-none absolute"
                  onClick={handleClose}
                >
                  <span className="sr-only">Close panel</span>
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.75 6.75L17.25 17.25"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.75 17.25L17.25 6.75"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {/* <div className="mt-4 flex-1">
                <p className="text-sm text-black">Overlay content goes here.</p>
              </div> */}
              <div className="flex flex-col gap-3">
                {navigationConfig.navigation.map((item, index) => (
                  <div className="w-max flex flex-col" key={index}>
                    <a
                      href={item.link.href}
                      className="mr-4 hover:text-yellow-900 w-max text-5xl"
                    >
                      {item.link.title && item.link.title.toUpperCase()}
                    </a>
                    <div>
                      {navigationConfig.navigation.map((navItem, index) => {
                        if (
                          navItem.subNavigation &&
                          navItem.link.href === item.link.href
                        ) {
                          return (
                            <div
                              key={index}
                              className="grid grid-cols-2 gap-x-10 gap-y-4 pt-2 flex-col"
                            >
                              <div className="flex-1">
                                <div className="text-3xl">Männlich</div>
                                <div>
                                  {navItem.subNavigation.men &&
                                    navItem.subNavigation.men.map(
                                      (team, index) => {
                                        return (
                                          <div className="text-xl" key={index}>
                                            {team.title}
                                          </div>
                                        )
                                      }
                                    )}
                                </div>
                              </div>

                              <div>
                                <div className="text-3xl">Weiblich</div>
                                <div>
                                  {navItem.subNavigation.woman &&
                                    navItem.subNavigation.woman.map(
                                      (team, index) => {
                                        return (
                                          <div className="text-xl" key={index}>
                                            {team.title}
                                          </div>
                                        )
                                      }
                                    )}
                                </div>
                              </div>

                              <div>
                                <div className="text-3xl">Gemsicht</div>

                                <div>
                                  {navItem.subNavigation.mixed &&
                                    navItem.subNavigation.mixed.map(
                                      (team, index) => {
                                        return (
                                          <div className="text-xl" key={index}>
                                            {team.title}
                                          </div>
                                        )
                                      }
                                    )}
                                </div>
                              </div>
                            </div>
                          )
                        }
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
