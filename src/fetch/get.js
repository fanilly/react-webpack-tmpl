/**
 * @Author:      allenAugustine
 * @DateTime:    2017-09-05 15:29:44
 * @Description: fetch get
 */
import 'whatwg-fetch';
export default (url) => {
  return fetch(url, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*'
    }
  });
};
