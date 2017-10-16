const Base = require('../../utils/base.js');
const app = getApp();
var fakeList = require('../../data/fake.js');

// pages/push-weight/index.js
Page(Object.assign({}, Base, {
  /**
   * 页面的初始数据
   */
  data: {
    cardList: fakeList.babyList,
    healList: fakeList.healthList,
    pushInfo: {
      activeCard: 0,
      activeSelect: 0,
      activeSelectSub: -1
    }
  },
  handleSelect: function(event) {
    let pushInfo = this.data.pushInfo;
    let dataset = event.target.dataset;
    console.log(dataset);
    if (dataset.type && dataset.type === 'sub') {
      pushInfo.activeSelectSub = dataset.index;
    } else {
      pushInfo.activeSelect = dataset.index;
      pushInfo.activeSelectSub = -1;
    }
    this.setData({
      pushInfo
    });
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
