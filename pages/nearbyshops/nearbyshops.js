// pages/nearbyshops.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:[],
    currentTab: 0,
    bgColor: "linear-gradient(90deg, rgb(255, 118, 38), rgb(252, 30, 82))",
    navbar: [{
      name: "日常"
    }, {
      name: "居家"
    }],
    shopsList: [{
      img: 1,
      name: "亲爱的麻辣烫（阿斯顿撒）",
      delivery: "是",
      businesstime: "10:00-21:00",
      phonecall: "13715961989"
    },
    {
      img: 2,
      name: "亲爱的麻辣烫（阿斯顿撒）",
      delivery: "否",
      businesstime: "10:00-21:00",
      phonecall: "13715961989"
    },
    {
      img: 3,
      name: "亲爱的麻辣烫（阿斯顿撒）",
      delivery: "是",
      businesstime: "10:00-21:00",
      phonecall: "13715961989"
    },
    {
      img: 4,
      name: "亲爱的麻辣烫（阿斯顿撒）",
      delivery: "否",
      businesstime: "10:00-21:00",
      phonecall: "13715961989"
    },
    {
      img: 5,
      name: "百草味 肉干肉脯 休闲零食 靖江精制猪肉脯200g/袋",
      delivery: "是",
      businesstime: "10:00-21:00",
      phonecall: "13715961989"
    },
    {
      img: 6,
      name: "短袖睡衣女夏季薄款休闲家居服短裤套装女可爱韩版清新学生两件套 短袖粉色长颈鹿 M码75-95斤",
      delivery: "是",
      businesstime: "10:00-21:00",
      phonecall: "13715961989"
    },
    {
      img: 1,
      name: "欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜",
      delivery: "是",
      businesstime: "10:00-21:00",
      phonecall: "13715961989"
    },
    {
      img: 2,
      name: "德国DMK进口牛奶",
      delivery: "是",
      businesstime: "10:00-21:00",
      phonecall: "13715961989"
    },
    {
      img: 3,
      name: "【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",
      delivery: "是",
      businesstime: "10:00-21:00",
      phonecall: "13715961989"
    },
    {
      img: 4,
      name: "百雀羚套装女补水保湿护肤品",
      delivery: "是",
      businesstime: "10:00-21:00",
      phonecall: "13715961989"
    }
    ],
    pageIndex: 1,
    loadding: false,
    pullUpOn: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onReachBottom: function () {
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
        let loadData = JSON.parse(JSON.stringify(this.data.shopsList));
        loadData = loadData.splice(0, 10)
        if (this.data.pageIndex == 1) {
          loadData = loadData.reverse();
        }
        this.setData({
          shopsList: this.data.shopsList.concat(loadData),
          pageIndex: this.data.pageIndex + 1,
          loadding: false
        })
      }
    })
  },
  change(e) {
    this.setData({
      currentTab: e.detail.index
    })
  },
  phoneCall(e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone //仅为示例，并非真实的电话号码
    })
  },
  detail() {
    wx.navigateTo({
      url: "/pages/shopsdetails/shopsdetails"
    })
  },
  search() {
    wx.navigateTo({
      url: "/pages/search/search"
    })
  } 
})