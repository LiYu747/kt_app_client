
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/index/search/search","pages/auth/login/login","pages/address/address/address","pages/user/userCenter/userCenter","pages/user/register/register","uview-ui/components/u-avatar-cropper/u-avatar-cropper","pages/user/personal/personal","pages/address/addediting/ADDediting","pages/residence/checkIn/checkIn","pages/visitapplication/visit/visit","pages/operation/visitRecord/visitRecord","pages/operation/details/details","pages/visitapplication/goRecord/goRecord","pages/visitapplication/goDetails/goDetails","pages/qrcode/qrCode/qrCode","pages/not/uncultivated/uncultivated","pages/communityForum/myforum/forum","components/forum/forumdils","components/idPhoto/idPhoto/idPhoto","pages/InformationDetails/InformationDetails/InformationDetails","pages/residence/checkRecord/checkRecord","pages/residence/checkdetails/checkdetails","pages/user/travelRecords/travelRecords","pages/user/register/headSculpture","pages/update/update","pages/communityForum/forumlists/forumlists","pages/visitapplication/newDetalis/newDetalis","pages/user/versionNumber/versionNumber","pages/communityForum/introduction/introduction","pages/communityForum/release/release","pages/classification/healthCode/healthCode","pages/classification/healthCare/healthCare","pages/classification/supermarket/supermarket","pages/classification/motion/motion","pages/classification/deliciousFood/deliciousFood","pages/classification/vehicle/vehicle","pages/classification/community/community","pages/classification/service/service","pages/classification/travel/travel","pages/communityForum/forumlists/lianx/lianx","pages/classification/travel/peoDetails","pages/web/index/index"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#F95454","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/tabbar/home1.png","selectedIconPath":"static/tabbar/home2.png","text":"首页"},{"pagePath":"pages/address/address/address","iconPath":"static/tabbar/location1.png","selectedIconPath":"static/tabbar/location2.png","text":"地址"},{"pagePath":"pages/user/userCenter/userCenter","iconPath":"static/tabbar/user1.png","selectedIconPath":"static/tabbar/user2.png","text":"个人中心"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"快通信息","compilerVersion":"2.9.7","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/index/search/search","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/auth/login/login","meta":{},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#F07535","navigationStyle":"custom"}},{"path":"/pages/address/address/address","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#F07535","navigationStyle":"custom","enablePullDownRefresh":true}},{"path":"/pages/user/userCenter/userCenter","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#F07535","navigationStyle":"custom"}},{"path":"/pages/user/register/register","meta":{},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#F07535","navigationStyle":"custom"}},{"path":"/uview-ui/components/u-avatar-cropper/u-avatar-cropper","meta":{},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#F07535","navigationStyle":"custom"}},{"path":"/pages/user/personal/personal","meta":{},"window":{"navigationBarTitleText":"个人信息","navigationBarBackgroundColor":"#F07535","navigationStyle":"custom"}},{"path":"/pages/address/addediting/ADDediting","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/residence/checkIn/checkIn","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/visitapplication/visit/visit","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/operation/visitRecord/visitRecord","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/operation/details/details","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/visitapplication/goRecord/goRecord","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/visitapplication/goDetails/goDetails","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/qrcode/qrCode/qrCode","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/not/uncultivated/uncultivated","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/communityForum/myforum/forum","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/components/forum/forumdils","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/components/idPhoto/idPhoto/idPhoto","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/InformationDetails/InformationDetails/InformationDetails","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/residence/checkRecord/checkRecord","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/residence/checkdetails/checkdetails","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/user/travelRecords/travelRecords","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/user/register/headSculpture","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/update/update","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/communityForum/forumlists/forumlists","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/visitapplication/newDetalis/newDetalis","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/user/versionNumber/versionNumber","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/communityForum/introduction/introduction","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/communityForum/release/release","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/classification/healthCode/healthCode","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/classification/healthCare/healthCare","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/classification/supermarket/supermarket","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/classification/motion/motion","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/classification/deliciousFood/deliciousFood","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/classification/vehicle/vehicle","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/classification/community/community","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/classification/service/service","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/classification/travel/travel","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/communityForum/forumlists/lianx/lianx","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/classification/travel/peoDetails","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/web/index/index","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
