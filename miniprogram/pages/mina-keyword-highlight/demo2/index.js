import { getSearchSuggestion } from '../../../services/api';

const THROTTLE = 300;

Page({
  data: {
    list: [],
    keyword: '',
    initSearch: '小程序',
  },
  onLoad() {
    if (this.data.initSearch) this.getSuggestions(this.data.initSearch);
  },
  inputChage(e) {
    const value = e.detail.value;
    if (!value) return;
    if (this.lastSearch && Date.now() - this.lastSearch < THROTTLE) {
      return;
    }
    this.lastSearch = Date.now();
    this.timerId = setTimeout(() => {
      this.getSuggestions(value);
    }, THROTTLE);
  },
  getSuggestions(key) {
    getSearchSuggestion(key).then((list) => {
      this.setData({
        keyword: key,
        list,
      });
    });
  },
  onShareAppMessage(res) {
    return {
      title: '这个小程序开发工具很实用哦～',
      imageUrl: 'https://t.newscdn.cn/mina/Poster (1).png',
    };
  },
});
