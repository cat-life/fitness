//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showDatepicker: false
  },
  //事件处理函数
  switchDatepicker: function() {
    this.setData({
      showDatepicker: !this.data.showDatepicker
    });
  },
  onLoad: function () {
  },
})
