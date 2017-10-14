//index.js
//获取应用实例
const app = getApp()
var Base = require('../../utils/base.js');
var fakeList = require('./fake.js');

Page(Object.assign({}, Base, {
  data: Object.assign({}, Base.dataSet, {
    activeTab: 'discover',
    tabInfo: [{
      name: '关注', key: 'follow'
    }, {
      name: '精选', key: 'discover'
    }, {
      name: '专题', key: 'topic'
    }],
    discoverList: [{
      name: '测试',
      data: fakeList.discover
    }]
  }),
  onLoad: function () {
  },
  handleTabSwitch: function(event) {
    this.setData({
      activeTab: event.target.dataset.key
    });
  }
}));
