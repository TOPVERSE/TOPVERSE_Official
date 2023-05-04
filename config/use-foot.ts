export function useFoot() {
  const { locale } = useI18n()

  const path = locale.value === 'zh' ? '/' : `/${locale.value}`

  return [
    {
      title: 'foot.group1.name',
      child: [
        {
          link: {
            name: 'foot.group1.link1',
            href: '#',
          },
        },
        {
          link: {
            name: 'foot.group1.link2',
            href: '#',
          },
        },
        {
          link: {
            name: 'foot.group1.link3',
            href: '#',
          },
        },
      ],
    },
    {
      title: 'foot.group2.name',
      child: [
        {
          link: {
            name: 'foot.group2.link1',
            href: '#',
          },
        },
        {
          link: {
            name: 'foot.group2.link2',
            href: '#',
          },
        },
        {
          link: {
            name: 'foot.group2.link3',
            href: '#',
          },
        },
      ],
    },
    {
      title: 'foot.group3.name',
      child: [
        {
          link: {
            name: 'foot.group3.link1',
            href: '#',
          },
        },
        {
          link: {
            name: 'foot.group3.link2',
            href: '#',
          },
        },
        {
          link: {
            name: 'foot.group3.link3',
            href: '#',
          },
        },
      ],
    },
  ]
}
