var uploadFn = require('./upload.js');

var Base = {
  dataSet: {
    showDatepicker: false,
    showPush: false,
    showLoading: false,
    previewImgList: []
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
  // loading
  switchLoading: function(type) {
    this.setData({
      showLoading: type === false || type === true ? type : !this.data.showDatepicker
    });
  },
  handlePreview: function(event) {

    console.log(event);
  },

  handleChoosePic: function () {
    let self = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        self.setData({
          previewImgList: tempFilePaths
        });
        uploadFn(tempFilePaths[0], 'activity');

        return;
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
    this.switchLoading(false);
  },
  gotoNext: function(event, url) {
    if (event && event.target.dataset.redirect) {
      wx.redirectTo({
        url
      });
    } else {
      wx.navigateTo({
        url
      })
    }
  },
  gotoDetail: function(event) {
    this.gotoNext(event, '../detail/index');
  },
  gotoBabyDetail: function(event) {
    this.gotoNext(event, '../baby-detail/index');
  },
  gotoFans: function(event) {
    this.gotoNext(event, '../fans/index');
  },
  gotoFace: function(event) {
    this.gotoNext(event, '../face/index');
  },
  gotoWeightPush: function(event) {
    this.gotoNext(event, '../push-weight/index');
  },
  gotoWeightList: function(event) {
    this.gotoNext(event, '../baby-weight/index');
  },
  gotoPillPush: function(event) {
    this.gotoNext(event, '../push-pill/index');
  },
  gotoHisList: function(event) {
    this.gotoNext(event, '../baby-his/index');
  }
}

module.exports = Base;
