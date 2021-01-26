// pages/keyword-highlight/index.js

const { description, shortDesc } = getApp().globalData;
Page({
  data: {
    shortText: shortDesc,
    text: description,
    key: 'mina-tool',
    color: 'red',
  },
});
