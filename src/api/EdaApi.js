import {
  wxRequest
} from '@/utils/wxRequest';
import wepy from 'wepy';
const api = wepy.$appConfig.baseUrl;
// console.log(process.env.NODE_ENV);
const websocket = wepy.$appConfig.webSocketUrl; // 推送地址
const bannerList = (params) => wxRequest(params, api + '/point/app/marketBanner/queryBannerList'); // 首页banner
const popList = (params) => wxRequest(params, api + '/point/app/marketBanner/queryPopList'); // 弹屏
const getEnterpriseList = (params) => wxRequest(params, api + '/point/app/enterprise/read/list');
const productPage = (params) => wxRequest(params, api + '/point/app/product/read/page');
const getProDetail = (params) => wxRequest(params, api + `/point/app/product/read/detail/${params.id}?posLng=${params.posLng}&posLat=${params.posLat}`);
const collectShow = (params) => wxRequest(params, api + '/point/app/userCollection/update'); // 点击收藏
const collectDelete = (params) => wxRequest(params, api + '/point/app/userCollection/delete/' + params.id); // 取消收藏
const cardRollPage = (params) => wxRequest(params, api + '/point/app/userCoupon/read/page');
const cardRollDetail = (params) => wxRequest(params, api + '/point/app/userCoupon/read/detail/' + params.id); // 卡卷详情
const getUserPoints = (params) => wxRequest(params, api + '/point/app/userPointBalance/detail/' + params.pointCode); // 获取当前用户积分
const getOrders = (params) => wxRequest(params, api + '/point/app/pointOrder/createOrder'); // 创建订单
const getEnterprises = (params) => wxRequest(params, api + '/point/app/userPointBalance/read/list'); // 获取企业
const getEntPointBalance = (params) => wxRequest(params, api + '/point/app/entPointBalance/read/list'); // 获取企业
const getEntErp = (params) => wxRequest(params, api + '/point/app/userPointBalance/queryErpPoints/' + params.entId); // 获取企业erp
const rechargePoint = (params) => wxRequest(params, api + '/point/app/userPointBalance/rechargePoint'); // 导入积分
const myPointsDetail = (params) => wxRequest(params, api + '/point/app/userPointBalance/read/detail/' + params.id); // 积分详情
const queryDeductNum = (params) => wxRequest(params, api + '/point/app/pointOrder/queryDeductNum/' + params.productId); // 积分详情
const countDeductNum = (params) => wxRequest(params, api + '/point/app/pointOrder/queryDeductNum'); // 计算兑换数量
const orderPage = (params) => wxRequest(params, api + '/point/app/pointOrder/read/page');// 订单
const orderDetail = (params) => wxRequest(params, api + '/point/app/pointOrder/read/detail/' + params.id); // 订单详情
const sksxUserInfo = (params) => wxRequest(params, api + '/point/app/wechat/sksxUserInfo');
const queryOrderDeductNum = (params) => wxRequest(params, api + '/point/app/pointOrder/queryOrderDeductNum');
const checkPhone = (params) => wxRequest(params, api + '/point/app/userPointBalance/checkCode'); // 验证手机号
const queryAllPoints = (params) => wxRequest(params, api + '/point/app/userPointBalance/queryAllPoints'); // 积分钱包查询用户所有积分余额
const queryAllErpPoints = (params) => wxRequest(params, api + '/point/app/userPointBalance/queryAllErpPoints'); // 全局查询用户erp积分余额
const queryErpPoints = (params) => wxRequest(params, api + '/point/app/userPointBalance/queryPoints/' + params.pointCode); // 单个查询用户erp积分余额
const queryErpPointsByMobile = (params) => wxRequest(params, api + '/point/app/userPointBalance/queryErpPointsByMobile'); // 积分钱包根据手机号查询企业用户erp积分余额
const checkPoint = (params) => wxRequest(params, api + '/point/app/pointOrder/checkPoint'); // 编辑数量校验积分
const checkRechargePoint = (params) => wxRequest(params, api + '/point/app/userPointBalance/checkRechargePoint/' + params.pointCode); // 积分详情
const marketTemplateList = (params) => wxRequest(params, api + '/point/app/marketTemplate/read/list'); // 模板
export default {
  getEnterpriseList,
  productPage,
  getProDetail,
  bannerList,
  popList,
  collectShow,
  collectDelete,
  cardRollPage,
  getUserPoints,
  getOrders,
  cardRollDetail,
  getEnterprises,
  getEntErp,
  rechargePoint,
  myPointsDetail,
  queryDeductNum,
  countDeductNum,
  orderPage,
  orderDetail,
  getEntPointBalance,
  sksxUserInfo,
  queryOrderDeductNum,
  checkPhone,
  queryAllPoints,
  queryAllErpPoints,
  queryErpPoints,
  queryErpPointsByMobile,
  checkPoint,
  websocket,
  checkRechargePoint,
  marketTemplateList
};
