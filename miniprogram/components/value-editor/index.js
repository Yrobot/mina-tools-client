// components/value-editor/index.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    value: null,
    typeData: null,
    type: String,
    disable: Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    change(e) {
      console.log(e.detail);
      const { type, typeData } = this.data;
      const _v = e.detail.value;
      var value = _v;
      switch (type) {
        case 'PICKER':
          value = typeData[_v];
          break;
      }
      this.triggerEvent('change', { value });
    },
  },
});
