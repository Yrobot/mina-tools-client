/**
 * Service 层
 */
import request from '../utils/request';

/**
 * 利用百度获取搜索关键词
 */
export const getSearchSuggestion = (key = '') => {
  return request(`https://www.baidu.com/sugrec?prod=pc&wd=${key}`, {
    method: 'GET',
  })
    .then((res) => {
      return ((res && res.g) || []).map((v) => v.q);
    })
    .then((res) => {
      console.log(res)
      return res
    });
};
