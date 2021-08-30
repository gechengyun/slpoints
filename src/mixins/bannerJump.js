import wepy from 'wepy';
import api from '@/api/EdaApi';
export default class bannerJumpMixin extends wepy.mixin {
  data = {
    // 跳转类型
    redirectType: [
      '/pages/Home/index', // 首页
      '/pages/Mall/index', // 积分商城
      '/pages/ProDetail/index?id=', // 商品详情
      '/package_saleProDetail/pages/Detail/index?id=', // 特惠商品详情页
      '/pages/Mall/proList', // 商品二级分类
      '/pages/PointsTreasure/index', // 夺宝列表
      '/pages/PointsTreasure/detail', // 夺宝详情
      '/pages/Exchange/index', // 积分互换首页
      '/pages/Exchange/apply', // 发起交换页
      '/pages/Me/helpCenter', // 帮助中心
      '/pages/Me/index', // 我的
      '/pages/PointsWallet/index', // 积分钱包
      '/pages/PointsWallet/selectEnt', // 积分导入企业选择页
      this.url
    ],
    // 0：首页，
    // 1：积分商城，
    // 2：商品详情页，
    // 3：特惠商品详情页，
    // 4：商品二级分类，
    // 5：夺宝列表
    // 6：夺宝详情
    // 7：积分互换首页
    // 8: 发起交换页
    // 9: 帮助中心
    // 10: 我的
    // 11: 积分钱包
    // 12: 积分导入企业选择页
    // 13:  外部页面
    banner: []
  }
   // banner列表
  async getBanner(location) {
    this.bannerList = [];
    let query = {
      bannerType: '2',
      enable: 1,
      location,
      page: {
        pageNum: '1',
        pageSize: '5'
      }
    };
    let res = await api.bannerList({ method: 'POST', query: query });
    if (res.data.httpCode === '200') {
      if (location === 0) {
        this.bannerList = res.data.data;
        this.$apply();
        this.handleResponseBanner();
      } else {
        this.banner = res.data.data;
        this.$apply();
      }
      wx.stopPullDownRefresh();
    }
  }
  bannerCallback(item) {
    if (item.redirectType === '2') { // 商品详情
      wx.navigateTo({
        url: '/pages/ProDetail/index?id=' + item.redirectNo
      });
    } else if (item.redirectType === '3') { // 特惠商品详情页
      wx.navigateTo({
        url: '/package_saleProDetail/pages/Detail/index?id=' + item.redirectNo
      });
    } else if (item.redirectType === '4') { // 商品二级分类
      wx.navigateTo({
        url: '/pages/Mall/proList?bizClass=' + item.redirectNo
      });
    } else if (item.redirectType === '6') { // 夺宝详情
      wx.navigateTo({
        url: '/pages/PointsTreasure/detail?id=' + item.redirectNo
      });
    } else if (item.redirectType === '13') { // 外部跳转
      wx.navigateTo({
        url: '/pages/WebView/index?url=' + item.redirectNo
      });
    } else if (item.redirectType === '0' || item.redirectType === '1' || item.redirectType === '7' || item.redirectType === '10') { // 夺宝详情
      wx.switchTab({
        url: this.redirectType[item.redirectType] + item.redirectNo
      });
    } else {
      wx.navigateTo({
        url: this.redirectType[item.redirectType]
      });
    }
  }
  methods = {
    // banner跳转
    bannerCallback(item) {
      if (item.redirectType === '2') { // 商品详情
        wx.navigateTo({
          url: '/pages/ProDetail/index?id=' + item.redirectNo
        });
      } else if (item.redirectType === '3') { // 特惠商品详情页
        wx.navigateTo({
          url: '/package_saleProDetail/pages/Detail/index?id=' + item.redirectNo
        });
      } else if (item.redirectType === '4') { // 商品二级分类
        wx.navigateTo({
          url: '/pages/Mall/proList?bizClass=' + item.redirectNo
        });
      } else if (item.redirectType === '6') { // 夺宝详情
        wx.navigateTo({
          url: '/pages/PointsTreasure/detail?id=' + item.redirectNo
        });
      } else if (item.redirectType === '13') { // 外部跳转
        wx.navigateTo({
          url: '/pages/WebView/index?url=' + item.redirectNo
        });
      } else if (item.redirectType === '0' || item.redirectType === '1' || item.redirectType === '7' || item.redirectType === '10') { // 夺宝详情
        wx.switchTab({
          url: this.redirectType[item.redirectType] + item.redirectNo
        });
      } else {
        wx.navigateTo({
          url: this.redirectType[item.redirectType]
        });
      }
    }
  }
}
