// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu: [
      {
        "kindName": "披萨",
        "kindId": 1,
        "dishes": [
          {
            "id": 1,
            "name": "大叔披萨",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 55,
            "image-url": "/static/images/menu/uncle.jpg"
          },
          {
            "id": 2,
            "name": "玛格丽特披萨",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 30,
            "image-url": "/static/images/menu/margherita.jpg"
          },
          {
            "id": 3,
            "name": "四季披萨",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 40,
            "image-url": "/static/images/menu/four_seasons.jpg"
          },
          {
            "id": 4,
            "name": "那不勒塔拿披萨",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 40,
            "image-url": "/static/images/menu/napoletana.jpg"
          },
          {
            "id": 5,
            "name": "维纳塔披萨",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 40,
            "image-url": "/static/images/menu/veneta.jpg"
          },
          {
            "id": 6,
            "name": "克诺斯顿披萨",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 45,
            "image-url": "/static/images/menu/crostone.jpg"
          },
          {
            "id": 7,
            "name": "经典萨拉米披萨",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 40,
            "image-url": "/static/images/menu/salami.jpg"
          },
          {
            "id": 8,
            "name": "恶魔披萨",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 40,
            "image-url": "/static/images/menu/devil.jpg"
          },
          {
            "id": 9,
            "name": "混和蔬菜披萨",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 35,
            "image-url": "/static/images/menu/vegetarian.jpg"
          },
          {
            "id": 10,
            "name": "罗勒香肠披萨",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 55,
            "image-url": "/static/images/menu/basil_sausage.jpg"
          },
          {
            "id": 11,
            "name": "夏威夷披萨",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 45,
            "image-url": "/static/images/menu/hawaii.jpg"
          },
          {
            "id": 12,
            "name": "牛肉披萨",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 55,
            "image-url": "/static/images/menu/beef.jpg"
          },
          {
            "id": 13,
            "name": "金枪鱼披萨",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 45,
            "image-url": "/static/images/menu/tuna.jpg"
          },
          {
            "id": 14,
            "name": "巨盒披萨",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 45,
            "image-url": "/static/images/menu/calzone.jpg"
          },
          {
            "id": 15,
            "name": "松露菌菇披萨",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 55,
            "image-url": "/static/images/menu/truffle_porcini.jpg"
          },
          {

            "id": 16,
            "name": "鲜虾披萨",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 45,
            "image-url": "/static/images/menu/shrimps.jpg"
          },
          {

            "id": 17,
            "name": "榴莲披萨",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 65,
            "image-url": "/static/images/menu/durain.jpg"
          }
        ]
      },
      {
        "kindName": "小食",
        "kindId": 2,
        "dishes": [
          {
            "id": 18,
            "name": "蒜蓉面包",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 55,
            "image-url": "/static/images/menu/garlic_bread.jpg"
          },
          {
            "id": 19,
            "name": "鸡肉三明治",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 55,
            "image-url": "/static/images/menu/sandwich.jpg"
          },
        ],
      },
      {
        "kindName": "饮料",
        "kindId": 3,
        "dishes": [
          {
            "id": 20,
            "name": "",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 55,
            "image-url": ""
          },
          {
            "id": 21,
            "name": "",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 55,
            "image-url": ""
          },
          {

            "id": 22,
            "name": "",
            "numbers": 0,
            "soldout": false,
            "sales": 20,
            "price": 55,
            "image-url": ""
          }
        ],
      }
    ],
    totalPrice: 0,
    totalAmount: 0,
    toView: "",
    kindPositions: [],
    catagoryActiveId: 1,
    currentScreenPixels: 0,
    showCartDetail: false
  },
  switchKind(e) {
    this.setData({
      toView: e.currentTarget.dataset.kind
    })
  },
  dishScroll(e) {
    let currentTop = e.detail.scrollTop
    let finalId = 1
    this.data.kindPositions.forEach((val) => {
      if (currentTop > val.top - this.data.currentScreenPixels / 750 * 120)
        finalId = val.id
    })
    this.setData({
      catagoryActiveId: finalId
    })
  },
  addDish(e) {
    let dish = this.data.menu.find((item) => item.kindId === e.currentTarget.dataset.kindId).dishes.find((item) => item.id === e.currentTarget.dataset.dishId)
    dish.numbers++
    this.setData({ menu: this.data.menu })
    this.setData({ totalAmount: this.data.totalAmount + 1 })
    this.setData({ totalPrice: this.data.totalPrice + dish.price })
  },
  minusDish(e) {
    let dish = this.data.menu.find((item) => item.kindId === e.currentTarget.dataset.kindId).dishes.find((item) => item.id === e.currentTarget.dataset.dishId)
    dish.numbers--
    this.setData({ menu: this.data.menu })
    this.setData({ totalAmount: this.data.totalAmount - 1 })
    this.setData({ totalPrice: this.data.totalPrice - dish.price })
  },
  showDetail(e) {
    if (this.data.totalAmount > 0) {
      this.setData({
        showCartDetail: !this.data.showCartDetail
      })
    }
  },
  foldDetail(e) {
    this.setData({
      showCartDetail: false
    })
  },
  clearAll(e) {
    this.data.menu.forEach(kind => {
      kind['dishes'].forEach(dish => dish.numbers = 0)
    })
    this.setData({
      menu: this.data.menu,
      totalAmount: 0,
      totalPrice: 0
    })
  },
  goToPay(e) {
    let a = this.data.menu
      .map((kind) => {
        return {
          kindName: kind.kindName,
          kindId: kind.kindId,
          dishes: kind.dishes.filter((dish) => dish.numbers > 0)
        }
      })
      .filter((kind) => Object.keys(kind.dishes).length !== 0)
    wx.navigateTo({
      url: `/pages/payment/payment?menu=${JSON.stringify(a)}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const query = wx.createSelectorQuery()
    query.selectAll('.dishAll').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec((res) => {
      res[0].forEach(val => {
        this.data.kindPositions.push({
          "top": val.top - this.data.currentScreenPixels / 750 * 300,
          "id": val.id.slice(4)
        })
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getSystemInfo({
      success: (result) => { this.setData({ currentScreenPixels: result.screenWidth }) },
    })
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