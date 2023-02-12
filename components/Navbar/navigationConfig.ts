export interface NavigationItem {
  link: NavigationSingleLink
  subNavigation?: NavigationSingleLink[]
}

export interface NavigationSingleLink {
  title: string
  href: string
}

export interface NavigationConfig {
  navigation: NavigationItem[]
}

const navigationConfig: NavigationConfig = {
  navigation: [
    {
      link: {
        title: 'Verein',
        href: '/about',
      },
    },
    {
      link: {
        title: 'Herren',
        href: '/teams/Herren',
      },
    },
    {
      link: {
        title: 'Jugend',
        href: '/teams/jugend',
      },
      subNavigation: [
        {
          title: 'B-Jugend (m)',
          href: '/teams/b-jugend',
        },
        {
          title: 'C-Jugend (m)',
          href: '/teams/c-jugend',
        },
        {
          title: 'D-Jugend (m)',
          href: '/teams/d-jugend',
        },
        {
          title: 'E-Jugend',
          href: '/teams/e-jugend',
        },
        {
          title: 'Bambinis',
          href: '/teams/bambini',
        },
      ],
    },
    {
      link: {
        title: 'News',
        href: '/news',
      },
    },
    {
      link: {
        title: 'Anfahrt',
        href: '/anfahrt',
      },
    },
  ],
}

export default navigationConfig
