// pages/classification/scenicSpot/scenicSpot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    till: ['全部', '景点', '温泉', '滑雪'],
    idx: 0,
    getData: [],
    locadata: [{
      image: 'https://oss.kuaitongkeji.com/static/img/app/classification/travel/logo1.png',
      name: '南湖梦幻岛',
      score: '3.9',
      distance: '3.0km',
      Views: '46759人浏览',
      label: '公园游乐场      天府新区',
      price: '',
      Crunchies: '榜单：成都嗨玩游乐场人气榜 第三名',
      introduce: '项目：太空梭、失恋博物馆'
    },
    {
      image: 'https://oss.kuaitongkeji.com/static/img/app/classification/travel/logo2.png',
      name: '成都动物园',
      score: '4.6',
      distance: '26.4km',
      Views: '52658人浏览',
      label: '动物园      驷马桥',
      price: '￥18',
      Crunchies: '出行：17：00闭园，驾车43分钟到',
      introduce: '榜单：成都萌控必去景点'
    },
    {
      image: 'https://oss.kuaitongkeji.com/static/img/app/classification/travel/logo3.png',
      name: '成都海昌极地海洋公园（4A）',
      score: '4.3',
      distance: '2.1km',
      Views: '8268人浏览',
      label: '海洋馆      天府新区',
      price: '￥168',
      Crunchies: '出行：17：00闭园，骑行10分钟到',
      introduce: '榜单：成都室内玩乐景点'
    }
  ],
  locadata1: [{
    image: 'https://oss.kuaitongkeji.com/static/img/app/classification/travel/logo4.png',
    name: '七彩田野',
    score: '4.0',
    distance: '9.9km',
    Views: '10268人浏览',
    label: '其他景点      锦江区',
    price: '',
    Crunchies: '出行：18:00闭园，驾车16分钟到',
    introduce: '项目：真人cs、UTV乐园、游船'
  },
  {
    image: 'https://oss.kuaitongkeji.com/static/img/app/classification/travel/logo5.png',
    name: '紫颐香薰山谷景区',
    score: '3.8',
    distance: '10.9km',
    Views: '3268人浏览',
    label: '公园游乐场      双流区',
    price: '',
    Crunchies: '出行：18：00闭园，驾车18分钟到',
    introduce: '榜单：成都萌控必去景点人气榜'
  },
],
locadata2: [{
  image: 'https://oss.kuaitongkeji.com/static/img/app/classification/travel/logo6.png',
  name: '诺亚方舟（创业路）',
  score: '3.9',
  distance: '16.1km',
  Views: '1768人浏览',
  label: '温泉      高棚大道',
  price: '￥149',
  Crunchies: '榜单：成都舒享温泉人气榜',
  introduce: '项目:禅意丝享区、果蔬鲜花泉'
},
{
  image: 'https://oss.kuaitongkeji.com/static/img/app/classification/travel/logo7.png',
  name: '蜀乐池温泉',
  score: '4.0',
  distance: '29.1km',
  Views: '5768人浏览',
  label: '温泉     凤凰大街',
  price: '￥148',
  Crunchies: '榜单：成都省心全家游景点榜',
  introduce: '项目：30多项休闲娱乐项目、温泉桑拿'
},
],
locadata3: [{
  image: 'https://oss.kuaitongkeji.com/static/img/app/classification/travel/logo8.png',
  name: '美洲四季滑雪场',
  score: '4.8',
  distance: '12km',
  Views: '15768人浏览',
  label: '滑雪      石羊场',
  price: '￥102',
  Crunchies: '',
  introduce: ''
},
{
  image: 'https://oss.kuaitongkeji.com/static/img/app/classification/travel/logo9.png',
  name: '滑噜噜四季滑雪场',
  score: '4.2',
  distance: '2km',
  Views: '4578人浏览',
  label: '滑雪      华阳',
  price: '￥69',
  Crunchies: '',
  introduce: ''
},
]
  },
 add: function (t){
   let index = t.target.dataset.index
      this.setData({
        idx: index
    })
    if (index == 0) {
      this.setData({
        getData: this.data.locadata
    })
    }
    if (index == 1) {
      this.setData({
        getData: this.data.locadata1
    })
    }
    if (index == 2) {
      this.setData({
        getData: this.data.locadata2
    })
    }
    if (index == 3) {
      this.setData({
        getData: this.data.locadata3
    })
    }
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
    this.setData({
      getData: this.data.locadata
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