module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1611728676540, function(require, module, exports) {
var mitt = require('mitt');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var mitt__default = /*#__PURE__*/_interopDefaultLegacy(mitt);

class Timer {
  constructor({
    interval = 1000,
    stopwatch = false
  } = {}) {
    this._duration = 0;
    this._endTime = 0;
    this._pauseTime = 0;
    this._status = 'stopped';
    this._emitter = mitt__default['default']();

    this.tick = () => {
      if (this.status === 'paused') return;

      if (Date.now() >= this._endTime) {
        this.stop();

        this._emitter.emit('tick', this._stopwatch ? this._duration : 0);

        this._emitter.emit('done');
      } else {
        this._emitter.emit('tick', this.time);
      }
    };

    this._interval = interval;
    this._stopwatch = stopwatch;
  }

  start(duration, interval) {
    if (this.status !== 'stopped') return;

    if (duration == null) {
      throw new TypeError('Must provide duration parameter');
    }

    this._duration = duration;
    this._endTime = Date.now() + duration;

    this._changeStatus('running');

    this._emitter.emit('tick', this._stopwatch ? 0 : this._duration);

    this._timeoutID = setInterval(this.tick, interval || this._interval);
  }

  stop() {
    if (this._timeoutID) clearInterval(this._timeoutID);

    this._changeStatus('stopped');
  }

  pause() {
    if (this.status !== 'running') return;
    this._pauseTime = Date.now();

    this._changeStatus('paused');
  }

  resume() {
    if (this.status !== 'paused') return;
    this._endTime += Date.now() - this._pauseTime;
    this._pauseTime = 0;

    this._changeStatus('running');
  }

  _changeStatus(status) {
    this._status = status;

    this._emitter.emit('statusChanged', this.status);
  }

  get time() {
    if (this.status === 'stopped') return 0;
    const time = this.status === 'paused' ? this._pauseTime : Date.now();
    const left = this._endTime - time;
    return this._stopwatch ? this._duration - left : left;
  }

  get duration() {
    return this._duration;
  }

  get status() {
    return this._status;
  }

  on(eventName, handler) {
    this._emitter.on(eventName, handler);
  }

  off(eventName, handler) {
    this._emitter.off(eventName, handler);
  }

}

module.exports = Timer;
//# sourceMappingURL=tiny-timer.js.map

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1611728676540);
})()
//# sourceMappingURL=index.js.map