//index.js
//获取应用实例
const app = getApp()
var Base = require('../../utils/base.js');
var fakeList = require('../../data/fake.js');
var heightInfo = {
  left: 0,
  right: 0,
  count: 15,
  leftList: [],
  rightList: []
};
var loading_discover = false;
var loading_follow = false;
var loading_topic = false;

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
    followList: fakeList.discover,
    discoverOrigin: fakeList.discover,
    discoverList: {
      leftList: [],//fakeList.discover,//[],
      rightList: [],//fakeList.discover,//[]
    },
    topicList: fakeList.topicList
  }),
  onLoad: function () {
  },
  handleScroll: function (event) {
    if (event.target.dataset.type === 'discover') {
      if (!loading_discover) {
        loading_discover = true;
        this.switchLoading(true);
        // 模拟异步数据
        setTimeout(function() {
          this.setData({
            discoverOrigin: this.data.discoverOrigin.concat(fakeList.discover)
          });
          heightInfo.count = fakeList.discover.length;
          // loading_discover = false;
          // this.switchLoading(false);
        }.bind(this), 1000);
      }
    } else if (event.target.dataset.type === 'follow') {
      if (!loading_follow) {
        loading_follow = true;
        this.switchLoading(true);
        // 模拟异步数据
        setTimeout(function () {
          this.setData({
            followList: this.data.followList.concat(fakeList.discover)
          });
          loading_follow = false;
          this.switchLoading(false);
        }.bind(this), 1000);
      }
    } else if (event.target.dataset.type === 'topic') {
      if (!loading_topic) {
        loading_topic = true;
        this.switchLoading(true);
        // 模拟异步数据
        setTimeout(function () {
          this.setData({
            topicList: this.data.topicList.concat(fakeList.topicList)
          });
          loading_topic = false;
          this.switchLoading(false);
        }.bind(this), 1000);
      }
    }
  },
  handleTabSwitch: function(event) {
    this.setData({
      activeTab: event.target.dataset.key
    });
  },
  onImageLoad: function(event) {
    heightInfo.count --;
    if (heightInfo.left <= heightInfo.right) {
      heightInfo.left += event.detail.height / event.detail.width;
      heightInfo.leftList.push(this.data.discoverOrigin[event.target.dataset.index]);
    } else {
      heightInfo.right += event.detail.height / event.detail.width;
      heightInfo.rightList.push(this.data.discoverOrigin[event.target.dataset.index]);
    }
    if (heightInfo.count === 0) {
      this.setData({
        discoverList: {
          leftList: heightInfo.leftList,
          rightList: heightInfo.rightList
        }
      });
      this.switchLoading(false);
      loading_discover = false;
    }
  }
}));
