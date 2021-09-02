// pages/history/history.js
//index.js
//获取应用实例
const app = getApp()
 
Page({
  data: {
    //商品数量
    goodsNumber: 99,
    //遮罩层显示状态
    mask: true,
    //购物车弹窗显示隐藏
    cartBox: true,
    //单规格
    danguige: false,
    //多规格
    duoguige: true,
 
    guigelist: [
      {
        id: 1,
        guige: '白色'
      },
      {
        id: 2,
        guige: '红色'
      },
      {
        id: 1,
        guige: '黑色'
      }
    ]
  },
  //事件处理函数
 
  onLoad: function () {
 
  },
  showCart() {
    this.setData({
      cartBox: !this.data.cartBox, //显示隐藏购物车弹窗
      mask: !this.data.mask, //显示隐藏遮罩层
    });
  },
  //点击遮罩层隐藏弹窗
  hideAllBox() {
    this.setData({
      //遮罩层隐藏
      mask: true,
      //产品参数弹窗隐藏
      paramsBox: true,
      //购物车弹窗隐藏
      cartBox: true,
      //选择规格弹窗隐藏
      choice: true,
 
    })
  },
 
})