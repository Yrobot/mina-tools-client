// components/config-setter/index.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    config: Array,
    data: Object,
  },
  
  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    configChange(e) {
      const value = e.detail.value;
      const key = e.currentTarget.dataset.key;
      this.triggerEvent('change', {
        [key]: value,
      });
    },
  },
});
