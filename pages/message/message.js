// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgList: [{
        msgid: 1,
        msgTitle: "系统消息",
        msgContent: "是的是的是的，就是的1",
        msgDate: "2020-05-10 10:30",
        msgState: 1,
        msgType: 1,
        forumid: 0,
      },
      {
        msgid: 2,
        msgTitle: "圈子内容评论",
        msgContent: "是的是的是的，就是的2",
        msgDate: "2020-05-10 10:30",
        msgState: 0,
        msgType: 0,
        forumid: 0,
      },
      {
        msgid: 3,
        msgTitle: "系统消息",
        msgContent: "是的是的是的，就是的3",
        msgDate: "2020-05-10 10:30",
        msgState: 1,
        msgType: 1,
        forumid: 0,
      },
      {
        msgid: 4,
        msgTitle: "圈子内容评论",
        msgContent: "是的是的是的，就是的4",
        msgDate: "2020-05-10 10:30",
        msgState: 0,
        msgType: 0,
        forumid: 0,
      },
      {
        msgid: 5,
        msgTitle: "系统消息",
        msgContent: "是的是的是的，就是的5",
        msgDate: "2020-05-10 10:30",
        msgState: 1,
        msgType: 1,
        forumid: 0,
      },
      {
        msgid: 6,
        msgTitle: "圈子内容评论",
        msgContent: "是的是的是的，就是的6",
        msgDate: "2020-05-10 10:30",
        msgState: 0,
        msgType: 0,
        forumid: 0,
      },
      {
        msgid: 7,
        msgTitle: "系统消息",
        msgContent: "是的是的是的，就是的7",
        msgDate: "2020-05-10 10:30",
        msgState: 1,
        msgType: 1,
        forumid: 0,
      },
      {
        msgid: 8,
        msgTitle: "圈子内容评论",
        msgContent: "是的是的是的，就是的8",
        msgDate: "2020-05-10 10:30",
        msgState: 0,
        msgType: 0,
        forumid: 0,
      },
      {
        msgid: 9,
        msgTitle: "系统消息",
        msgContent: "是的是的是的，就是的9",
        msgDate: "2020-05-10 10:30",
        msgState: 1,
        msgType: 1,
        forumid: 0,
      },
      {
        msgid: 9,
        msgTitle: "系统消息",
        msgContent: "是的是的是的，就是的10",
        msgDate: "2020-05-10 10:30",
        msgState: 1,
        msgType: 1,
        forumid: 0,
      },
      {
        msgid: 9,
        msgTitle: "系统消息",
        msgContent: "是的是的是的，就是的11",
        msgDate: "2020-05-10 10:30",
        msgState: 1,
        msgType: 1,
        forumid: 0,
      },
      {
        msgid: 9,
        msgTitle: "系统消息",
        msgContent: "是的是的是的，就是的12",
        msgDate: "2020-05-10 10:30",
        msgState: 1,
        msgType: 1,
        forumid: 0,
      }
    ],
    pageIndex: 1,
    loadding: false,
    pullUpOn: true,
    nomoreText:'没有了'
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
    if (!this.data.pullUpOn) return;
    this.setData({
      loadding: true
    }, () => {
      if (this.data.pageIndex == 4) {
        this.setData({
          loadding: false,
          pullUpOn: false
        })
      } else {
        let loadData = JSON.parse(JSON.stringify(this.data.msgList));
        loadData = loadData.splice(0, 10)
        if (this.data.pageIndex == 1) {
          loadData = loadData.reverse();
        }
        this.setData({
          msgList: this.data.msgList.concat(loadData),
          pageIndex: this.data.pageIndex + 1,
          loadding: false
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  clickMsg(e) {
    console.log(e);
    switch (e.currentTarget.dataset.type) {
      case 0:
        //把消息ID带过去  并记得改消息状态
        wx.navigateTo({
          url: "../forumdetails/forumdetails"
        })
        break;
    }
  }
})