Page({
  data: {
    config: [
      {
        title: '控制popup-position模式',
        list: [
          {
            name: 'position',
            type: 'PICKER',
            typeData: ['fixed', 'center', 'left', 'right', 'top', 'bottom'],
          },
        ],
      },
      {
        title: '控制popup主体',
        list: [
          {
            name: 'selector',
            type: 'PICKER',
            typeData: ['', '#lefttop', '#righttop', '#leftbottom', '#rightbottom'],
          },
          {
            name: 'left',
            type: 'PICKER',
            typeData: [0, 50, 100, 200],
          },
          {
            name: 'top',
            type: 'PICKER',
            typeData: [0, 50, 100, 500],
          },
          {
            name: 'unit',
            type: 'TEXT',
            disable: true,
          },
        ],
      },
      {
        title: '控制mask',
        list: [
          {
            name: 'mask',
            type: 'SWITCH',
          },
          {
            name: 'catchScroll',
            type: 'SWITCH',
          },
          {
            name: 'tapMaskClose',
            type: 'SWITCH',
          },
          {
            name: 'scrollMaskClose',
            type: 'SWITCH',
          },
          {
            name: 'maskColor',
            type: 'TEXT',
            disable: true,
          },
        ],
      },
    ],
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
  onLoad: function (options) {},
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
});
