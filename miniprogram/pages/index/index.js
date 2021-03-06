//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    main: '',
    repositories: [
      {
        title: '监听交互手势',
        id: 'mina-touch',
        icon: 'icon-mina-touch',
        description: 'mina-touch',
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
        title: '关键词高亮',
        id: 'mina-keyword-highlight',
        icon: 'icon-mina-keyword-highlight',
        description: 'mina-keyword-highlight',
        list: [
          {
            title: '搜索高亮',
            description: '搜索结果关键词高亮',
            path: '/pages/mina-keyword-highlight/demo2/index',
          },
          {
            title: '文章关键词高亮',
            description: '支持外部文字样式继承',
            path: '/pages/mina-keyword-highlight/demo1/index',
          },
        ],
      },
      {
        title: '倒计时',
        id: 'mina-countdown',
        icon: 'icon-countdown',
        description: 'mina-countdown',
        list: [
          {
            title: '验证码发送',
            description: '快速实现验证码发送倒计时',
            path: '/pages/mina-countdown/demo1/index',
          },
          {
            title: '结点倒计时',
            description: '时间结点倒数',
            path: '/pages/mina-countdown/demo2/index',
          },
        ],
      },
      {
        title: '弹出组件集合',
        id: 'mina-popups',
        // icon: 'icon-popup',
        icon: 'icon-mina-popups',
        description: 'mina-popups',
        list: [
          {
            title: '基础弹出组件',
            description: 'popup组件展示',
            path: '/pages/mina-popups/demo1/index',
          },
          {
            title: '气泡卡片',
            description: 'popover组件展示',
            path: '/pages/mina-popups/demo2/index',
          },
          {
            title: '胶囊气泡卡片',
            description: 'menu-popover组件展示',
            path: '/pages/mina-popups/demo3/index',
          },
        ],
      },
      // {
      //   title: 'mina-tool',
      //   id: 'mina-tool',
      //   icon: 'icon-mina-tools',
      //   description: '',
      //   list: [
      //     {
      //       title: '组件',
      //       description: '',
      //       list: [
      //         {
      //           title: 'popup-window',
      //           description: '浮动弹窗',
      //           path: '/pages/mina-tool/components/popup-window/index',
      //         },
      //         {
      //           title: 'error-img',
      //           description: '错图兜底',
      //           path: '/pages/mina-tool/components/error-img/index',
      //         },
      //         {
      //           title: 'data-status',
      //           description: '状态展示',
      //           path: '/pages/mina-tool/components/data-status/index',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'wxs',
      //       description: '',
      //       list: [
      //         {
      //           title: 'format',
      //           description: '数据格式化',
      //           path: '/pages/mina-tool/wxs/format/index',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'wxss',
      //       description: '',
      //       list: [
      //         {
      //           title: 'common',
      //           description: '常用小程序样式',
      //           path: '/pages/mina-tool/wxss/common/index',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'behavior',
      //       description: '',
      //       list: [
      //         {
      //           title: 'pageEvent',
      //           description: '组件监听页面事件',
      //           path: '/pages/mina-tool/behavior/pageEvent/index',
      //         },
      //       ],
      //     },
      //   ],
      // },
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
  onLoad(query) {
    const { main: pathMain = '', scene = '' } = query;
    const main = pathMain || decodeURIComponent(scene);
    if (main) {
      this.setData({
        main,
        repositories: this.data.repositories.sort((a, b) => (a.id == main ? -1 : 1)),
      });
      wx.pageScrollTo({
        selector: `#${main}`,
        duration: 300,
      });
    }
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
