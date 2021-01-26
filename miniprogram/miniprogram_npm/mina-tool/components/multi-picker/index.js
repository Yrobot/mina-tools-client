Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    getRanges: {
      type: Function,
      value: () => [],
    },
    rangeKey: String,
    value: { type: Array, value: [] },
  },
  observers: {
    value(value) {
      this.init();
    },
    getRanges() {
      this.value2Range(this._value);
    },
  },
  data: {
    range: [],
    _value: [],
  },
  lifetimes: {
    attached: function () {
      this._value = this._value || [];
    },
  },
  methods: {
    init() {
      this._value = [...(this.data.value || [])];
      this.setData({
        _value: this._value,
      });
      this.value2Range(this._value);
    },
    bindMultiPickerColumnChange(e) {
      const { column, value } = e.detail;
      this._value[column] = value;
      this.value2Range(this._value);
    },
    value2Range(res = []) {
      const result = res.map((v) => (!!v ? v : 0));
      const range = this.data.getRanges(result) || [];
      this.setData({
        range,
      });
    },
    bindChange(e) {
      this.triggerEvent('change', {
        value: e.detail.value,
      });
    },
    bindCancel() {
      this.init();
      this.triggerEvent('cancel', {});
    },
  },
});
