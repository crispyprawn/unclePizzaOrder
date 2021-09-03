// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeState: 'all'
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
  toUncommented(e) {
    this.setData({
      activeState: 'uncommented'
    })
  },
  toFulfilled(e) {
    this.setData({
      activeState: 'fulfilled'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let raw = wx.getStorageSync('history')
    console.log(raw)
    raw.forEach(order => {
      let orderTime = new Date(order.time)
      order.time = {
        year: orderTime.getFullYear(),
        month: orderTime.getMonth(),
        date: orderTime.getDate(),
        hour: orderTime.getHours(),
        minute: orderTime.getMinutes(),
        second: orderTime.getSeconds()
      }
    })
    this.setData({
      historyOrders: raw
    })
    console.log(this.data.historyOrders)
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

  }
})