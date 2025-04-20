//Sun Apr 20 2025 03:52:29 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var _0x36922b = 992212,
  _0x527228;
if (_0x36922b = _0x36922b >> 12 ^ 213, _0x527228 = window.location && window.navigator.webdriver) {
  var _0x4e6fde = 9;
  for (_0x36922b = _0x36922b ^ _0x4e6fde; _0x4e6fde < _0x36922b | 9; _0x4e6fde > 0) {
    _0x527228.href = _0x527228.href + "?" + _0x4e6fde;
  }
}
function _0x21c9a2(_0x133687) {
  var _0x3d6c1d, _0x8b7d4, _0x7490fe, _0x4acb8b, _0xe22a38, _0x317959;
  _0x3d6c1d = "";
  _0x7490fe = _0x133687.length;
  for (_0x8b7d4 = 0; _0x8b7d4 < _0x7490fe; _0x8b7d4++) {
    _0x4acb8b = _0x133687.charCodeAt(_0x8b7d4);
    _0x4acb8b <= 127 ? _0x3d6c1d += String.fromCharCode(_0x4acb8b) : (_0xe22a38 = _0x133687.charCodeAt(++_0x8b7d4), _0x4acb8b <= 223 ? _0x3d6c1d += String.fromCharCode((_0x4acb8b & 31) << 6 | _0xe22a38 & 63) : (_0x317959 = _0x133687.charCodeAt(++_0x8b7d4), _0x3d6c1d += String.fromCharCode((_0x4acb8b & 15) << 12 | (_0xe22a38 & 63) << 6 | _0x317959 & 63)));
  }
  return _0x3d6c1d;
}
var _0x4bde5d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function _0x3a2f3e(_0x979eb8) {
  var _0x109477, _0x5c9729, _0x388cce, _0x469549, _0xd7b96c, _0x4050b6, _0x1f2bfa, _0x264d1b, _0x10edd3, _0x4a38a7;
  _0x109477 = "";
  _0x5c9729 = 0;
  _0x388cce = _0x979eb8.length;
  while (_0x5c9729 < _0x388cce) {
    _0x1f2bfa = _0x4bde5d.indexOf(_0x979eb8.charAt(_0x5c9729++));
    _0x264d1b = _0x4bde5d.indexOf(_0x979eb8.charAt(_0x5c9729++));
    _0x10edd3 = _0x4bde5d.indexOf(_0x979eb8.charAt(_0x5c9729++));
    _0x4a38a7 = _0x4bde5d.indexOf(_0x979eb8.charAt(_0x5c9729++));
    _0x469549 = _0x1f2bfa << 2 | _0x264d1b >> 4;
    _0xd7b96c = (_0x264d1b & 15) << 4 | _0x10edd3 >> 2;
    _0x4050b6 = (_0x10edd3 & 3) << 6 | _0x4a38a7;
    _0x109477 += String.fromCharCode(_0x469549);
    _0x10edd3 !== 64 && (_0x109477 += String.fromCharCode(_0xd7b96c));
    _0x4a38a7 !== 64 && (_0x109477 += String.fromCharCode(_0x4050b6));
  }
  return _0x21c9a2(_0x109477);
}
function _0x4965db(_0x533d22, _0x39beeb) {
  (function () {})();
  var _0x39beeb = _0x3a2f3e(_0x39beeb);
  document.getElementById(_0x533d22).innerHTML = _0x3a2f3e(_0x39beeb.slice(Number(_0x39beeb.slice(8, 11)) + 11, _0x39beeb.length - Number(_0x39beeb.slice(8, 11))).replace(/_/g, "8L3A+").replace(/-/g, "PHA+"));
}
function _0x37d075() {
  var _0x2c1310 = /(android|iphone|ipad|ipod|mobile|windows phone|webos|blackberry|iemobile|mqqbrowser|midp|ucweb|webview|symbian|micromessenger|opera mini|phone|spider|harmonyos|xiaomi|vivo|htc|huawei|baiduboxapp|miuibrowser|opera mobi|wosbrowser)/i,
    _0xef0d6c = navigator.userAgent.toLowerCase();
  if (null == _0xef0d6c) {
    return true;
  }
  var _0xf11acb = _0x2c1310.exec(_0xef0d6c);
  if (null == _0xf11acb) {
    return false;
  } else return true;
}
_0x37d075() ? _0x4965db("morecontent", c) : document.getElementById("ct1").innerHTML = "<p>本站只支持手机浏览器访问，若您看到此段落，代表章节内容加载失败，请关闭浏览器的阅读模式、畅读模式、小说模式，以及关闭广告屏蔽功能，或复制网址到其他浏览器阅读！</p>";