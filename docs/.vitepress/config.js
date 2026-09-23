import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "新西兰生活指南",
  description: "新西兰留学生落地攻略 + 真实餐馆探店推荐避雷",
  base: '/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '留学生指南', link: '/guide/' },
      { text: '探店&游玩', link: '/food-travel/' },
      { text: '关于我', link: '/about/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '留学生落地指南',
          items: [
            { text: '新西兰电话卡对比', link: '/guide/phone-card' },
            { text: '奥克兰租房避坑', link: '/guide/rent' },
            { text: '新西兰IRD申请指南', link: '/guide/ird' },
            { text: '新西兰公交卡AT HOP卡指南', link: '/guide/at-hop' }
          ]
        }
      ],
      '/food-travel/': [
        {
          text: '探店测评',
          items: [
            { text: '奥克兰餐厅示例', link: '/food-travel/test-shop' },
            { text: '奥克兰越南粉店推荐', link: '/food-travel/auckland-pho' },
            { text: '奥克兰甜品店避雷', link: '/food-travel/auckland-dessert' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    }
  }
})
