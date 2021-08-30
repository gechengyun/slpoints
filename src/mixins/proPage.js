import wepy from 'wepy';
import util from '@/utils/util';
import { SYSTEM_INFO } from '@/utils/constant';
export default class proPageMixin extends wepy.mixin {
  data = {
    products: [],
    loading: true,
    page: {
      pageNum: 1,
      pageSize: 8
    },
    totalPages: '',
    finished: false,
    bottom: false
  }
  onLoad() {
    let system = wepy.getStorageSync(SYSTEM_INFO);
    if (system.system.includes('iOS')) {
      this.bottom = true;
    }
  }
  // 处理表格接口数据
  handleResponse(resp) {
    if (resp.data.httpCode === '200') {
      wx.hideNavigationBarLoading();
      let result = resp.data.data;
      result.records.forEach(value => {
        if (value.tranNum) {
          value.tranNum = util.numToFixed(value.tranNum);
        }
        if (value.exInTranNum) {
          value.exInTranNum = util.numToFixed(value.exInTranNum);
        }
        if (value.exOutTranNum) {
          value.exOutTranNum = util.numToFixed(value.exOutTranNum);
        }
        if (value.reInTranNum) {
          value.reInTranNum = util.numToFixed(value.reInTranNum);
        }
        if (value.prizeRecords && value.prizeRecords[0]) {
          value.prizeRecords[0].userName = value.prizeRecords[0].userName.substr(0, 1) + '***';
        }
        this.products.push(value);
      });
      this.totalPages = result.pages * 1;
      this.loading = false;
      // 数据全部加载完成
      if (this.products.length >= result.total) {
        this.finished = true;
      }
      this.$apply();
    }
  }
  methods = {
    // 下拉刷新
    lower() {
      if (this.page.pageNum < this.totalPages) {
        this.page.pageNum++;
        this.proList();
      }
    }
  }
}
