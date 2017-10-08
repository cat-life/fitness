//index.js
//获取应用实例
const app = getApp()
var Base = require('../../utils/base.js');

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
      icon: '/images/icon/weight.png'
    }, {
      name: '洗澡记',
      icon: '/images/icon/pill.png'
    }, {
      name: '吃药记',
      icon: '/images/icon/bath.png'
    }]
  }),
  onLoad: function () {
  }
}));
