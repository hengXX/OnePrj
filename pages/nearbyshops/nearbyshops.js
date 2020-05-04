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
    productList: [{
      img: 1,
      name: "亲爱的麻辣烫（阿斯顿撒）",
      sale: "是否外送：是",
      factory: "营业时间：10:00-21:00",
      payNum: "联系电话：13715961989"
    },
    {
      img: 2,
      name: "亲爱的麻辣烫（阿斯顿撒）",
      sale: "是否外送：否",
      factory: "营业时间：10:00-21:00",
      payNum: "联系电话：13715961989"
    },
    {
      img: 3,
      name: "亲爱的麻辣烫（阿斯顿撒）",
      sale: "是否外送：是",
      factory: "营业时间：10:00-21:00",
      payNum: "联系电话：13715961989"
    },
    {
      img: 4,
      name: "亲爱的麻辣烫（阿斯顿撒）",
      sale: "是否外送：否",
      factory: "营业时间：10:00-21:00",
      payNum: "联系电话：13715961989"
    },
    {
      img: 5,
      name: "百草味 肉干肉脯 休闲零食 靖江精制猪肉脯200g/袋",
      sale: 599,
      factory: 899,
      payNum: 2399
    },
    {
      img: 6,
      name: "短袖睡衣女夏季薄款休闲家居服短裤套装女可爱韩版清新学生两件套 短袖粉色长颈鹿 M码75-95斤",
      sale: 599,
      factory: 899,
      payNum: 2399
    },
    {
      img: 1,
      name: "欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜",
      sale: 599,
      factory: 899,
      payNum: 2342
    },
    {
      img: 2,
      name: "德国DMK进口牛奶",
      sale: 29,
      factory: 69,
      payNum: 999
    },
    {
      img: 3,
      name: "【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",
      sale: 299,
      factory: 699,
      payNum: 666
    },
    {
      img: 4,
      name: "百雀羚套装女补水保湿护肤品",
      sale: 1599,
      factory: 2899,
      payNum: 236
    }
    ],
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  change(e) {
    console.log(e.detail.index);
    this.setData({
      currentTab: e.detail.index
    })
  },
  goNavBar() {
    wx.navigateTo({
      url: "/pages/navbar-1/navbar-1"
    })
  } 
})