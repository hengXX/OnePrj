// pages/my/my、.js
let globalData = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: 'echo.', //昵称
    avatarUrl: '',
    phonecall: '授权手机号码',
    isLogin: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
    let isLogin = globalData.isLogin;
    if (isLogin) {
      this.setData({
        isLogin: isLogin,
        nickName: globalData.userInfo.nickName,
        avatarUrl: globalData.userinfo.avatarUrl,
      });
    }
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
  message() {
    wx.navigateTo({
      url: "../message/message"
    })
  },
  forum() {
    wx.navigateTo({
      url: "../myforum/myforum"
    })
  },
  business() {
    wx.navigateTo({
      url: "../business/business"
    })
  },
  authorizePhoneCall() {
    wx.login({
      success: function(res) {
        console.log(res)
      }
    });
  }
})