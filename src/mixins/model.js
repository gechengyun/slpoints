import wepy from 'wepy';

export default class modelMixin extends wepy.mixin {
  data = {
    animationData: '',
    hidden: true,
    animationDataStore: '',
    hiddenStore: true
  }
  createAnimation() {
    // 创建动画
    let animation = wx.createAnimation({
      transformOrigin: '50% 50%',
      duration: 200,
      timingFunction: 'linear',
      delay: 0
    });
    this.animation = animation;
    this.animationStore = animation;
  }
  openModel(height) {
    this.animation.height(height + 'rpx').step();
    this.hidden = false;
    this.setData({
      animationData: this.animation.export()
    });
  }
  // 商品详情门店
  openModelStore(height) {
    this.animationStore.height(height + 'rpx').step();
    this.hiddenStore = false;
    this.setData({
      animationDataStore: this.animationStore.export()
    });
  }
  methods = {
    openModel(height) {
      this.animation.height(height + 'rpx').step();
      this.hidden = false;
      this.setData({
        animationData: this.animation.export()
      });
    },
    closeModel() {
      this.animation.height(0).step();
      this.setData({
        animationData: this.animation.export()
      });
      setTimeout(() => {
        this.hidden = true;
        this.$apply();
      }, 100);
    },
    // 商品详情门店
    closeModelStore() {
      this.animationStore.height(0).step();
      this.setData({
        animationDataStore: this.animationStore.export()
      });
      setTimeout(() => {
        this.hiddenStore = true;
        this.$apply();
      }, 100);
    }
  }
}
