
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl: "https://splatoon2.ink/assets/splatnet",
    splats:[],
    gachi: [],
    league: [],
    regular: []
  },

  splatZone: {
    end_time: 0,
    game_mode: {
      key: "",
      name: ""
    },
    id: 0,
    rule: {
      key: "",
      name: "",
      multiline_name: ""
    },
    stage_a: {
      id: "",
      image: "",
      name: ""
    },
    stage_b: {
      id: "",
      image: "",
      name: ""
    },
    start_time: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var gameMode = options.game_mode
    var splattoon = wx.getStorageSync("splat")
    wx.setNavigationBarTitle({
      title: gameMode,
    })
    if(gameMode == "Rank"){
      this.splats = splattoon['gachi']
    }else if(gameMode == "League"){
      this.splats = splattoon.league
    }else if(gameMode == "Regular"){
      this.splats = splattoon.regular
    }
    var timeList = new Array()
    for(var i=0; i<this.splats.length;i++){
      timeList[i] = this.transforData(this.splats[i].start_time) + '-' + this.transforData(this.splats[i].end_time)
    }
    this.setData({ timeIndex: 0 });
    this.setData({ stage_rule: this.splats[0].rule.name})
    this.setData({ stage_a: "https://splatoon2.ink/assets/splatnet" + this.splats[0].stage_a.image})
    this.setData({ stage_a_name: this.splats[0].stage_a.name })
    this.setData({ stage_b: "https://splatoon2.ink/assets/splatnet" + this.splats[0].stage_b.image })
    this.setData({ stage_b_name: this.splats[0].stage_b.name })
    this.setData({ timeList: timeList })
  },
  
  transforData: function(unixtime){
    var dateTime = new Date(parseInt(unixtime) * 1000)
    var day = dateTime.getDate()
    var hour = dateTime.getHours()
    var timeSpanStr = hour+":00"
    return timeSpanStr
  },

  changeTime(e) {
    this.setData({ timeIndex: e.detail.value });
    this.setData({ stage_rule: this.splats[e.detail.value].rule.name })
    this.setData({ stage_a: "https://splatoon2.ink/assets/splatnet" + this.splats[e.detail.value].stage_a.image })
    this.setData({ stage_a_name: this.splats[e.detail.value].stage_a.name })
    this.setData({ stage_b: "https://splatoon2.ink/assets/splatnet" + this.splats[e.detail.value].stage_b.image })
    this.setData({ stage_b_name: this.splats[e.detail.value].stage_b.name })
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