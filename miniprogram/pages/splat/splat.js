const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    splat: {},
    coop: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '数据拉取中...',
    })
    wx.request({
      url: 'https://splatoon2.ink/data/schedules.json', 
      header: { 'Content-Type': 'application/json'},
      success: res => {
        splat: res.data
        wx.setStorageSync("splat", res.data)
        console.log(res.data)
        wx.request({
          // url: 'https://splatoon2.ink/data/timeline.json',
          url: 'https://splatoon2.ink/data/coop-schedules.json',
          header: { 'Content-Type': 'application/json' },
          success: res_coop => {
            wx.hideLoading()
            wx.showToast({
              title: 'success'
            })
            coop: res_coop.data
            wx.setStorageSync("coop", res_coop.data)
            console.log(res_coop.data)
          },
          fail: err => {
            wx.hideLoading()
            wx.showToast({
              title: 'faild'
            })
          }
        })
      },
      fail: err => {
        wx.hideLoading()
        wx.showToast({
          title: 'faild'
        }),
          console.error('失败：', err)
      }
    })
  },

  onRank: function(){
    // game_mode = splat
    wx.navigateTo({
      url: '../splatZone/splatZone?game_mode=Rank'
    })
  },

  onLeague: function () {
    wx.navigateTo({
      url: '../splatZone/splatZone?game_mode=League'
    })
  },

  onRegular: function () {
    wx.navigateTo({
      url: '../splatZone/splatZone?game_mode=Regular'
    })
  },

  onCoop: function () {
    wx.navigateTo({
      url: '../splatCoop/splatCoop'
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