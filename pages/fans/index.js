//index.js
//获取应用实例
const app = getApp()
var Base = require('../../utils/base.js');

Page(Object.assign({}, Base, {
  data: Object.assign({}, Base.dataSet, {
    fansList: [{
      name: '小红书',
      imgUrl: 'http://tva4.sinaimg.cn/crop.0.0.200.200.50/005EbfWqjw8evad5p5ef3j305k05kaag.jpg',
      followed: true
    }, {
      name: '牛哄哄',
      imgUrl: 'http://tva2.sinaimg.cn/crop.0.0.199.199.50/005Zseqhjw1eplix1brxxj305k05kjrf.jpg', followed: false
    }, {
      name: '吃花狂魔',
      imgUrl: 'http://tva3.sinaimg.cn/crop.0.0.180.180.50/60dc4e5bjw1e8qgp5bmzyj2050050aa8.jpg', followed: false
    }, {
      name: '路人甲',
      imgUrl: 'http://tva1.sinaimg.cn/crop.0.0.180.180.50/62b91d4fjw1e8qgp5bmzyj2050050aa8.jpg', followed: true
    }]
  }),
  onLoad: function () {
  }
}));
