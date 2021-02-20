import Countdown from 'mina-countdown'; // 1. 引入mina-countdown

Page({
  data: {
    countdown: 0,
  },
  onLoad: function (options) {
    // 会创建this.countdown指向实例对象
    new Countdown(this, 'countdown', {
      // 大多数情况只需要监听 tick 事件，更新 this.data.countdown 即可满足大部分场景
      tick: function (countdown) {
        // 更新 data.countdown 做渲染使用
        this.setData({
          countdown,
        });
      }.bind(this),
      done: function () {
        //在Countdown倒计时结束时触发
        wx.showToast({
          title: '倒计时结束',
          icon: 'none',
          duration: 2000,
        });
      },
    });
    this.startCountdown(60 * 60 * 1 + 3);
  },
  startCountdown: function (duration = 60) {
    this.countdown.start(duration); // 支持传入倒计时时间，单位：秒
  },
  pauseCountdown: function () {
    this.countdown.pause();
  },
  resumeCountdown: function () {
    this.countdown.resume();
  },
  stopCountdown: function () {
    this.countdown.stop();
  },
  newCountdown(e) {
    const { count = 3600 } = e.currentTarget.dataset || {};
    this.stopCountdown();
    this.startCountdown(count);
  },
  onShareAppMessage(res) {
    return {
      title: '这个小程序开发工具很实用哦～',
      imageUrl: 'https://t.newscdn.cn/mina/Poster (1).png',
    };
  },
});
