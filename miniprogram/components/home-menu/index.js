const app = getApp();

Component({
  behaviors: ['wx://component-export'],
  export() {
    this.popupWindow = this.selectComponent('#popup-window');
    return this.popupWindow;
  },
  options: {
    addGlobalClass: true,
  },
  properties: {
    selector: {
      type: String,
      value: '',
    },
  },
  observers: {},
  data: {},
  popupWindow: { open() {}, close() {} },
  lifetimes: {
    ready() {},
  },
  methods: {
    tapMenu() {
      // this.popupWindow.close();
    },
  },
});
