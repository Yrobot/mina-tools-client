import FormChecker from '../../../utils/formChecker';
import Countdown from 'mina-countdown'; // 1. 引入mina-countdown
const { description, shortDesc } = getApp().globalData;
const form_config = {
  phone: {
    required: true,
    tel: true,
  },
  code: {
    required: true,
  },
};

const messages = {
  phone: {
    required: '请输入手机',
    tel: '手机号不符合规范',
  },
  code: {
    required: '请输入验证码',
  },
};
Page({
  data: {
    countdown: 0,
    formData: {
      phone: '15888888888',
      code: '',
    },
  },
  onLoad: function (options) {
    // 2. onload实例化mina-countdown
    // 会创建this.countdown指向实例对象
    new Countdown(this, 'countdown', {
      // 大多数情况只需要监听 tick 事件，更新 this.data.countdown 即可满足大部分场景
      tick: function (countdown) {
        // 在Countdown倒计时过程中触发，触发事件间隔为1s，参数单位：秒
        console.log('countdown:' + countdown);
        // 更新 data.countdown 做渲染使用
        this.setData({
          countdown,
        });
      }.bind(this),
    });
  },
  /**
   * @description 更新form数据
   * @author Yrobot
   * @date 27/01/2021
   * @param {*} e
   */
  inputChange(e) {
    const { formData } = this.data;
    const { detail = {}, target = {} } = e;
    const { value } = detail;
    const { type } = target.dataset || {};
    formData[type] = value;
    this.setData({
      formData,
    });
  },
  /**
   * @description 表单提交逻辑：检查后请求登录
   * @author Yrobot
   * @date 20/01/2021
   */ tapLogin() {
    const { formData } = this.data;
    const formChecker = new FormChecker(form_config, messages);

    // 传入表单数据，调用验证方法
    if (!formChecker.checkForm(formData)) {
      const { msg } = formChecker.errorList[0] || {};
      wx.showToast({
        title: msg,
        icon: 'none',
        duration: 1000,
      });
    } else {
      wx.showToast({
        title: `发起登录请求`,
        icon: 'none',
        duration: 1000,
      });
    }
  },
  /**
   * @description 检测手机号：1必填，2格式正确
   * @author Yrobot
   * @date 20/01/2021
   * @param {*} phone
   * @return {*}
   */ checkPhone(phone) {
    const phoneChecker = new FormChecker(
      {
        phone: {
          required: true,
          tel: true,
        },
      },
      {
        phone: {
          required: '请输入手机',
          tel: '手机号不符合规范',
        },
      },
    );
    if (!phoneChecker.checkForm({ phone })) {
      const { msg } = phoneChecker.errorList[0] || {};
      return {
        ok: false,
        msg,
      };
    } else {
      return {
        ok: true,
        msg: '',
      };
    }
  },
  /**
   * @description 发送验证码（包含手机号检查逻辑）
   * @author Yrobot
   * @date 20/01/2021
   */ sendVerificationCode() {
    const { formData = {} } = this.data;
    const { phone } = formData;
    const { ok, msg } = this.checkPhone(phone);
    if (!ok) {
      wx.showToast({
        title: msg,
        icon: 'none',
        duration: 1000,
      });
    } else {
      this.countdown.start(60); // run for 60 seconds
      wx.showToast({
        title: `验证码已发送`,
        icon: 'none',
        duration: 1000,
      });
    }
  },
  /**
   * @description 点击提示发送验证码倒计时
   * @author Yrobot
   * @date 20/01/2021
   */ showCountdownNotification() {
    wx.showToast({
      title: `${this.data.countdown}秒后可重新发送`,
      icon: 'none',
      duration: 1000,
    });
  },
});
