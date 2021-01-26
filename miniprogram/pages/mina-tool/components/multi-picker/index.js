const getRangeData = (arr) => {
  const LEN = 3;
  return [...arr].map((v, i) => {
    if (i == 0) {
      return [...Array(LEN)].map((v, i) => i + 1);
    } else {
      const pre = arr
        .slice(0, i)
        .map((v) => v + 1)
        .join('');
      return [...Array(LEN + i)].map((v, i) => pre + (i + 1));
    }
  });
};

Page({
  data: {
    multiArray: getRangeData([0, 0, 0]),
    value: [0, 0, 0],
    multiPickerArray: getRangeData([0, 0, 0]),
    multiValue: [0, 0, 0],
    getRanges: () => [],
  },
  onLoad() {
    this.setData({
      getRanges: getRangeData,
    });
  },
  onFilterChange(e) {
    this.setData({
      multiValue: e.detail.value,
      multiPickerArray: getRangeData(e.detail.value),
    });
  },
  bindMultiPickerChange(e) {
    this.setData({
      value: e.detail.value,
    });
  },
  bindMultiPickerColumnChange(e) {
    const { column, value } = e.detail;
    var newValue = [...this.data.value];
    newValue[column] = value;
    const multiArray = getRangeData(newValue);
    this.setData({
      multiArray,
      value: newValue,
    });
  },
});
