
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/auth/login/login","pages/auth/address/address","pages/auth/userCenter/userCenter","pages/auth/register/register","pages/auth/preview/preview","uview-ui/components/u-avatar-cropper/u-avatar-cropper","pages/auth/personal/personal","pages/auth/addediting/ADDediting","pages/auth/checkIn/checkIn","pages/auth/visit/visit","pages/auth/visitRecord/visitRecord","pages/auth/details/details","pages/auth/goRecord/goRecord","pages/auth/goDetails/goDetails","pages/auth/qrCode/qrCode","pages/auth/uncultivated/uncultivated","pages/auth/forum/forum","pages/index/ssss/ssss","components/forum/forumSearch/forumSearch"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#F95454","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/tabbar/home1.png","selectedIconPath":"static/tabbar/home2.png","text":"首页"},{"pagePath":"pages/auth/address/address","iconPath":"static/tabbar/location1.png","selectedIconPath":"static/tabbar/location2.png","text":"地址"},{"pagePath":"pages/auth/userCenter/userCenter","iconPath":"static/tabbar/user1.png","selectedIconPath":"static/tabbar/user2.png","text":"个人中心"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"kt_app_client","compilerVersion":"2.9.7","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/auth/login/login","meta":{},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#F07535","navigationStyle":"custom"}},{"path":"/pages/auth/address/address","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#F07535","navigationStyle":"custom"}},{"path":"/pages/auth/userCenter/userCenter","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#F07535","navigationStyle":"custom"}},{"path":"/pages/auth/register/register","meta":{},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#F07535","navigationStyle":"custom"}},{"path":"/pages/auth/preview/preview","meta":{},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#F07535","navigationStyle":"custom"}},{"path":"/uview-ui/components/u-avatar-cropper/u-avatar-cropper","meta":{},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#F07535","navigationStyle":"custom"}},{"path":"/pages/auth/personal/personal","meta":{},"window":{"navigationBarTitleText":"个人信息","navigationBarBackgroundColor":"#F07535","navigationStyle":"custom"}},{"path":"/pages/auth/addediting/ADDediting","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/auth/checkIn/checkIn","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/auth/visit/visit","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/auth/visitRecord/visitRecord","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/auth/details/details","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/auth/goRecord/goRecord","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/auth/goDetails/goDetails","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/auth/qrCode/qrCode","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/auth/uncultivated/uncultivated","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/auth/forum/forum","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/index/ssss/ssss","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/forum/forumSearch/forumSearch","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
