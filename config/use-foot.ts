export function useFoot() {
  return {
    copyright: 'foot.copyright',
    release: 'foot.release',
    // record: ['foot.record[0]'],
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
              href: '/terms-of-use',
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
            img: '/wechat.png',
          },
          {
            icon: 'i-material-symbols-shelf-auto-hide',
            link: {
              name: 'foot.links[2].link[2]',
              href: '#',
            },
            img: '/xiaohongshu.png',
          },
          {
            icon: 'i-ri-twitter-fill',
            link: {
              name: 'foot.links[2].link[1]',
              href: 'https://twitter.com/Topverse_Studio',
            },
          },
        ],
      },
    ],
  }
}
