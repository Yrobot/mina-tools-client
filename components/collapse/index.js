Component({
  properties: {
    extClass: {
      type: String,
      value: '',
    },
    open: {
      type: Boolean,
      value: false,
    },
  },
  options: {
    addGlobalClass: true,
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  data: {
    _open: false,
  },
  observers: {
    open(open) {
      if (open !== undefined) {
        this.setData({
          _open: open,
        });
      }
    },
  },
  lifetimes: {},
  methods: {
    switchOpen() {
      this.setData({
        _open: !this.data._open,
      });
    },
  },
});
