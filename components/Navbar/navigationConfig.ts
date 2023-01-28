interface NavbarLink {
  link: NavbarSingleLink
  subNav?: NavbarSingleLink[]
}

interface NavbarSingleLink {
  text: string
  url: string
}

export interface NavbarConfig {
  navbarItem: NavbarLink[]
}

const navbarConfig: NavbarConfig = {
  navbarItem: [
    {
      link: {
        text: 'Home',
        url: '/home',
      },
    },
    {
      link: {
        text: 'About',
        url: '/about',
      },
    },
    {
      link: {
        text: 'Services',
        url: '/services',
      },
      subNav: [
        {
          text: 'Consulting',
          url: '/services/consulting',
        },
        {
          text: 'Training',
          url: '/services/training',
        },
        {
          text: 'Support',
          url: '/services/support',
        },
      ],
    },
    {
      link: {
        text: 'Contact',
        url: '/contact',
      },
    },
    {
      link: {
        text: 'test',
        url: '/test',
      },
      subNav: [
        {
          text: 'test0',
          url: '/services/test0',
        },
        {
          text: 'test1',
          url: '/services/test1',
        },
        {
          text: 'test2',
          url: '/services/test2',
        },
      ],
    },
  ],
}

export default navbarConfig
