// pages/myforum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: [{
      name: "大声公"
    }, {
      name: "悄悄话"
    }],
    fornumList: [{
        img: 1,
        content: "马大爷家的狗丢了",
        like: 50,
        comment: 11
      },
      {
        img: 2,
        content: "刘大娘的女儿三十多了都嫁不出去",
        like: 52,
        comment: 10
      },
      {
        img: 3,
        content: "大年三十一起吃饭吧",
        like: 20,
        comment: 13
      },
      {
        img: 4,
        content: "物业小伙很不积极，吧嗒吧嗒把把",
        like: 33,
        comment: 11
      },
      {
        img: 5,
        content: "唠嗑贴，来人呀~~~",
        like: 51,
        comment: 15
      },
      {
        img: 6,
        content: "哈撒鸡",
        like: 50,
        comment: 11
      },
      {
        img: 1,
        content: "阿斯顿撒）",
        like: 50,
        comment: 12
      },
      {
        img: 2,
        content: "亲爱的麻辣烫（阿斯顿撒）",
        like: 50,
        comment: 13
      },
      {
        img: 3,
        content: "亲爱的麻辣烫（阿斯顿撒）",
        like: 10,
        comment: 12
      },
      {
        img: 4,
        content: "亲爱的麻辣烫（阿斯顿撒）",
        like: 20,
        comment: 30
      }
    ],
    pageIndex: 1,
    loadding: false,
    pullUpOn: true
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
        let loadData = JSON.parse(JSON.stringify(this.data.fornumList));
        loadData = loadData.splice(0, 10)
        if (this.data.pageIndex == 1) {
          loadData = loadData.reverse();
        }
        this.setData({
          fornumList: this.data.fornumList.concat(loadData),
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
  detail(e) {
    console.log(e);
    wx.navigateTo({
      url: "/pages/forumdetails/forumdetails"
    })
  },
  change(e) {
    this.setData({
      currentTab: e.detail.index
    })
  }
})