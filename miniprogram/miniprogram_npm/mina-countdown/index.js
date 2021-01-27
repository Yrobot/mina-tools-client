module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1611728676537, function(require, module, exports) {
var __TEMP__ = require('tiny-timer');var Timer = __REQUIRE_DEFAULT__(__TEMP__);

const DEFAULT_OPTIONS = {
  tick: function () {},
  done: function () {},
  statusChanged: function () {},
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });class Countdown {
  constructor(_page, name, option = {}) {
    // init

    this._name = '';
    this._timer = new Timer({ interval: 1000 });
    this._option = { ...DEFAULT_OPTIONS, ...option };

    try {
      if (this._checkBeforeCreate(_page, name)) {
        this._name = name;
        _page[name] = this;
      }
    } catch (error) {
      console.error(error);
    }
    this._distributeHandlers();
  }
  _distributeHandlers() {
    this._timer.on('tick', (ms) => {
      this._option['tick'](Math.round(ms / 1000));
    });
    this._timer.on('done', this._option['done']);
    this._timer.on('statusChanged', this._option['statusChanged']);
  }
  _checkBeforeCreate(_page, name) {
    if (!_page || !name) {
      throw new Error('Countdown实例化时，必须传入page对象和引用名');
    }
    if (_page[name]) {
      throw new Error('Countdown实例化error： ' + name + ' 已经存在page中');
    }
    return true;
  }
  start(duration = 60) {
    this._timer.start(duration * 1000);
  }
  pause() {
    this._timer.pause();
  }
  resume() {
    this._timer.resume();
  }
  stop() {
    this._timer.stop();
  }
};exports.default = Countdown

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1611728676537);
})()
//# sourceMappingURL=index.js.map