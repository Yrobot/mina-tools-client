Component({
  behaviors: ['wx://component-export'],
  export() {
    this.popupFixed = this.selectComponent('#popup-fixed');
    return this.popupFixed;
  },
  popupFixed: {
    open() {},
    close() {},
  },
  options: {
    addGlobalClass: true,
  },
  properties: {
    selector: {
      type: String,
      value: '',
    },
    tapBgClose: {
      type: Boolean,
      value: true,
    },
    scrollBgClose: {
      type: Boolean,
      value: false,
    },
    visible: {
      type: Boolean,
      value: undefined,
    },
    backgroundColor: {
      type: String,
      value: '',
    },
    catchScroll: {
      type: Boolean,
      value: true,
    },
  },
  observers: {
    visible(visible) {
      if (visible === undefined) return;
      // 利用setData保证this.popupFixed初始化完成
      this.setData({}, () => {
        if (visible) {
          this.popupFixed.open();
        } else {
          this.popupFixed.close();
        }
      });
    },
  },
  data: {
    isLeft: true,
    isTop: true,
    nodeHalfHeight: 0,
  },
  lifetimes: {
    ready() {},
  },
  methods: {
    doDirection(e) {
      const { node, viewport } = e.detail || {};
      if (node && viewport) {
        const { left, top } = node;
        const isLeft = left < viewport.width / 2;
        const isTop = top < viewport.height / 2;
        this.setData({
          isLeft,
          isTop,
          nodeHalfHeight: node.height / 2,
        });
      } else {
        console.error('popup-window doDirection 还未获取到 nodeHalfHeight, left, top, viewport');
      }
    },
  },
});
