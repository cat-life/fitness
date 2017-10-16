//index.js
//获取应用实例
const app = getApp()
var Base = require('../../utils/base.js');
var fakeList = require('../../data/fake.js');

Page(Object.assign({}, Base, {
  data: Object.assign({}, Base.dataSet, {
    messageList: fakeList.messageList
  }),
  onLoad: function () {
  }
}));
