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
        href: '/home',
      },
    },
    {
      link: {
        title: 'Jugend',
        href: '/test',
      },
      subNavigation: [
        {
          title: 'B-Jugend (m)',
          href: '/services/test0',
        },
        {
          title: 'C-Jugend (m)',
          href: '/services/test1',
        },
        {
          title: 'D-Jugend (m)',
          href: '/services/test2',
        },
        {
          title: 'E-Jugend',
          href: '/services/test2',
        },
        {
          title: 'Bambinis',
          href: '/services/test2',
        },
      ],
    },
    {
      link: {
        title: 'News',
        href: '/services',
      },
    },
    {
      link: {
        title: 'Anfahrt',
        href: '/contact',
      },
    },
  ],
}

export default navigationConfig
