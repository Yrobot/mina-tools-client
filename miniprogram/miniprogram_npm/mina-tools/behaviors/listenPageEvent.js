// 实用时必须在page声明需要用到的event，否则不会触发，很困惑！！

const LISTEN_LIST_KEY = '__listenPageEvents';

module.exports = Behavior({
  behaviors: [],
  properties: {},
  data: {},
  ready: function () {
    if (!this._listenPageEvents) {
      console.error(`listenPageEvents_behaviors 需要在 组件 内指定 _listenPageEvents 属性`);
      return;
    }
    const events = this._listenPageEvents;
    const _page = getCurrentPages()[getCurrentPages().length - 1];
    const _comp = this;
    events.map((name) => {
      if (this.configPageEvent(_page, name)) _page[name][LISTEN_LIST_KEY].push(_comp[name].bind(_comp));
    });
  },
  detached: function () {
    const _page = getCurrentPages()[getCurrentPages().length - 1];
    const _comp = this;
    const events = this._listenPageEvents;
    events.map((name) => {
      _page[name][LISTEN_LIST_KEY] = _page[name][LISTEN_LIST_KEY].filter((func) => func !== _comp[name].bind(_comp));
    });
  },
  methods: {
    configPageEvent(page, eventName) {
      if (!page[eventName]) {
        console.error(`page 没有指定${eventName}方法`);
        return;
      }
      if (typeof page[eventName][LISTEN_LIST_KEY] !== 'undefined') return true;
      const page_event = page[eventName] ? page[eventName].bind(page) : function () {};
      page[eventName] = function (...param) {
        page[eventName][LISTEN_LIST_KEY].map((listenFunc) => {
          listenFunc(...param);
        });
        return page_event(...param);
      }.bind(page);
      page[eventName][LISTEN_LIST_KEY] = [];
      return true;
    },
  },
});
