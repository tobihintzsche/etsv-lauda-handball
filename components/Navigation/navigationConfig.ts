import { NavigationConfig } from '../../types/navigationTypes'

export const navigationConfig: NavigationConfig = {
  navigation: [
    {
      link: {
        title: 'Verein',
        href: '/club',
      },
    },
    {
      link: {
        title: 'Herren',
        href: '/teams/herren',
      },
    },
    {
      link: {
        title: 'Teams',
        href: '/teams',
      },
      subNavigation: {},
    },
    {
      link: {
        title: 'News',
        href: '/news',
      },
    },
  ],
}
