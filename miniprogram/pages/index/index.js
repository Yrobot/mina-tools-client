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
        list: [
          {
            title: '普通滑动',
            description: '测试单点触控事件',
            path: '/pages/mina-touch/demo1/index',
          },
          {
            title: '多点操控',
            description: '测试多点触控事件',
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
      {
        title: 'mina-tools',
        icon: 'icon-mina-tools',
        description: '',
        list: [
          {
            title: '组件',
            description: '',
            list: [
              {
                title: 'popup-window',
                description: '浮动弹窗',
                path: '/pages/mina-tools/components/popup-window/index',
              },
              {
                title: 'error-img',
                description: '错图兜底',
                path: '/pages/mina-tools/components/error-img/index',
              },
              {
                title: 'data-status',
                description: '状态展示',
                path: '/pages/mina-tools/components/data-status/index',
              },
            ],
          },
          {
            title: 'wxs',
            description: '',
            list: [
              {
                title: 'format',
                description: '数据格式化',
                path: '/pages/mina-tools/wxs/format/index',
              },
            ],
          },
          {
            title: 'wxss',
            description: '',
            list: [
              {
                title: 'common',
                description: '常用小程序样式',
                path: '/pages/mina-tools/wxss/common/index',
              },
            ],
          },
          {
            title: 'behavior',
            description: '',
            list: [
              {
                title: 'pageEvent',
                description: '组件监听页面事件',
                path: '/pages/mina-tools/behavior/pageEvent/index',
              },
            ],
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
  navigateTo(e) {
    const { path = '' } = e.currentTarget.dataset;
    if (path) {
      wx.navigateTo({ url: path });
    }
  },
});
