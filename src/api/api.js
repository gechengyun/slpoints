
import wepy from 'wepy';
import {
  wxRequest
} from '@/utils/wxRequest';

const apiMall = wepy.$appConfig.baseUrl + '/point';
/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
// const getDiscoverList = (params) => wxRequest(params, apiMall + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');

const getDiscoverList = (params) => wxRequest(params, apiMall + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');
const wechatAddPhone = (params) => wxRequest(params, apiMall + '/app/wechat/addPhone');
// 发送短信
const sendRandCode = (params) => wxRequest(params, apiMall + '/app/msg/send');
// 获取  authToken
const getAuthToken = (params) => wxRequest(params, apiMall + '/app/wechat/authCode2Session/' + params.code);
// 获取  authToken
const authCode2Session = (params) => wxRequest(params, params.baseUrl + '/point/app/wechat/authCode2Session/' + params.code);
// 微信授权，用户点击允许，绑定用户信息
const getUserInfo = (params) => wxRequest(params, apiMall + '/app/wechat/bindUserInfo');
// 手机号登录（非微信）
const addOtherPhone = (params) => wxRequest(params, apiMall + '/app/wechat/addOtherPhone');
// 修改手机号
const updatePhone = (params) => wxRequest(params, apiMall + '/app/wechat/updatePhone');
// 我的收藏列表
const getCollectionList = (params) => wxRequest(params, apiMall + '/app/userCollection/read/page');
// 取消收藏
const cancelCollection = (params) => wxRequest(params, apiMall + '/app/userCollection/update');
// 我的积分 积分列表
const getUserPointBalanceList = (params) => wxRequest(params, apiMall + '/app/userPointBalance/read/list');
// 待关联企业
const getEnterprisesList = (params) => wxRequest(params, apiMall + '/app/userPointBalance/queryEntAndUserStatus');
// 立即关联
const updateUserErpPoint = (params) => wxRequest(params, apiMall + '/app/userPointBalance/updateUserErpPoint/entId');
// 积分明细中的积分类型   交换换入积分
const getPointTypeList = (params) => wxRequest(params, apiMall + '/app/entPointBalance/read/list');
// 积分明细积分列表
const getPointList = (params) => wxRequest(params, apiMall + '/app/userPointRecord/read/page');
// 待交换挂单记录
const getWaitExchangeList = (params) => wxRequest(params, apiMall + '/app/pointExchange/read/running');
// 我的交换
const getMyExchangeList = (params) => wxRequest(params, apiMall + '/app/pointExchange/read/page');
// 交换换出积分
const getPointOutList = (params) => wxRequest(params, apiMall + '/app/userPointBalance/read/list');
// 积分交换 换出积分
const getPointOutDetail = (params) => wxRequest(params, apiMall + '/app/pointExchange/outbalance/' + params.pointCode);
// 积分交换 换入积分
const getPointInDetail = (params) => wxRequest(params, apiMall + '/app/pointExchange/inbalance');
// 一键交换，查询用户所有可换入积分数量
const getOneInBalance = (params) => wxRequest(params, apiMall + '/app/pointExchange/onekeyInbalance/' + params.inPointCode);
// 一键交换，查询用户选择的可换入积分数量
const getOnekeyInbalance = (params) => wxRequest(params, apiMall + '/app/pointExchange/onekeyInbalance/');
// 一键交换
const handleOneExchange = (params) => wxRequest(params, apiMall + '/app/pointExchange/pointExchangeOnekey/');
// 创建积分挂单
const createPointExchange = (params) => wxRequest(params, apiMall + '/app/pointExchange/createExchange');
// 积分夺宝 列表
const getTreasurePeriodList = (params) => wxRequest(params, apiMall + '/app/activityTreasurePeriodPrize/page');
// 详情
const getTreasurePeriodDatil = (params) => wxRequest(params, apiMall + '/app/activityTreasurePeriodPrize/detail/' + params.prizeId);
// 本期参与
const getPartakeList = (params) => wxRequest(params, apiMall + '/app/activityTreasurePeriodPrize/queryCurrentPeriodPartInRecord');
// 往期夺宝
const getHasPartakeList = (params) => wxRequest(params, apiMall + '/app/activityTreasurePeriodPrize/queryPeriodPage');
// 选择使用积分的企业
const getUserEntPointList = (params) => wxRequest(params, apiMall + '/app/activityTreasurePeriodPrize/queryPointList/' + params.prizeId);
// 积分夺宝 我的夺宝
const getMyPeriodList = (params) => wxRequest(params, apiMall + '/app/activityTreasurePeriodPrize/queryMyTreasure');
// 开奖记录
const getLotteryRecordList = (params) => wxRequest(params, apiMall + '/app/activityTreasureLotteryPrize/page');
// 选择使用积分  用户积分余额
const getUserBalancePointDetail = (params) => wxRequest(params, apiMall + '/app/userPointBalance/detail/' + params.pointCode);
// 确认兑换
const partInTreasure = (params) => wxRequest(params, apiMall + '/app/activityTreasurePeriodPrize/partInTreasure');
// 夺宝参与详情
const partInTreasureDetail = (params) => wxRequest(params, apiMall + '/app/activityTreasurePeriodPrize/queryPartInTreasureDetail/' + params.recordId);
// 取消挂单
const cancelExchange = (params) => wxRequest(params, apiMall + '/app/pointExchange/cancelExchange/' + params.id);
// 挂单
const replyExchange = (params) => wxRequest(params, apiMall + '/app/pointExchange/replyExchange');
// 当前用户积分列表
const queryDeductNum = (params) => wxRequest(params, apiMall + '/app/treasureOrder/queryDeductNum'); // 积分列表
const queryOrderDeductNum = (params) => wxRequest(params, apiMall + '/app/treasureOrder/queryOrderDeductNum');
const getOrders = (params) => wxRequest(params, apiMall + '/app/treasureOrder/createOrder'); // 夺宝创建订单
const checkTreasure = (params) => wxRequest(params, apiMall + '/app/treasureOrder/checkCount'); // 购买夺宝验证
export default {
  getDiscoverList,
  wechatAddPhone,
  sendRandCode,
  getAuthToken,
  getUserInfo,
  addOtherPhone,
  getCollectionList,
  cancelCollection,
  getUserPointBalanceList,
  getEnterprisesList,
  updateUserErpPoint,
  getPointTypeList,
  getPointList,
  getWaitExchangeList,
  getMyExchangeList,
  getPointOutList,
  getPointInDetail,
  getOneInBalance,
  getOnekeyInbalance,
  handleOneExchange,
  createPointExchange,
  getPointOutDetail,
  getTreasurePeriodList,
  getTreasurePeriodDatil,
  getPartakeList,
  getHasPartakeList,
  getUserEntPointList,
  getMyPeriodList,
  getLotteryRecordList,
  getUserBalancePointDetail,
  partInTreasure,
  partInTreasureDetail,
  authCode2Session,
  cancelExchange,
  replyExchange,
  updatePhone,
  queryDeductNum,
  queryOrderDeductNum,
  getOrders,
  checkTreasure
};
