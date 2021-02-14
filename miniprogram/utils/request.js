export default function request(url, options = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method: options.method ? options.method : 'GET',
      data: options.body,
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(options.header || {}),
      },
      success(res) {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      },
      fail(error) {
        reject(error.data);
      },
    });
  }).catch((err) => {
    console.error(err);
    wx.showToast({
      title: '哎呀，请求出错啦',
      icon: 'none',
      duration: 1000,
    });
    throw err;
  });
}
