Component({
  behaviors: ['wx://component-export'],
  export() {
    return {
      open: this._open.bind(this),
      close: this._close.bind(this),
    };
  },
  options: {
    addGlobalClass: true,
  },
  properties: {
    selector: {
      type: String,
      value: '',
    },
    bgClose: {
      type: Boolean,
      value: true,
    },
  },
  observers: {
    selector(selector) {
      if (selector) {
        this.doPopupPosition(selector);
      }
    },
  },
  data: {
    positionStyle: 'left:0;top:0;',
    visible: false,
  },
  lifetimes: {
    ready() {
      this.doPopupPosition(this.data.selector);
    },
  },
  methods: {
    catchTouchMove() {},
    _open() {
      this.setData({
        visible: true,
      });
    },
    _close() {
      this.setData({
        visible: false,
      });
    },
    tapBG() {
      if (this.data.bgClose) {
        this._close();
      }
    },
    setPosition({ left = 0, top = 0 }) {
      this.setData({
        positionStyle: `left:${left}px;top:${top}px;`,
      });
    },
    doPopupPosition(selector) {
      if (selector) {
        const query = wx.createSelectorQuery();
        query.select(selector).boundingClientRect();
        query.selectViewport().scrollOffset();
        query.exec((res) => {
          const [node, viewport] = res || [];
          if (!node || !viewport) {
            console.error(`popup-fixed 更新组件位置时无法获取位置信息`, {
              node,
              viewport,
            });
            return;
          }
          this.setPosition({
            left: node.left + node.width / 2,
            top: node.top + node.height,
          });
        });
      }
    },
  },
});
