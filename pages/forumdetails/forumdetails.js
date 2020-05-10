// pages/forumdetails/forumdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cmtList: [{
      avatar: "list_2.jpg",
      nickname: "米兰的卡先生",
      fabulous: 123,
      isFabulous: false,
      content: "我一直没懂赛前问一个主教练如何评价对手的主教练， 记者究竟是想得到什么答案？",
      time: "昨天 22:12"
    }, {
      avatar: "avatar_1.jpg",
      nickname: "月牙",
      fabulous: 2,
      content: "力帆有杨帅，迪力木来提，尹聪耀，完全可以应付。尤其是杨帅坐稳主力后卫。",
      time: "昨天 21:09"
    }, {
      avatar: "avatar_2.jpg",
      nickname: "thorui",
      fabulous: 0,
      content: "小克鲁伊夫带的球队征服了中超球迷，李铁也带队冲超成功，现在风头正劲，究竟鹿死谁手，谁更胜一筹，期待精彩的比赛 ☻ ☻ ☻",
      time: "昨天 17:30"
    }],
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
  btnCmt(){
    //把圈子ID带过去
    wx.navigateTo({
      url: "/pages/publish/publish?source=cmt"
    })
  }
})