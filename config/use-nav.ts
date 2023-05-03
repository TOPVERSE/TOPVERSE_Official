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
          title: 'nav.solutions.child.land.t',
          subtitle: 'nav.solutions.child.land.description',
          href: `${path}/land`,
          icon: 'i-solar-accumulator-bold-duotone',
          iconColor: 'red',
        },
        {
          title: 'nav.solutions.child.land.t',
          subtitle: 'nav.solutions.child.land.description',
          href: `${path}/landa`,
          icon: 'i-solar-airbuds-case-open-line-duotone',
          iconColor: 'amber',
        },
      ],
    },
    {
      title: 'nav.test',
      href: `${path}/test`,
    },
  ]
}
