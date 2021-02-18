/**
 * @description popup-base
 * 整合popup的通用逻辑：初始位置，popup背景，主动控制展示
 * @author Yrobot
 * @date 22/01/2021
 */
Component({
  behaviors: ['wx://component-export'],
  export() {
    return {
      open: this.open.bind(this),
      close: this.close.bind(this),
    };
  },
  options: {
    addGlobalClass: true,
  },
  properties: {
    // popup-backgroud
    background: {
      type: Boolean,
      value: true,
    },
    bgColor: {
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

    // fixed-position
    selector: {
      type: String,
      value: '',
    },
    left: {
      type: Number,
      value: 0,
    },
    top: {
      type: Number,
      value: 0,
    },
    unit: {
      type: String,
      value: 'px',
    },

    // inner properties
    visible: {
      type: Boolean,
      value: false,
    },
    position: {
      type: String,
      value: 'fixed', // fixed,center,left,right,top,bottom
    },
  },
  observers: {
    visible(visible) {
      if (visible) {
        this.open();
      } else {
        this.close();
      }
    },
  },
  data: {},
  lifetimes: {
    ready() {
      this.init();
    },
  },
  methods: {
    init() {
      this._init = true;
      this.getFixedPosition();
      this.getFuncVisible();
    },
    getFixedPosition() {
      this.fixedPosition = this.selectComponent('#fixed-position');
      return this.fixedPosition;
    },
    getFuncVisible() {
      this.funcVisible = this.selectComponent('#func-visible');
      return this.funcVisible;
    },
    open(area) {
      if (!this._init) {
        this.init();
      }
      const { selector, position } = this.data;
      if (position == 'fixed') {
        this.fixedPosition.freshPosition(selector, area).then((position) => {
          this.triggerEvent('position', position);
          this.funcVisible.open();
        });
      } else {
        this.funcVisible.open();
      }
    },
    close() {
      if (!this._init) {
        this.init();
      }
      this.funcVisible.close();
    },
  },
});
