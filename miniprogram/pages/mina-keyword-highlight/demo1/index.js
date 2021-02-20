// pages/keyword-highlight/index.js

const { description, shortDesc } = getApp().globalData;
Page({
  data: {
    shortText: shortDesc,
    text: description,
    key: 'mina-tool',
    color: 'red',
  },
  onShareAppMessage(res) {
    return {
      title: '这个小程序开发工具很实用哦～',
      imageUrl: 'https://t.newscdn.cn/mina/Poster (1).png',
    };
  },
});
