const CONFIG_POSITION = {
  title: '控制popup-position模式',
  list: [
    {
      name: 'position',
      type: 'PICKER',
      typeData: ['fixed', 'center', 'left', 'right', 'top', 'bottom'],
    },
  ],
};
const CONFIG_POPUP = {
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
};
const CONFIG_MASK = {
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
};

Component({
  data: {
    config: [CONFIG_POSITION, CONFIG_POPUP, CONFIG_MASK],
    popup: {
      mask: true,
      catchScroll: true,
      tapMaskClose: true,
      scrollMaskClose: false,
      maskColor: 'rgba(0, 0, 0, 0.6)',
      selector: '',
      left: 0,
      top: 0,
      unit: 'px',
      position: 'fixed',
    },
    show: false,
  },
  observers: {
    'popup.position': function (position) {
      if (position == 'fixed') {
        this.setData({
          config: [CONFIG_POSITION, CONFIG_POPUP, CONFIG_MASK],
        });
      } else {
        this.setData({
          config: [CONFIG_POSITION, CONFIG_MASK],
        });
      }
    },
  },
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
