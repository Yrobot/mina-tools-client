Component({
  behaviors: ['wx://component-export'],
  export() {
    return this.selectComponent('#popup-fixed');
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
  observers: {},
  data: {},
  lifetimes: {
    ready() {},
  },
  methods: {},
});
