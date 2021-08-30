import {
  wxRequest
} from '@/utils/wxRequest';

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
// const getDiscoverList = (params) => wxRequest(params, apiMall + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');
// 获取  authToken
const authCode2Session = (params) => wxRequest(params, params.baseUrl + '/point/app/wechat/authCode2Session/' + params.code);
export default {
  authCode2Session
};
