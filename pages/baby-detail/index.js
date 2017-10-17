//index.js
//获取应用实例
const app = getApp()
var Base = require('../../utils/base.js');
var fakeList = require('../../data/fake.js');

Page(Object.assign({}, Base, {
  data: Object.assign({}, Base.dataSet, {
    faceItem: {
      imgUrl: 'http://wx2.sinaimg.cn/mw690/4db97814ly1fjw7d0w6xcj20u0140jxp.jpg',
      info: {
        name: '牛牛',
        sex: 'girl',
        age: '11个月',
        weight: '7斤'
      }
    },
    infos: [{
      name: '体重记',
      icon: '/images/icon/weight_active.png',
      type: 'weight'
    }, {
      name: '健康记',
      icon: '/images/icon/love_active.png',
      type: 'his'
    }],
    pullList: fakeList.historyList
  }),
  onLoad: function () {
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '一起来看我养的牛牛啊',
      path: '/pages/baby-detail/index',
      imageUrl: 'http://wx2.sinaimg.cn/mw690/4db97814ly1fjw7d0w6xcj20u0140jxp.jpg',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  handleGoList: function(event) {
    if (event.target.dataset.type === 'weight') {
      this.gotoWeightList();
    } else {
      this.gotoHisList();
    }
  },
  previewImg: function(event) {
    console.log(event);
  }
}));
