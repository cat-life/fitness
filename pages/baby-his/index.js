const Base = require('../../utils/base.js');
const app = getApp();
var fakeList = require('../../data/fake.js');


function getCountDays(curDate) {
  if (!curDate) {
    curDate = new Date();
  } else {
    curDate = new Date(curDate);
  }
  var curMonth = curDate.getMonth();
  curDate.setMonth(curMonth + 1);
  curDate.setDate(0);
  return curDate.getDate();
}
function getFirstDay(curDate) {
  if (!curDate) {
    curDate = new Date();
  } else {
    curDate = new Date(curDate);
  }
  curDate.setDate(1);
  return curDate;
}
function formatFix(num) {
  if (num < 10) {
    num = '0' + num
  }
  return num;
}
function formatDay(date, num) {
  date = new Date(date);
  let str = date.getFullYear() + '-' + formatFix(date.getMonth() + 1);
  if (num === 3) {
    str += '-' + formatFix(date.getDate());
  }
  return str;
}

Page(Object.assign({}, Base, {
  data: {
    activeDate: new Date(),
    activeDateShow: formatDay(new Date()),
    day_list_title: ['日', '一', '二', '三', '四', '五', '六'],
    day_list_front: [],
    day_list_current: [],
    day_list_back: [],
    activeList: {
      '2017-10-01': {
        type: [9]
      },
      '2017-10-10': {
        type: [4]
      },
      '2017-11-20': {
        type: [17]
      }
    },
    showPill: false,
    infoList: fakeList.healHistory
  },
  switchPillShow: function() {
    this.setData({
      showPill: !this.data.showPill
    });
  },
  handleShowPill: function (event) {
    this.setData({
      showPill: true
    });
  },
  changeMonth: function (event) {
    let date = new Date(this.data.activeDate);
    date.setMonth(date.getMonth() + (event.target.dataset.set - 0));
    this.createPicker(date);
  },
  createList: function ({ type, count, startDate }) {
    var list = [];
    var day = startDate.getDate();
    while (count > 0) {
      var tmpDate = new Date(startDate);
      tmpDate.setDate(day);
      list.push({
        type,
        date: formatDay(tmpDate, 3),
        num: day
      });
      count--; day++;
    }
    return list;
  },
  createPicker: function (activeDate) {
    var firstDay_current = getFirstDay(activeDate);
    var firstDay_front = new Date(firstDay_current);
    var firstDay_back = new Date(firstDay_current);

    var currentDays = getCountDays(activeDate);
    var frontDays = firstDay_current.getDay();
    var backDays = 0;
    if ((frontDays + currentDays) % 7 != 0) {
      backDays = 7 - (frontDays + currentDays) % 7;
    }

    firstDay_front.setDate(1 - frontDays);
    firstDay_back.setDate(1 + currentDays);

    this.setData({
      day_list_front: this.createList({
        type: -1, count: frontDays, startDate: firstDay_front
      }),
      day_list_current: this.createList({
        type: 0, count: currentDays, startDate: firstDay_current
      }),
      day_list_back: this.createList({
        type: 1, count: backDays, startDate: firstDay_back
      }),
      activeDate: activeDate,
      activeDateShow: formatDay(activeDate)
    });
  },
  onLoad: function () {
    this.createPicker(this.data.activeDate);
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '我爱洗澡皮肤好好',
      path: '/pages/baby-his/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
}));
