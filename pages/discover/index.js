//index.js
//获取应用实例
const app = getApp()
var Base = require('../../utils/base.js');

Page(Object.assign({}, Base, {
  data: Object.assign({}, Base.dataSet, {
    pullList: [{
      name: '测试',
      data: [1,2,3,4,5,6,7]
    }]
  }),
  onLoad: function () {
  }
}));
