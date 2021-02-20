const CONFIG_TIPS = {
  title: 'popover优势',
  list: [
    {
      name: '1.支持selector和直传left、top 2种方式',
      tip: true,
    },
    {
      name: '2.根据触发位置自动改变popover的方向',
      tip: true,
    },
    {
      name: '3.支持修改弹出三角的相对位置',
      tip: true,
    },
  ],
};

Component({
  data: {
    config: [CONFIG_TIPS],
    popup: {
      mask: true,
      catchScroll: true,
      tapMaskClose: true,
      scrollMaskClose: false,
      maskColor: 'rgba(0, 0, 0, 0.6)',
      selector: '#lefttop',
      left: 0,
      top: 0,
      unit: 'px',
      position: 'fixed',
    },
    show: false,
  },
  observers: {},
  onLoad: function (options) {},
  methods: {
    configChange(e) {
      this.setData({
        popup: {
          ...this.data.popup,
          ...e.detail,
        },
      });
    },
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
    tapFixedSelector(e) {
      const id = e.currentTarget.id;
      this.setData({
        popup: {
          ...this.data.popup,
          selector: `#${id}`,
        },
      });
      this.open();
    },
    onShareAppMessage(res) {
      return {
        title: '这个小程序开发工具很实用哦～',
        imageUrl: 'https://t.newscdn.cn/mina/Poster (1).png',
      };
    },
  },
});
