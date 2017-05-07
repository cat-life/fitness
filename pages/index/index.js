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
    },
    showToast: false,
    toastData: {
      message: ''
    }
  },
  // 事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../home/index'
    })
  },
  openToast: function(msg) {
    this.setData({
      showToast: true,
      toastData: {
        message: '数据提交成功'
      }
    });
    setTimeout(() => {
      this.setData({
        showToast: false,
        toastData: {
          message: ''
        }
      });
    }, 1000);
  },
  // 打开pop
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
    this.openToast('成功');
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

    // 点击删除符号
    if (value === '<') {
      if (weight !== '') {
        weight = weight.substr(0, weight.length - 1);
      }
    // 点击小数点
    } else if (value === '.') {
      if (weight.indexOf('.') < 0) {
        weight += '.';
      }
    // 点击数字
    } else {
      // 有小数点的情况
      if (weight.indexOf('.') > -1) {
        if (weight.indexOf('.') >= weight.length - 1) {
          weight += value;
        }
      // 无小数点的情况
      } else if (weight - 0 < 100) {
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
