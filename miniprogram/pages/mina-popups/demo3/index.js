const CONFIG_INTRODUCTION = {
  title: 'menu-popover简介',
  list: [
    {
      name: 'menu-popover是自动定位到胶囊菜单下方的popover',
      tip: true,
    },
    {
      name: '主要应用场景是引导用户操作菜单，如：添加到我的小程序',
      tip: true,
    },
    {
      name: '自适应navigationStyle:custom页面，使用者无需手动适配',
      tip: true,
    },
    {
      name: '优化popover的z-index为99，保证在其他popup的mask（z-index:100）之下',
      tip: true,
    },
  ],
};

Component({
  data: {
    top_tip: [CONFIG_INTRODUCTION],
    show: true,
  },
  observers: {},
  onLoad: function (options) {},
  methods: {
    configChange(e) {},
    open() {
      this.setData({
        show: true,
      });
    },
    close() {
      this.setData({
        show: false,
      });
    },
    onShareAppMessage(res) {
      return {
        title: '这个小程序开发工具很实用哦～',
        imageUrl: 'https://t.newscdn.cn/mina/Poster (1).png',
      };
    },
  },
});
