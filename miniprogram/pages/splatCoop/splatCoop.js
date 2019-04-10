// pages/splatCoop/splatCoop.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    coop: {
      importance: 0.1,
      reward_gear: {
        available_time: 0,
        gear: {
          brand: {
            id: 0,
            image: "",
            name: "",
          },
          id: 0,
          image: "",
          kind: "",
          name: "",
          rarity: 0,
          thumbnail: ""
        }
      },
      schedule: {
        end_time: 0,
        stage: {
          image: "",
          name: ""
        },
        start_time: 0,
        weapons: []
      }
    },
    weapon_availability: {},
    coop_schedules: {
      details: [],
      schedules: []
    },
  },

  schedule: {
    end_time: 0,
    stage: {
      image: "",
      name: ""
    },
    start_time: 0,
    weapons: []
  },

  weapon: {
    id: 0,
    image: "",
    name: "",
    thumbnail: ""
  }, 

  coop_special_weapon: {
    id: 0,
    image: "",
    name: "",
    thumbnail: ""
  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({coop_schedules: wx.getStorageSync("coop")})
    // var gear = this.data.coop.reward_gear.gear
    var schedules = this.data.coop_schedules.details
    var base = 'https://splatoon2.ink/assets/splatnet'
    console.log(schedules)
    var timeList = new Array()
    for (var i = 0; i < schedules.length; i++) {
      timeList[i] = this.transforData(schedules[i].start_time) + ' - ' + this.transforData(schedules[i].end_time)
    }
    this.setData({ timeIndex: 0 });
    this.setData({ coop_name: schedules[0].stage.name})
    this.setData({ coop_image: base + schedules[0].stage.image })
    for (var i = 0; i < schedules[0].weapons.length; i++) {
      if (schedules[0].weapons[i].weapon == undefined){
        schedules[0].weapons[i].weapon = schedules[0].weapons[i].coop_special_weapon
      }
    }
    this.setData({ coop_weapon1: base + schedules[0].weapons[0].weapon.image })
    this.setData({ coop_weapon2: base + schedules[0].weapons[1].weapon.image })
    this.setData({ coop_weapon3: base + schedules[0].weapons[2].weapon.image })
    this.setData({ coop_weapon4: base + schedules[0].weapons[3].weapon.image })
    this.setData({ timeList: timeList })
    // this.setData({ gear_image: base + gear.image })
  },

  transforData: function (unixtime) {
    var dateTime = new Date(parseInt(unixtime) * 1000)
    var month = dateTime.getMonth()
    var day = dateTime.getDate()
    var hour = dateTime.getHours()
    var timeSpanStr = month+'/'+day+' '+hour + ":00"
    return timeSpanStr
  },

  changeTime(e) {
    var base = 'https://splatoon2.ink/assets/splatnet'
    var schedules = this.data.coop_schedules.details
    this.setData({ timeIndex: e.detail.value });
    this.setData({ coop_name: schedules[e.detail.value].stage.name})
    this.setData({ coop_image: base + schedules[e.detail.value].stage.image })
    for (var i = 0; i < schedules[e.detail.value].weapons.length; i++) {
      if (schedules[e.detail.value].weapons[i].weapon == undefined) {
        schedules[e.detail.value].weapons[i].weapon = schedules[e.detail.value].weapons[i].coop_special_weapon
      }
    }
    this.setData({ coop_weapon1: base + schedules[e.detail.value].weapons[0].weapon.image })
    this.setData({ coop_weapon2: base + schedules[e.detail.value].weapons[1].weapon.image })
    this.setData({ coop_weapon3: base + schedules[e.detail.value].weapons[2].weapon.image })
    this.setData({ coop_weapon4: base + schedules[e.detail.value].weapons[3].weapon.image })
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