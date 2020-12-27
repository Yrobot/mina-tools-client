//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    repositories: [
      {
        title: 'mina-touch',
        icon: 'icon-mina-touch',
        description: '',
        demo_list: [
          {
            title: '普通滑动',
            description: '测试普通单点触控事件',
            path: '/pages/mina-touch/demo1/index',
          },
          {
            title: '多点操控',
            description: '测试多点操控事件',
            path: '/pages/mina-touch/demo2/index',
          },
          {
            title: '监听双击',
            description: '测试监听双击事件',
            path: '/pages/mina-touch/demo3/index',
          },
          {
            title: '监听长按',
            description: '测试监听长按事件',
            path: '/pages/mina-touch/demo4/index',
          },
        ],
      },
    ],
  },
  menu: {
    open() {},
    close() {},
  },
  onShareAppMessage(res) {
    return {
      title: '这个小程序开发工具很实用哦～',
      imageUrl: 'https://t.newscdn.cn/mina/Poster (1).png',
    };
  },
  onLoad() {
    this.menu = this.selectComponent('#home-menu');
  },
  tapMenu(e) {
    this.menu.open();
  },
});
