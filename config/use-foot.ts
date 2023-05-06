export function useFoot() {
  const { locale } = useI18n()

  const path = locale.value === 'zh' ? '/' : `/${locale.value}`

  return {
    copyright: 'foot.copyright',
    release: 'foot.release',
    record: ['foot.record[0]', 'foot.record[1]'],
    links: [
      {
        title: 'foot.links[0].group',
        child: [
          {
            link: {
              name: 'foot.links[0].link[0]',
              href: '#',
            },
          },
          {
            link: {
              name: 'foot.links[0].link[1]',
              href: '#',
            },
          },
          {
            link: {
              name: 'foot.links[0].link[2]',
              href: '#',
            },
          },
        ],
      },
      {
        title: 'foot.links[1].group',
        child: [
          {
            link: {
              name: 'foot.links[1].link[0]',
              href: '#',
            },
          },
          {
            link: {
              name: 'foot.links[1].link[1]',
              href: '#',
            },
          },
          {
            link: {
              name: 'foot.links[1].link[2]',
              href: '#',
            },
          },
        ],
      },
      {
        title: 'foot.links[2].group',
        child: [
          {
            link: {
              name: 'foot.links[2].link[0]',
              href: '#',
            },
          },
          {
            link: {
              name: 'foot.links[2].link[1]',
              href: '#',
            },
          },
          {
            link: {
              name: 'foot.links[2].link[2]',
              href: '#',
            },
          },
        ],
      },
    ],
  }
}
