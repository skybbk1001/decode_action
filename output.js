//Tue Apr 08 2025 01:34:43 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var 易经系统 = (() => {
  var _0x568547 = Array.from({
      "length": 64
    }, (_0x2a7567, _0x1a2bbc) => String.fromCodePoint(19904 + _0x1a2bbc)),
    _0x3922e5 = ["⚊", "⚋", "⚌", "⚍", "⚎", "⚏"],
    _0x5a62da = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
    _0x2ce72a = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
    _0x2cefc2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    _0x6db695 = {
      "utf8转字节"(_0x53d8ea) {
        var _0x4df879 = [];
        for (let _0x1b391f = 0; _0x1b391f < _0x53d8ea.length; _0x1b391f++) {
          {
            let _0x4a33f9 = _0x53d8ea.charCodeAt(_0x1b391f);
            if (_0x4a33f9 >= 55296 && _0x4a33f9 <= 56319) {
              {
                var _0x385abb = _0x53d8ea.charCodeAt(_0x1b391f + 1);
                _0x385abb >= 56320 && _0x385abb <= 57343 && (_0x4a33f9 = (_0x4a33f9 - 55296) * 1024 + (_0x385abb - 56320) + 65536, _0x1b391f++);
              }
            }
            if (_0x4a33f9 < 128) _0x4df879.push(_0x4a33f9);else {
              if (_0x4a33f9 < 2048) {
                _0x4df879.push(192 | _0x4a33f9 >> 6);
                _0x4df879.push(128 | _0x4a33f9 & 63);
              } else _0x4a33f9 < 65536 ? (_0x4df879.push(224 | _0x4a33f9 >> 12), _0x4df879.push(128 | _0x4a33f9 >> 6 & 63), _0x4df879.push(128 | _0x4a33f9 & 63)) : (_0x4df879.push(240 | _0x4a33f9 >> 18), _0x4df879.push(128 | _0x4a33f9 >> 12 & 63), _0x4df879.push(128 | _0x4a33f9 >> 6 & 63), _0x4df879.push(128 | _0x4a33f9 & 63));
            }
          }
        }
        return _0x4df879;
      },
      "字节转utf8"(_0x2e138d) {
        {
          let _0x27ee7a = "",
            _0x1410f8 = 0;
          while (_0x1410f8 < _0x2e138d.length) {
            var _0x30dd02 = _0x2e138d[_0x1410f8++];
            if (_0x30dd02 < 128) {
              _0x27ee7a += String.fromCharCode(_0x30dd02);
            } else {
              if (_0x30dd02 < 224) {
                var _0x5e1f60 = _0x2e138d[_0x1410f8++];
                _0x27ee7a += String.fromCharCode((_0x30dd02 & 31) << 6 | _0x5e1f60 & 63);
              } else {
                if (_0x30dd02 < 240) {
                  var _0x5e1f60 = _0x2e138d[_0x1410f8++],
                    _0x296e78 = _0x2e138d[_0x1410f8++];
                  _0x27ee7a += String.fromCharCode((_0x30dd02 & 15) << 12 | (_0x5e1f60 & 63) << 6 | _0x296e78 & 63);
                } else {
                  {
                    var _0x5e1f60 = _0x2e138d[_0x1410f8++],
                      _0x296e78 = _0x2e138d[_0x1410f8++],
                      _0x15e141 = _0x2e138d[_0x1410f8++],
                      _0x31f318 = (_0x30dd02 & 7) << 18 | (_0x5e1f60 & 63) << 12 | (_0x296e78 & 63) << 6 | _0x15e141 & 63;
                    _0x27ee7a += String.fromCodePoint(_0x31f318);
                  }
                }
              }
            }
          }
          return _0x27ee7a;
        }
      },
      "base64编码"(_0x44df78) {
        let _0x2d63bb = "";
        for (let _0x1daefc = 0; _0x1daefc < _0x44df78.length; _0x1daefc += 3) {
          var _0x51a7db = _0x44df78[_0x1daefc],
            _0x47cdff = _0x44df78[_0x1daefc + 1] || 0,
            _0x5053ed = _0x44df78[_0x1daefc + 2] || 0,
            _0x1aa606 = _0x51a7db << 16 | _0x47cdff << 8 | _0x5053ed;
          _0x2d63bb += _0x2cefc2[_0x1aa606 >> 18 & 63];
          _0x2d63bb += _0x2cefc2[_0x1aa606 >> 12 & 63];
          _0x2d63bb += _0x2cefc2[_0x1aa606 >> 6 & 63];
          _0x2d63bb += _0x2cefc2[_0x1aa606 & 63];
        }
        return _0x2d63bb;
      },
      "base64解码"(_0x3643ff) {
        {
          var _0x27f507 = [];
          _0x3643ff = _0x3643ff.replace(/[^A-Za-z0-9+/]/g, "");
          for (let _0x23dd8f = 0; _0x23dd8f < _0x3643ff.length; _0x23dd8f += 4) {
            {
              var _0x52f6a4 = _0x2cefc2.indexOf(_0x3643ff[_0x23dd8f]),
                _0x5d38d7 = _0x2cefc2.indexOf(_0x3643ff[_0x23dd8f + 1]),
                _0x3aec68 = _0x2cefc2.indexOf(_0x3643ff[_0x23dd8f + 2]),
                _0xcea560 = _0x2cefc2.indexOf(_0x3643ff[_0x23dd8f + 3]),
                _0x2288bf = _0x52f6a4 << 18 | _0x5d38d7 << 12 | _0x3aec68 << 6 | _0xcea560;
              _0x27f507.push(_0x2288bf >> 16 & 255);
              _0x27f507.push(_0x2288bf >> 8 & 255);
              _0x27f507.push(_0x2288bf & 255);
            }
          }
          return _0x27f507;
        }
      }
    };
  function _0x21228b(_0x3875f3) {
    return Math.floor(Math.random() * _0x3875f3);
  }
  var _0x2d9112 = {
    "甲": ["子", "寅", "辰", "午", "申", "戌"],
    "乙": ["丑", "卯", "巳", "未", "酉", "亥"],
    "丙": ["子", "寅", "辰", "午", "申", "戌"],
    "丁": ["丑", "卯", "巳", "未", "酉", "亥"],
    "戊": ["寅", "辰", "午", "申", "戌", "子"],
    "己": ["卯", "巳", "未", "酉", "亥", "丑"],
    "庚": ["辰", "午", "申", "戌", "子", "寅"],
    "辛": ["巳", "未", "酉", "亥", "丑", "卯"],
    "壬": ["午", "申", "戌", "子", "寅", "辰"],
    "癸": ["未", "酉", "亥", "丑", "卯", "巳"]
  };
  return {
    "生成卦文"(_0x4c83be) {
      try {
        var _0x2d189f = Array.from({
            "length": 4
          }, () => {
            {
              let _0x88b9e6, _0x436f48;
              do {
                _0x88b9e6 = _0x5a62da[_0x21228b(10)];
                _0x436f48 = _0x2d9112[_0x88b9e6][_0x21228b(6)];
              } while (!_0x436f48);
              return _0x88b9e6 + _0x436f48;
            }
          }),
          _0x1a3eef = _0x21228b(64),
          _0x1b4cde = _0x21228b(6),
          _0x2f781f = _0x3922e5[_0x21228b(6)],
          _0x19001b = new Map(_0x2cefc2.split("").map((_0x4a7077, _0x5de9f2) => [_0x4a7077, _0x568547[(_0x5de9f2 + _0x1a3eef) % 64]]));
        let _0x24a526 = _0x6db695["utf8转字节"](_0x4c83be);
        var _0x11a8a1 = (3 - _0x24a526.length % 3) % 3;
        for (let _0x4ace9e = 0; _0x4ace9e < _0x11a8a1; _0x4ace9e++) {
          _0x24a526.push(_0x11a8a1);
        }
        var _0x3193b0 = _0x6db695["base64编码"](_0x24a526);
        let _0x395edd = Array.from(_0x3193b0, _0x412103 => _0x19001b.get(_0x412103) || "=").join("");
        _0x395edd = _0x395edd.slice(0, _0x1b4cde) + _0x2f781f + _0x395edd.slice(_0x1b4cde);
        return [_0x395edd, "〒" + _0x2d189f.join("|"), "〄" + _0x568547[_0x1a3eef] + _0x568547[_0x1b4cde]].join("");
      } catch (_0x1d1fe2) {
        return "〒 卦文异常：" + _0x1d1fe2;
      }
    },
    "解读卦文"(_0x9c5639) {
      try {
        {
          var _0x4c923c = _0x9c5639.split(/〒|〄/g);
          if (_0x4c923c.length !== 3) throw "结构残缺";
          var [_0x21bd9a, _0x4d7af6, _0x23e946] = _0x4c923c,
            _0x2d56b7 = _0x568547.indexOf(_0x23e946[0]),
            _0xda2216 = _0x568547.indexOf(_0x23e946[1]);
          if (_0x2d56b7 === -1 || _0xda2216 === -1) throw "非法参数";
          var _0xa81e22 = _0x4d7af6.split("|");
          if (!_0xa81e22.every(_0x6000f => {
            var _0x1865f9 = _0x6000f[0],
              _0x2a6426 = _0x6000f[1];
            return _0x2d9112[_0x1865f9]?.["includes"](_0x2a6426);
          })) throw "非法四柱";
          var _0x2ebfc2 = new Map(_0x2cefc2.split("").map((_0x14d2f5, _0x54a5cb) => [_0x568547[(_0x54a5cb + _0x2d56b7) % 64], _0x14d2f5])),
            _0x3dad3a = Array.from(_0x21bd9a).filter(_0x498bad => !_0x3922e5.includes(_0x498bad)).map(_0x346174 => _0x2ebfc2.get(_0x346174) || "").join("");
          let _0x45de15 = _0x6db695["base64解码"](_0x3dad3a);
          if (_0x45de15.length > 0) {
            var _0x5915cd = _0x45de15[_0x45de15.length - 1];
            if (_0x5915cd > 0 && _0x5915cd <= 3) {
              {
                let _0xa9b9c = true;
                for (let _0x303de6 = 1; _0x303de6 <= _0x5915cd; _0x303de6++) {
                  if (_0x45de15[_0x45de15.length - _0x303de6] !== _0x5915cd) {
                    {
                      _0xa9b9c = false;
                      break;
                    }
                  }
                }
                _0xa9b9c && (_0x45de15 = _0x45de15.slice(0, -_0x5915cd));
              }
            }
          }
          return _0x6db695["字节转utf8"](_0x45de15);
        }
      } catch (_0xecf54b) {
        return "〒 解读失败：" + _0xecf54b;
      }
    }
  };
})();