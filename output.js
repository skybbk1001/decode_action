//Tue Dec 16 2025 12:13:03 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var II11i1 = 992212,
  iliIil;
if (II11i1 = II11i1 >> 12 ^ 213, iliIil = window.location && window.navigator.webdriver) {
  var iliIii = 9;
  for (II11i1 = II11i1 ^ iliIii; iliIii < II11i1 | 9; iliIii > 0) {
    iliIil.href = iliIil.href + "?" + iliIii;
  }
}
function lill1i(lill1l) {
  var i1iiI = document.cookie.split(";"),
    i1ilIl = null;
  for (var llI11I = 0; llI11I < i1iiI.length; llI11I++) {
    var Il1i11 = i1iiI[llI11I],
      iii1li = Il1i11.trim().split("="),
      Iil1i1 = iii1li[0],
      IIii11 = iii1li[1];
    Iil1i1 === lill1l && (i1ilIl = IIii11);
  }
  return i1ilIl;
}
function il1li(iii1ll, IIliI1) {
  "fundebug" in window && fundebug.notify(iii1ll, IIliI1, {
    "metaData": {
      "cookie": document.cookie
    }
  });
}
function iIIill(llI11i) {
  var l1l1il = [];
  for (var I11i1I = 0; I11i1I < 256; I11i1I++) {
    l1l1il[I11i1I] = I11i1I;
  }
  var iliIi1 = 0;
  for (var I11i1I = 0; I11i1I < 256; I11i1I++) {
    {
      iliIi1 = (iliIi1 + l1l1il[I11i1I] + llI11i.charCodeAt(I11i1I % llI11i.length)) % 256;
      var l1l1ii = l1l1il[I11i1I];
      l1l1il[I11i1I] = l1l1il[iliIi1];
      l1l1il[iliIi1] = l1l1ii;
    }
  }
  return l1l1il;
}
function iilii(iili1, II11ii) {
  var II11il = iIIill(II11ii),
    iIIil1 = 0,
    IlllII = 0,
    I1il1I = "";
  for (var II111 = 0; II111 < iili1.length; II111++) {
    iIIil1 = (iIIil1 + 1) % 256;
    IlllII = (IlllII + II11il[iIIil1]) % 256;
    var liI1i1 = II11il[iIIil1];
    II11il[iIIil1] = II11il[IlllII];
    II11il[IlllII] = liI1i1;
    var I11i11 = iili1.charCodeAt(II111) ^ II11il[(II11il[iIIil1] + II11il[IlllII]) % 256];
    I1il1I += String.fromCharCode(I11i11);
  }
  return I1il1I;
}
function Ill11i(IlllI1) {
  if (typeof btoa !== "undefined") {
    return btoa(IlllI1);
  }
  var lI1l11 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    II11l = "",
    II11i = 0;
  while (II11i < IlllI1.length) {
    var iI1Iii = IlllI1.charCodeAt(II11i++),
      liI1ii = II11i < IlllI1.length ? IlllI1.charCodeAt(II11i++) : 0,
      lIIiIl = II11i < IlllI1.length ? IlllI1.charCodeAt(II11i++) : 0,
      iI1Iil = iI1Iii << 16 | liI1ii << 8 | lIIiIl;
    II11l += lI1l11.charAt(iI1Iil >> 18 & 63);
    II11l += lI1l11.charAt(iI1Iil >> 12 & 63);
    II11l += II11i - 2 < IlllI1.length ? lI1l11.charAt(iI1Iil >> 6 & 63) : "=";
    II11l += II11i - 1 < IlllI1.length ? lI1l11.charAt(iI1Iil & 63) : "=";
  }
  return II11l;
}
function iilil(ili11I, li11l) {
  var li11i = iilii(ili11I, li11l);
  return Ill11i(li11i);
}
function Ill11l(ll1Ii) {
  (function () {})();
  var ill1II = ll1Ii.substr(0, 8),
    i1llil = parseInt(ll1Ii.substr(12));
  typeof window === "undefined" && (i1llil = 2);
  var i1llii = i1llil * 2 + 18 - 2,
    l1i1I1 = iilil(i1llii.toString(), ill1II),
    llIIil = l1i1I1.toString();
  document.cookie = "guardret=" + llIIil;
  window.location.reload();
}
var il1ll = lill1i("guard");
!il1ll ? il1li("auto.js", "guard is null") : Ill11l(il1ll);