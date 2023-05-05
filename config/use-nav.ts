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
  const { locale } = useI18n()

  const path = locale.value === 'zh' ? '/' : `/${locale.value}`

  return [
    {
      title: 'nav.home',
      href: `${path}`,
    },
    {
      title: 'nav.solutions.t',
      child: [
        {
          title: 'nav.solutions.child.land.service[0]',
          subtitle: 'nav.solutions.child.land.description[0]',
          href: `${path}/land`,
          icon: 'i-solar-airbuds-left-bold-duotone',
          iconColor: 'red',
        },
        {
          title: 'nav.solutions.child.land.service[1]',
          subtitle: 'nav.solutions.child.land.description[1]',
          href: `${path}/land`,
          icon: 'i-solar-airbuds-left-bold-duotone',
          iconColor: 'amber',
        },
        {
          title: 'nav.solutions.child.land.service[2]',
          subtitle: 'nav.solutions.child.land.description[2]',
          href: `${path}/land`,
          icon: 'i-solar-airbuds-left-bold-duotone',
          iconColor: 'amber',
        },
      ],
    },
    {
      title: 'nav.news',
      href: `${path}/news`,
    },
    {
      title: 'nav.event.t',
      child: [
        {
          title: 'nav.event.child.act[0]',
          subtitle: 'nav.event.child.description[0]',
          href: `${path}/land`,
          icon: 'i-solar-airbuds-left-bold-duotone',
          iconColor: 'red',
        },
        {
          title: 'nav.event.child.act[1]',
          subtitle: 'nav.event.child.description[1]',
          href: `${path}/land`,
          icon: 'i-solar-airbuds-left-bold-duotone',
          iconColor: 'red',
        },
      ],
    },
  ]
}
