/**
 * 获取异形屏底部unsafe高度，如iphoneX底部非安全区高度
 */
export const getBottomUnsafeHeight = () => {
  const { safeArea = {}, screenHeight } = wx.getSystemInfoSync();
  const { bottom = screenHeight } = safeArea;
  return screenHeight - bottom;
};
/**
 * 获取页面navigationStyle是否为custom
 */
export const isCustom = () => {
  const { screenHeight, windowHeight } = wx.getSystemInfoSync();
  return screenHeight == windowHeight;
};
