const CONFIG_INTRODUCTION = {
  title: 'popover简介',
  list: [
    {
      name: '在 popup 的基础上，完善气泡菜单的通用逻辑',
      tip: true,
    },
    {
      name: '使用者只需要在 slot 里添加提示或者菜单内容即可',
      tip: true,
    },
    {
      name: 'popover 会根据触发位置自动改变展示方向',
      tip: true,
    },
  ],
};
const CONFIG_DEMO_TIP = {
  title: '常见场景模拟',
  list: [
    {
      name: '下方是对两种最常用的场景的模拟',
      tip: true,
    },
    {
      name: '可以滑动页面，查看按钮的所在半屏位置改变后的窗体方向',
      tip: true,
    },
    {
      name: '本小程序首页左上角的用户菜单用的就是 气泡菜单 的手法',
      tip: true,
    },
  ],
};
const CONFIG_TIPS = {
  title: 'fixed-popover',
  list: [
    {
      name: 'popover不传selector时，会通过left、top来定位',
      tip: true,
    },
    {
      name: 'mina-popups/menu-popover原理就是，计算小程序胶囊位置，并通过left+top的方式来定位popover',
      tip: true,
    },
  ],
};
const CONFIG_MASK = {
  title: '设置fixed-popover的mask',
  list: [
    {
      name: 'mask',
      type: 'SWITCH',
    },
    {
      name: 'catchScroll',
      type: 'SWITCH',
    },
    {
      name: 'tapMaskClose',
      type: 'SWITCH',
    },
    {
      name: 'scrollMaskClose',
      type: 'SWITCH',
    },
    {
      name: 'maskColor',
      type: 'TEXT',
      disable: true,
    },
  ],
};

const CONFIG_FIXED = {
  title: '设置fixed-popover的窗体',
  list: [
    {
      name: 'translateX',
      type: 'PICKER',
      typeData: [5, 15, 30, 50],
    },
    {
      name: 'left',
      type: 'PICKER',
      typeData: [50, 100, 300],
    },
    {
      name: 'top',
      type: 'PICKER',
      typeData: [50, 100, 500],
    },
    {
      name: 'unit',
      type: 'TEXT',
      disable: true,
    },
  ],
};

Component({
  data: {
    top_tip: [CONFIG_INTRODUCTION],
    demo_tip: [CONFIG_DEMO_TIP],
    mask_config: [CONFIG_MASK],
    fixed_config: [CONFIG_FIXED],
    bottom_tip: [CONFIG_TIPS],
    popover: {
      mask: true,
      catchScroll: true,
      tapMaskClose: true,
      scrollMaskClose: false,
      maskColor: 'rgba(0, 0, 0, 0.6)',
      left: 50,
      top: 50,
      unit: 'px',
      translateX: 15,
    },
    fixed_show: false,
    popmenu_show: false,
    tooltip_show: false,
  },
  observers: {},
  onLoad: function (options) {},
  methods: {
    configChange(e) {
      this.setData({
        popover: {
          ...this.data.popover,
          ...e.detail,
        },
      });
    },
    open({ popupType = 'fixed' } = {}) {
      this.setData({
        [`${popupType}_show`]: true,
      });
    },
    close({ popupType = 'fixed' } = {}) {
      this.setData({
        [`${popupType}_show`]: false,
      });
    },
    tapFixedSelector(e) {
      const id = e.currentTarget.id;
      this.open({ popupType: id });
    },
    tapMenu() {
      wx.showToast({
        title: '点击菜单项',
        icon: 'none',
        duration: 1000,
      });
      this.close({ popupType: 'popmenu' });
    },
    onShareAppMessage(res) {
      return {
        title: '这个小程序开发工具很实用哦～',
        imageUrl: 'https://t.newscdn.cn/mina/Poster (1).png',
      };
    },
  },
});
