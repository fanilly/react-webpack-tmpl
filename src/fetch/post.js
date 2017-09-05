/**
 * @Author:      allenAugustine
 * @DateTime:    2017-09-05 15:53:01
 * @Description: fetch post
 */
import 'whatwg-fetch';
export default (url, params) => {

  //将参数对象转换为字符串
  let translateParams = (options) => {
    let result = '';
    for (let key in options) result += `&${key}=${options[key]}`;
    if (result) result = result.slice(1);
    return result;
  }

  return fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: translateParams(params)
  })

};
