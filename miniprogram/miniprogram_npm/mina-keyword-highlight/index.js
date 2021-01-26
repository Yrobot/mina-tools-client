const splitText = (text, keyword) => {
  const result = [];
  const LEN = keyword.length;
  const dfs = (str) => {
    if (!str) return;
    const index = str.indexOf(keyword);
    if (index !== -1) {
      const pre = str.substr(0, index);
      const last = str.substr(index + LEN);
      if (pre) {
        result.push(pre);
      }
      result.push(keyword);
      dfs(last);
    } else {
      result.push(str);
    }
  };
  dfs(text);
  return result;
};

Component({
  properties: {
    text: {
      type: String,
      observer: '_doChange',
    },
    keyword: {
      type: String,
      observer: '_doChange',
    },
    color: {
      type: String,
      value: 'red',
    },
  },
  data: {
    textArray: [],
  },
  methods: {
    _doChange() {
      const { text, keyword } = this.data;
      let textArray = this.splitTextByKeyword(text, keyword);
      this.setData({
        textArray: textArray,
      });
    },

    splitTextByKeyword(text = '', keyword = '') {
      if (keyword && text) {
        return splitText(text, keyword);
      } else {
        return [text];
      }
    },
  },
});
