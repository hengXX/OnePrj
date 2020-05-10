// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textarea: "",
    textareapla: "发布你的圈子",
    btntext: "发布",
    source: "pub", //pub:发布  cmt:评论
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.source == "cmt") {
      this.setData({
        source: "cmt",
        btntext: "发表",
        textareapla: "发表你的评论"
      })
      wx.setNavigationBarTitle({
        title: '发表评论'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  textarea: function(e) {
    let key = util.trim(e.detail.value);
    this.setData({
      textarea: key
    })
  },
  publish() {
    console.log(123);
  }
})