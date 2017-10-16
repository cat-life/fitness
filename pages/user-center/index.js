//index.js
//获取应用实例
const app = getApp()
var Base = require('../../utils/base.js');

Page(Object.assign({}, Base, {
  data: {
    motto: '一起改变养宠方式',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tabList: [{
      icon: '/images/icon/pic.png', name: '图', target: ''
    }, {
      icon: '/images/icon/artical.png', name: '文', target: ''
    }, {
      icon: '/images/icon/save_active.png', name: '收藏', target: ''
    }],
    formList: [{
      icon: '/images/icon/modify_grey.png', name: '修改个人信息', target: ''
    }, {
      icon: '/images/icon/mail.png', name: '消息', target: '../message/index'
    }, {
      icon: '/images/icon/setting.png', name: '设置', target: ''
    }]
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  handleGo: function(event) {
    if (event.target.dataset.target) {
      wx.navigateTo({
        url: event.target.dataset.target
      });
    }
  }
}));