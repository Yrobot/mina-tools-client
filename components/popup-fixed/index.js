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
    backgroundColor: {
      type: String,
      value: '',
    },
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
    catchScroll: {
      type: Boolean,
      value: true,
    },
  },
  observers: {},
  data: {
    node: {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    },
    viewport: {
      width: 0,
      height: 0,
    },
    visible: false,
  },
  lifetimes: {
    ready() {
      this.getViewport().then(({ viewport }) => {
        this.setData({ viewport });
      });
    },
  },
  methods: {
    touchMove() {
      if (this.data.scrollBgClose) {
        this._close();
      }
    },
    _open() {
      this.beforeOpen(this.data.selector).then(() => {
        this.setData({
          visible: true,
        });
      });
    },
    _close() {
      this.setData({
        visible: false,
      });
    },
    tapBG() {
      if (this.data.tapBgClose) {
        this._close();
      }
    },
    beforeOpen(selector) {
      const { width = 0 } = this.data.viewport;
      const needGetViewport = width === 0;
      return Promise.all(needGetViewport ? [this.getNode(selector), this.getViewport()] : [this.getNode(selector)])
        .then((res = []) => {
          var data = {};
          res.map((d) => {
            data = { ...data, ...d };
          });
          this.setData(data, () => {
            this.triggerEvent('position', {
              node: this.data.node,
              viewport: this.data.viewport,
            });
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getViewport() {
      return new Promise((resolve) => {
        const query = wx.createSelectorQuery();
        query
          .selectViewport()
          .boundingClientRect(({ height, width }) => {
            resolve({
              viewport: { height, width },
            });
          })
          .exec();
      });
    },
    getNode(selector) {
      return new Promise((resolve, reject) => {
        if (selector) {
          const query = wx.createSelectorQuery();
          query
            .select(selector)
            .boundingClientRect(({ left, top, height, width }) => {
              resolve({
                node: { left, top, height, width },
              });
            })
            .exec();
        } else {
          reject('getNode() 没有 selector');
        }
      });
    },
  },
});
