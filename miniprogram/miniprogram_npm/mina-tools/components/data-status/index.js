Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    minHeight: {
      type: String,
      value: '600rpx',
    },
    loading: {
      type: Boolean,
      value: false,
    },
    empty: {
      type: Boolean,
      value: false,
    },
  },
});
