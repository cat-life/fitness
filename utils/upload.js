/**
 * 最终上传到cos的URL
 * 把以下字段配置成自己的cos相关信息，详情可看API文档 https://www.qcloud.com/document/product/436/6066
 * REGION: cos上传的地区
 * APPID: 账号的appid
 * BUCKET_NAME: cos bucket的名字
 * DIR_NAME: 上传的文件目录
 */

let cosUrl = "http://118.89.230.186:3000/cos/upload";
/**
 * 上传方法
 * filePath: 上传的文件路径
 * fileName： 上传到cos后的文件名
 */
function upload(filePath, channelName = 'normal') {
    wx.uploadFile({
      url: cosUrl,
      filePath: filePath,
      header: {
      },
      name: 'file',
      formData: {
        setPath: channelName,
      },
      success: function (uploadRes) {
        var data = uploadRes.data
        console.log('uploadRes', uploadRes)
      },
      fail: function (e) {
        console.log('e', e)
      }
    })

}

module.exports = upload
/*
wx.downloadFile({
  url: 'http://meowlife-1253837476.cosbj.myqcloud.com/test002.jpg',
  success: function (res) {
    // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
    console.log(res);
    if (res.statusCode === 200) {
      wx.previewImage({
        current: res.tempFilePath, // 当前显示图片的http链接
        urls: [res.tempFilePath] // 需要预览的图片http链接列表
      })
      wx.playVoice({
        filePath: res.tempFilePath
      })
    }
  },
  fail: function (e) {
    console.log('e', e)
  }
})*/