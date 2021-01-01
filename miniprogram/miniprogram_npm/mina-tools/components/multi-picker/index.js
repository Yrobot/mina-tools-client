Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    multiRange: { type: Array, value: [[], []] },
    rangeKey: String,
    value: { type: Array, value: [0, 0] },
  },
  observers: {
    value(value) {
      this.setData({
        _picking_value: value,
      });
    },
  },
  data: {
    _picking_value: [],
  },
  methods: {
    bindMultiPickerColumnChange(e) {
      const { column, value } = e.detail;
      const _picking_value = this.data._picking_value;
      _picking_value[column] = value;
      this.setData({
        _picking_value,
      });
    },
    bindChange(e) {
      this.triggerEvent('change', {
        value: e.detail.value,
      });
    },
    bindTap() {
      this.setData({
        _picking_value: this.data.value,
      });
    },
  },
});
