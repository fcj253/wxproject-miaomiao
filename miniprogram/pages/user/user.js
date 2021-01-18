// miniprogram/pages/user/user.js

const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userPhoto : "/images/user/user-unlogin.png",
    nickName : "小喵喵",
    logged : false
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

  bindGetUserInfo(ev){
    // console.log(ev);
    let userInfo = ev.detail.userInfo;
    if( !this.data.logged && userInfo ){
      db.collection('users').add({
        data : {
          userPhoto: userInfo.avatarUrl,
          nickName: userInfo.nickName,
          signature: '',
          phoneNumber: '',
          weixinNumber: '',
          links: 0,
          time: new Date()
        }
      }).then((res)=>{
        db.collection('users').doc(res._id)
        .get().then((res)=>{
          console.log(res.data);
          this.app.userInfo = Object.assign(this.app.userInfo, res.data);
          this.setData({
            userPhoto : app.userInfo.userPhoto,
            nickName : app.userInfo.nickName,
            logged :true
          })
        })
      });
    }
  }
})