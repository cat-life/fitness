const wxCharts = require('../../vendor/wxcharts-min.js');
const Base = require('../../utils/base.js');
const app = getApp();

var lineChart = null;
var startPos = null;

Page(Object.assign({}, Base, {
  data: {
    dateList: [{
      date: '10月10日', dateRange: '9个月15天', data: 12.0, imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507649846847&di=1a4ba4cc0deadd39857a7a3660cccb5f&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F32fa828ba61ea8d3f99ae4c49e0a304e241f58b1.jpg'
    }, {
      date: '10月01日', dateRange: '9个月6天', data: 11.5
    }, {
      date: '09月14日', dateRange: '8个月18天', data: 10.8
    }, {
        date: '09月10日', dateRange: '8个月15天', data: 10.0, imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507649846847&di=1a4ba4cc0deadd39857a7a3660cccb5f&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F32fa828ba61ea8d3f99ae4c49e0a304e241f58b1.jpg'
    }, {
      date: '08月10日', dateRange: '7个月15天', data: 9.3
    }, {
      date: '07月20日', dateRange: '6个月25天', data: 8.0
    }, {
      date: '05月10日', dateRange: '4个月5天', data: 6.7
    }, {
      date: '04月15日', dateRange: '3个月10天', data: 5.6
    }, {
      date: '04月01日', dateRange: '2个月25天', data: 5.0
    }, {
      date: '03月24日', dateRange: '2个月01天', data: '4.0'
    }]
  },
  touchHandler: function (e) {
    lineChart.scrollStart(e);
  },
  moveHandler: function (e) {
    lineChart.scroll(e);
  },
  touchEndHandler: function (e) {
    lineChart.scrollEnd(e);
    lineChart.showToolTip(e, {
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data 
      }
    });        
  },
  createSimulationData: function () {
    var categories = [];
    var data = [];
    this.data.dateList.forEach(function(item) {
      categories.unshift(item.date);
      data.unshift(item.data);
    })
    return {
      categories: categories,
      data: data
    }
  },
  onLoad: function (e) {
    var windowWidth = 320;
    var windowHeight = 200;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
      windowHeight = res.windowHeight * 0.4;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    
    var simulationData = this.createSimulationData();
    lineChart = new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: simulationData.categories,
      animation: false,
      series: [{
        name: '体重',
        data: simulationData.data,
        format: function (val, name) {
          return val.toFixed(2) + '斤';
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '体重 (斤)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0,
        disableGrid: true,
        gridColor: '#ffffff'
      },
      width: windowWidth,
      height: windowHeight,
      dataLabel: false,
      dataPointShape: true,
      enableScroll: true,
      extra: {
        lineStyle: 'curve'
      }
    });
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '每天称一称，宝贝不超重',
      path: '/pages/baby-weight/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
}));
