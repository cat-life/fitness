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
      icon: '/images/icon/weight_active.png',
      type: 'weight'
    }, {
      name: '健康记',
      icon: '/images/icon/love_active.png',
      type: 'his'
    }],
    pullList: [{
      name: '测试',
      data: [{
        date: '2017-10-10',
        title: "原来你是这样吸猫",
        imgUrl: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507348391677&di=bb588023c472fe8ba705bb0c1f535487&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2713250128%2C755188012%26fm%3D214%26gp%3D0.jpg'],
        type: 'img'
      }, {
        date: '2017-10-09',
        title: '自从养了你，我的世界都亮了',
        type: 'word'
      }, {
        date: '2017-10-08',
        title: '设想，仰望天空', type: 'word'
      }, {
        type: 'sp-day',
        date: '2017-10-08',
        title: '宝贝生日纪念'
      }, {
        date: '2017-10-07',
        title: '思考',
        imgUrl: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507348391677&di=bb588023c472fe8ba705bb0c1f535487&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2713250128%2C755188012%26fm%3D214%26gp%3D0.jpg', 'http://ww2.sinaimg.cn/mw690/49741fd4gw1f7jthj9v5wj20m80goq6a.jpg'], type: 'img'
      }, {
        date: '2017-10-06',
        imgUrl: ['http://ww2.sinaimg.cn/mw690/49741fd4gw1f7jthj9v5wj20m80goq6a.jpg', 'http://ww2.sinaimg.cn/mw690/49741fd4gw1f7jthj9v5wj20m80goq6a.jpg', 'http://ww2.sinaimg.cn/mw690/49741fd4gw1f7jthj9v5wj20m80goq6a.jpg'],
        type: 'img'
      }, {
        date: '2010-10-05',
        imgUrl: ['http://ww2.sinaimg.cn/mw690/49741fd4gw1f7jthj9v5wj20m80goq6a.jpg'],
        type: 'img'
      }]
    }]
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
