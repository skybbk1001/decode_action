//Tue Feb 10 2026 06:48:48 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
_0x5486 = dBRoPe(["GwjDqV1fwpTCmA==", "w6rCq8K3w5TChAfCgHnDrg==", "GwrDtlkZwoHChHdrGMO7UmjDj0w=", "LhwpImnDr8Osw5wd", "GwkPYw==", "PRIrL0Q=", "ScOqGVE=", "XMOlC10=", "STIEMcOzw4QD", "UsOpDFYoQ8OW", "wrPCqsK6W3TDvkEUIMOzV8OCCMKlJcKLwpnDlHsKw4o3VcKtw5nDtcO9E8K7VGd8GMKySMKrw7zCl8OJfFfDl3fDi8OCw7HCtsKUw7c=", "OcOxw7Ul", "w4tBwrLCocKJw6s0", "w5zCj310ZcOPSQ==", "FgnCuA==", "J8OQwpbCmFHDuBEQw5DDqEA=", "ABoO", "GxAow74eCwDCjsOF", "dcOwUFE6", "w63CtMOrRn3Dq1Y=", "Fy4KPw==", "FAV0w6HCs8KpwpZ8Yw==", "D8Ojw5JxwrNcw4nCoQ==", "XDzCm8KiZQ==", "wq/CrHFewq4=", "wqvCmcOs", "w5fCnMKrPMOKASZVJsOtIA==", "CShm", "wrfCqGJJwq53w5o=", "AwnCvMKdJnpS", "w4Ncdw==", "cy7Dkg==", "wq3DnMKNCQ==", "KsOzw4c=", "w4PCiGl0ZQ==", "w63DjW7DgHTCmRE=", "wrXDkMKNCQ==", "T8Ktw6lcw47Cpw==", "KMOuw6c1", "wpfDg8KDwqg=", "wqrDl8O1FA==", "d8O0Uk4+w7IN", "w6/Dh23DgHTCjBA=", "fMOBwpA=", "wqzDg0LDig==", "B8O9wrA="], 22);
_0x23c1 = function (User, Title) {
  var Link, Intro;
  User = User - 0;
  Link = _0x5486[User];
  if (_0x23c1.KATAKa === undefined) {
    var data;
    (function () {
      var User = function () {
          var User;
          try {
            User = Function("return (function() {}.constructor(\"return this\")( ));")();
          } catch (Title) {
            User = window;
          }
          return User;
        },
        Title,
        Link;
      Title = User();
      Link = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      Title.atob || (Title.atob = function (User) {
        var Title = String(User).replace(new RegExp("=+$", ""), ""),
          Intro;
        Intro = "";
        for (var data = 0, _0x5486, _0x23c1, Headers = 0; _0x23c1 = Title.charAt(Headers++); ~_0x23c1 && (_0x5486 = data % 4 ? _0x5486 * 64 + _0x23c1 : _0x23c1, data++ % 4) ? Intro += String.fromCharCode(255 & _0x5486 >> (-2 * data & 6)) : 0) {
          _0x23c1 = Link.indexOf(_0x23c1);
        }
        return Intro;
      });
    })();
    data = function (User, Title) {
      var Link = [],
        Intro,
        data,
        _0x5486,
        _0x23c1,
        Headers,
        uBwneaO;
      Intro = 0;
      data = undefined;
      _0x5486 = "";
      _0x23c1 = "";
      User = atob(User);
      for (var K1Or3ix = 0, dBRoPe = User.length; K1Or3ix < dBRoPe; K1Or3ix++) {
        _0x23c1 += "%" + ("00" + User.charCodeAt(K1Or3ix).toString(16)).slice(-2);
      }
      User = decodeURIComponent(_0x23c1);
      Headers = undefined;
      for (Headers = 0; Headers < 256; Headers++) {
        Link[Headers] = Headers;
      }
      for (Headers = 0; Headers < 256; Headers++) {
        Intro = (Intro + Link[Headers] + Title.charCodeAt(Headers % Title.length)) % 256;
        data = Link[Headers];
        Link[Headers] = Link[Intro];
        Link[Intro] = data;
      }
      Headers = 0;
      Intro = 0;
      for (uBwneaO = 0; uBwneaO < User.length; uBwneaO++) {
        Headers = (Headers + 1) % 256;
        Intro = (Intro + Link[Headers]) % 256;
        data = Link[Headers];
        Link[Headers] = Link[Intro];
        Link[Intro] = data;
        _0x5486 += String.fromCharCode(User.charCodeAt(uBwneaO) ^ Link[(Link[Headers] + Link[Intro]) % 256]);
      }
      return _0x5486;
    };
    _0x23c1.thNmXN = data;
    _0x23c1.MveujA = {};
    _0x23c1.KATAKa = true;
  }
  Intro = _0x23c1.MveujA[User];
  if (Intro === undefined) {
    if (_0x23c1.JhDJhp === undefined) {
      _0x23c1.JhDJhp = true;
    }
    Link = _0x23c1.thNmXN(Link, Title);
    _0x23c1.MveujA[User] = Link;
  } else {
    Link = Intro;
  }
  return Link;
};
eval(String(source[_0x23c1("0x0", "mZNy")]));
eval(String(Reload(cache_api + _0x23c1("0x1", "GR1u"))));
User = "";
Title = "";
Link = "";
Intro = "";
user_Check();
data = [];
Headers = JSON[_0x23c1("0x2", "I[1m")](cache[_0x23c1("0x3", "B*So")](java[_0x23c1("0x4", "QuM$")](Get(_0x23c1("0x5", "58nt")) + _0x23c1("0x6", "I[1m")))[_0x23c1("0x7", "OekH")](Get(_0x23c1("0x8", "A2oE")), baseUrl));
uBwneaO = _0x23c1("0x9", "]ujw");
K1Or3ix = Headers;
if (!("l25z4kZ" in ofl0T9p) && User == true) {
  var list, next, searchkey;
  let pid = new RegExp("www\\.", "")[_0x23c1("0xa", "L&nK")](Get(_0x23c1("0xb", "ie!4"))) ? "2" : "1";
  list = JSON[_0x23c1("0xc", "5X(G")](result)[_0x23c1("0xd", "7NLX")][_0x23c1("0xe", "L&nK")];
  for (i in list) {
    var authors = [],
      authorElements,
      j;
    authorElements = list[i][_0x23c1("0xf", "&meO")];
    for (j in authorElements) {
      authors[_0x23c1("0x10", "N(hQ")](String(authorElements[j][_0x23c1("0x11", "JZFF")]));
    }
    author = authors[_0x23c1("0x12", "GGUI")]("/")[_0x23c1("0x13", "V$Hr")](new RegExp("\\s", "g"), "");
    kind = "✦ " + Num(list[i][_0x23c1("0x14", "7NLX")]);
    url = Get(_0x23c1("0x15", "fbSq")) + (new RegExp("www\\.", "")[_0x23c1("0x16", "ObB2")](Get(_0x23c1("0x17", "DyWu"))) ? _0x23c1("0x18", "]ujw") + list[i][_0x23c1("0x19", "xR^O")] : _0x23c1("0x1a", "]ujw") + list[i][_0x23c1("0x1b", "SNFw")]);
    push(data, {
      "name": list[i][_0x23c1("0x1c", "nVYQ")],
      "author": author,
      "kind": kind,
      "word": "",
      "latest": "",
      "intro": "",
      "cover": list[i][_0x23c1("0x1d", "SNFw")],
      "url": url
    });
  }
  next = "";
  if (!("MsQh2I" in ofl0T9p) && new RegExp("www\\.", "")[_0x23c1("0x1e", "BK25")](Get(_0x23c1("0x8", "A2oE")))) {
    next = java[_0x23c1("0x1f", "BK25")](baseUrl[_0x23c1("0x20", "WMy6")](new RegExp("offset=(\\d+)", ""), function (_0x5486, User) {
      return _0x23c1("0x21", "BK25") + (parseInt(User) + 20);
    }) + _0x23c1("0x22", "HBlW"));
  } else {
    next = java[_0x23c1("0x23", "N(hQ")](baseUrl[_0x23c1("0x24", "K9BC")](new RegExp("offset=(\\d+)", ""), function (_0x5486, User) {
      return _0x23c1("0x25", "5X(G") + (parseInt(User) + 20);
    }));
  }
  searchkey = java[_0x23c1("0x26", "OekH")](java[_0x23c1("0x27", "8)zd")](Get(_0x23c1("0x28", "nVYQ")) + _0x23c1("0x29", "rZ#O")));
  if (!("KTRZJJB" in ofl0T9p) && (!list[0] || !JSON[_0x23c1("0x2a", "V$Hr")](next)[_0x23c1("0x2b", "HBlW")][_0x23c1("0x2c", "pqKJ")][0] || new RegExp("书源|使用|说明|書源|說明", "")[_0x23c1("0xa", "L&nK")](searchkey))) {
    Data();
  }
  data = JSON[_0x23c1("0x2d", "h!g6")](data);
} else {
  data = Data();
}
Put(data);