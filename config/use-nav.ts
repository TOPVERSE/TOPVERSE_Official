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
          title: 'nav.solutions.child.land.t',
          subtitle: 'nav.solutions.child.land.description',
          href: '/land',
          icon: 'i-solar-accumulator-bold-duotone',
          iconColor: 'red',
        },
        {
          title: 'nav.solutions.child.land.t',
          subtitle: 'nav.solutions.child.land.description',
          href: '/landa',
          icon: 'i-solar-airbuds-case-open-line-duotone text-amber',
          iconColor: 'amber',
          // avatarProps: { icon: 'i-solar-airbuds-case-open-line-duotone' },
        },
      ],
    },
    {
      title: 'nav.test',
      href: '/test',
    },
  ]
}
