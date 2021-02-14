/**
 * Service 层
 */
import request from '../utils/request';

/**
 * 利用百度获取搜索关键词
 */
export const getSearchSuggestion = (key = '') => {
  return request(`http://suggestion.baidu.com/su?wd=${key}`, {
    method: 'GET',
  })
    .then((res) => {
      console.log(res);
      return res ? res.slice(res.indexOf('['), res.lastIndexOf(']') + 1) : null;
    })
    .then((res) => JSON.parse(res));
};
