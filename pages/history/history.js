// pages/history/history.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    activeState: 'all',
    hidden: true,
  },

  toAll(e) {
    this.setData({
      activeState: 'all'
    })
  },

  toUnpaid(e) {
    this.setData({
      activeState: 'unpaid'
    })
  },
  toCooking(e) {
    this.setData({
      activeState: 'cooking'
    })
  },
  toFinished(e) {
    this.setData({
      activeState: 'finished'
    })
  },

  cooked(e) {
    this.data.historyOrders.forEach((order) => {
      if (order.time === e.currentTarget.dataset.id)
        order.state = 'unpaid'
    })
    this.setData({
      historyOrders: this.data.historyOrders
    })
    wx.setStorageSync('history', this.data.historyOrders)

  },
  paid(e) {
    this.data.historyOrders.forEach((order) => {
      if (order.time === e.currentTarget.dataset.id)
        order.state = 'finished'
    })
    this.setData({
      historyOrders: this.data.historyOrders
    })
    wx.setStorageSync('history', this.data.historyOrders)
  },

  finished(e) {
    this.data.historyOrders.forEach((order) => {
      if (order.time === e.currentTarget.dataset.id)
        order.state = 'cooking'
    })
    this.setData({
      historyOrders: this.data.historyOrders
    })
    wx.setStorageSync('history', this.data.historyOrders)
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
    this.setData({
      historyOrders: wx.getStorageSync('history')
    })
    this.data.historyOrders.forEach((order) => {
      let displayList = new Array()
      let limit = 4
      let exceed = false
      order.detail.forEach((kind) => {
        kind.dishes.forEach((dish) => {
          if (limit > 0) {
            displayList.push(dish)
            limit--
          }
          else if (limit === 0) {
            exceed = true
          }
        })
      })
      order.displayList = displayList
      order.exceed = exceed
    })
    this.setData({
      historyOrders:this.data.historyOrders
    })
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

  }
})