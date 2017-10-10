const wxCharts = require('../../vendor/wxcharts-min.js');
const Base = require('../../utils/base.js');
const app = getApp();

var lineChart = null;
var startPos = null;

Page(Object.assign({}, Base, {
  data: {
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
    for (var i = 0; i < 10; i++) {
      categories.push('10-' + (i + 1));
      data.push(Math.random()*(20-10)+10);
    }
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
  }
}));
