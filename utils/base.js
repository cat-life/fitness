var Base = {
  dataSet: {
    showDatepicker: false,
    showPush: false
  },
  // 切换时间选择
  switchDatepicker: function (type) {
    this.setData({
      showDatepicker: type === false || type === true ? type : !this.data.showDatepicker
    });
  },
  // 切换主操作区
  switchPush: function (type) {
    this.setData({
      showPush: type === false || type === true ? type : !this.data.showPush
    });
  },
  handleChoosePic: function () {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        wx.previewImage({
          current: tempFilePaths[0], // 当前显示图片的http链接
          urls: tempFilePaths // 需要预览的图片http链接列表
        });
      }
    })
  },
  handleChooseAction: function () {
    wx.showModal({
      title: '提示',
      content: '这个功能 PDD 在开发中哦'
    });
  },
  preventDefault: function () {
    console.log(123);
  },
  onHide: function() {
    this.switchDatepicker(false);
    this.switchPush(false);
  },
  gotoBabyDetail: function() {
    wx.navigateTo({
      url: '../baby-detail/index'
    })
  },
  gotoFans: function() {
    wx.navigateTo({
      url: '../fans/index'
    })
  },
  gotoFace: function() {
    wx.navigateTo({
      url: '../face/index'
    })
  },
  gotoWeightList: function() {
    wx.navigateTo({
      url: '../baby-weight/index'
    })
  },
  gotoHisList: function() {
    wx.navigateTo({
      url: '../baby-his/index'
    })
  }
}

module.exports = Base;
