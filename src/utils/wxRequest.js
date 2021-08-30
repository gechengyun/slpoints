import wepy from 'wepy';
import tip from './tip';

const wxRequest = async(params = {}, url) => {
  if (!params.socket) {
    tip.loading();
  }
  const UUID = wx.getStorageSync('UUID');
  let data = params.query || {};
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: { 'Content-Type': 'application/json', 'UUID': UUID }
  });
  if (!params.socket) {
    tip.loaded();
  }
  return res;
};
module.exports = {
  wxRequest
};
