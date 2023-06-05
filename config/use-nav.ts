import type { colors } from 'unocss/preset-mini'

interface NavMenu {
  title: string
  icon?: string
  href?: string
  subtitle?: string
  iconColor?: keyof typeof colors
  child?: NavMenu[]
}

export function useNav(): NavMenu[] {
  return [
    {
      title: 'nav.home',
      href: '/',
    },
    {
      title: 'nav.solutions.t',
      child: [
        {
          title: 'nav.solutions.child.land.service[0]',
          subtitle: 'nav.solutions.child.land.description[0]',
          href: '/solutions',
          icon: 'i-tabler-affiliate',
          iconColor: 'red',
        },
        {
          title: 'nav.solutions.child.land.service[1]',
          subtitle: 'nav.solutions.child.land.description[1]',
          href: '/solutions',
          icon: 'i-tabler-a-b',
          iconColor: 'amber',
        },
        {
          title: 'nav.solutions.child.land.service[2]',
          subtitle: 'nav.solutions.child.land.description[2]',
          href: '/solutions',
          icon: 'i-tabler-3d-cube-sphere',
          iconColor: 'amber',
        },
        {
          title: 'nav.solutions.child.land.service[3]',
          subtitle: 'nav.solutions.child.land.description[3]',
          href: '/solutions',
          icon: 'i-iconoir-brain-electricity',
          iconColor: 'amber',
        },
      ],
    },
    {
      title: 'nav.news',
      href: '/release',
    },
    {
      title: 'nav.about',
      href: '/about',
    },
    {
      title: 'nav.event.t',
      child: [
        {
          title: 'nav.event.child.act[0]',
          subtitle: 'nav.event.child.description[0]',
          href: '/community/aaao',
          icon: 'i-tabler-apple',
          iconColor: 'red',
        },
        {
          title: 'nav.event.child.act[1]',
          subtitle: 'nav.event.child.description[1]',
          href: '/community/land',
          icon: 'i-tabler-api-app',
          iconColor: 'red',
        },
        {
          title: 'nav.event.child.act[2]',
          subtitle: 'nav.event.child.description[2]',
          href: '/community/vamx',
          icon: 'i-academicons-archive',
          iconColor: 'red',
        },
      ],
    },
  ]
}
