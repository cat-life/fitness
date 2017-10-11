const Base = require('../../utils/base.js');
const app = getApp();


// pages/push-weight/index.js
Page(Object.assign({}, Base, {
  /**
   * 页面的初始数据
   */
  data: {
    currentWeight: '10',
    weightUnit: '斤',
    changeWeight: (10).toFixed(1),
    loaded: false,
    scrollLeft: 100
  },

  onScroll: function(event) {
    if (this.data.loaded) {
      this.setData({
        changeWeight: (event.detail.scrollLeft / event.detail.scrollWidth / 0.75 * 100).toFixed(1)
      });
    } else {
      this.setData({
        scrollLeft: (this.data.changeWeight - 0) / 100 * 0.75 * event.detail.scrollWidth,
        loaded: true
      });
    }  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
}));
