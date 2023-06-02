export function useFoot() {
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
              href: '/',
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
              href: '/release',
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
              href: '/about',
            },
          },
          {
            link: {
              name: 'foot.links[1].link[1]',
              href: '/about#location',
            },
          },
          {
            link: {
              name: 'foot.links[1].link[2]',
              href: 'release/terms-of-use',
            },
          },
        ],
      },
      {
        title: 'foot.links[2].group',
        child: [
          {
            icon: 'i-ic-sharp-wechat',
            link: {
              name: 'foot.links[2].link[0]',
              href: '#',
            },
          },
          {
            icon: 'i-ri-twitter-fill',
            link: {
              name: 'foot.links[2].link[1]',
              href: 'https://twitter.com/Topverse_Studio',
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
