import dayjs from "dayjs"

// pages/payment/payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    confirmed: false
  },

  returnToOrder(e) {
    wx.navigateBack({
      delta: 1,
    })
  },

  goToSubmit(e) {
    this.setData({
      confirmed: true
    })
    this.getOpenerEventChannel().emit("initialize")
    let history = wx.getStorageSync('history')
    history.push({
      time: dayjs().format('YYMMDDHHmmss'),
      state: 'cooking',
      detail: this.data.menu,
      totalAmount: this.data.totalAmount,
      totalPrice: this.data.totalPrice,
    })
    wx.setStorage({
      key: 'history',
      data: history
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let channel = this.getOpenerEventChannel()
    channel.on('acceptDataFromOpenerPage', (data) => {
      this.setData({
        menu: data.order,
        totalPrice: data.totalPrice,
        totalAmount: data.totalAmount
      })
    })
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