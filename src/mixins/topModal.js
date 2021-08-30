import wepy from 'wepy';

export default class topModalMixin extends wepy.mixin {
  data = {
    animationData: '',
    hidden: true
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
  }
  methods = {
    closeModal() {
      this.animation.height(0).step();
      this.setData({
        animationData: this.animation.export()
      });
      setTimeout(() => {
        this.hidden = true;
        this.$apply();
      }, 100);
    }
  };
  openModalSon(height) {
    this.animation.height(height + 'rpx').step();
    this.hidden = false;
    this.setData({
      animationData: this.animation.export()
    });
  };
  closeModalSon() {
    this.animation.height(0).step();
    this.setData({
      animationData: this.animation.export()
    });
    setTimeout(() => {
      this.hidden = true;
      this.$apply();
    }, 100);
  }
}
