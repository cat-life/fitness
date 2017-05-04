//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    baseData: {
      weight: 126,
      weight_point: '.5',
      unit: '斤',
      bmi: 22.5,
      bmiStatus: '正常',
    },
    tmpData: {
      weight: '126.5'
    },
    showPop: false,
    popData: {
      keyValue: [7, 8, 9, 4, 5 ,6, 1, 2, 3, '.', 0, '<']
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../home/index'
    })
  },
  openPop: function() {
    this.setData({
      showPop: true,
      tmpData: {
        weight: this.data.baseData.weight + this.data.baseData.weight_point
      }
    });
  },
  // 确认
  confirmPop: function() {
    let data = this.data.baseData;
    let { weight } = this.data.tmpData;
    console.log(weight);
    data.weight = weight.split('.')[0];
    data.weight_point = weight.split('.')[1] ? weight.split('.')[1] : '.0';
    this.setData({
      showPop: false,
      baseData: data
    });
  },
  // 取消
  cancelPop: function() {
    this.setData({
      showPop: false
    });
  },
  clickKey: function(event) {
    let { weight } = this.data.tmpData;
    let { value } = event.target.dataset;

    if (value === '<') {
      if (weight !== '') {
        weight = weight.substr(0, weight.length - 1);
      }
    } else if (value === '.') {
      if (weight.indexOf('.') < 0) {
        weight += '.';
      }
    } else {
      if (weight.indexOf('.') > -1) {
        if (weight.indexOf('.') >= weight.length - 1) {
          weight += value;
        }
      } else if(weight - 0 < 100) {
        weight += value;
      }
    }

    this.setData({
      tmpData: {
        weight: weight + ''
      }
    });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
