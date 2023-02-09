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
        title: 'Home',
        href: '/home',
      },
    },
    {
      link: {
        title: 'About',
        href: '/about',
      },
    },
    {
      link: {
        title: 'Services',
        href: '/services',
      },
      subNavigation: [
        {
          title: 'Consulting',
          href: '/services/consulting',
        },
        {
          title: 'Training',
          href: '/services/training',
        },
        {
          title: 'Support',
          href: '/services/support',
        },
      ],
    },
    {
      link: {
        title: 'Contact',
        href: '/contact',
      },
    },
    {
      link: {
        title: 'test',
        href: '/test',
      },
      subNavigation: [
        {
          title: 'test0',
          href: '/services/test0',
        },
        {
          title: 'test1',
          href: '/services/test1',
        },
        {
          title: 'test2',
          href: '/services/test2',
        },
      ],
    },
  ],
}

export default navigationConfig
