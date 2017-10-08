//index.js
//获取应用实例
const app = getApp()
var Base = require('../../utils/base.js');

Page(Object.assign({}, Base, {
  data: Object.assign({}, Base.dataSet, {
    faceList: [{
      imgUrl: 'http://wx2.sinaimg.cn/mw690/4db97814ly1fjw7d0w6xcj20u0140jxp.jpg',
      info: {
        name: '牛牛',
        sex: 'girl',
        age: '11个月',
        weight: '7斤'
      }
    }, {
        imgUrl: 'http://wx3.sinaimg.cn/mw690/005BKX9Jly1fk9xhfhfm4j30hs0hswmf.jpg',
        info: {
          name: '耳鼻',
          sex: 'boy',
          age: '2岁',
          weight: '15斤'
        }
    }, {
        imgUrl: 'http://wx2.sinaimg.cn/mw690/db8c9eb2ly1fkajbnwd6nj20qo0zkgsk.jpg',
        info: {
          name: '臭臭',
          sex: 'boy',
          age: '3岁半',
          weight: '10斤'
        }
    }]
  }),
  onLoad: function () {
  }
}));
