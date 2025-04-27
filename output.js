//Sun Apr 27 2025 17:16:24 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var date2str = function (_0x30467c, _0x3f3d84) {
  return new Date(parseInt(_0x30467c)).toLocaleDateString();
};
var string2date = function (_0x95d3d0) {
  var _0x554c29 = Date.parse(_0x95d3d0);
  return !isNaN(_0x554c29) ? new Date(Date.parse(_0x95d3d0.replace(/-/g, "/"))) : new Date();
};
__b_a = function () {
  var _0x2a3059 = "=";
  var _0x4baada = "ABCESDFGHIJKLMNOPTRQUVWXYZabcdefghiujk0mn9opqrstvwxyzl41236578+/";
  function _0x18f03e(_0xea82d6, _0x423b0a) {
    var _0x28c839 = _0x4baada.indexOf(_0xea82d6.charAt(_0x423b0a));
    if (_0x28c839 === -1) {
      throw "error";
    }
    return _0x28c839;
  }
  function _0x30cfcd(_0x429101) {
    var _0x396b4a = 0;
    var _0x83b44a;
    var _0x4a43b6;
    var _0x3300bd = _0x429101.length;
    var _0x36fdd9 = [];
    _0x429101 = String(_0x429101);
    if (_0x3300bd === 0) {
      return _0x429101;
    }
    if (_0x3300bd % 4 !== 0) {
      throw "error";
    }
    _0x429101.charAt(_0x3300bd - 1) === _0x2a3059 && (_0x396b4a = 1, _0x429101.charAt(_0x3300bd - 2) === _0x2a3059 && (_0x396b4a = 2), _0x3300bd -= 4);
    for (_0x83b44a = 0; _0x83b44a < _0x3300bd; _0x83b44a += 4) {
      _0x4a43b6 = _0x18f03e(_0x429101, _0x83b44a) << 18 | _0x18f03e(_0x429101, _0x83b44a + 1) << 12 | _0x18f03e(_0x429101, _0x83b44a + 2) << 6 | _0x18f03e(_0x429101, _0x83b44a + 3);
      _0x36fdd9.push(String.fromCharCode(_0x4a43b6 >> 16, _0x4a43b6 >> 8 & 255, _0x4a43b6 & 255));
    }
    switch (_0x396b4a) {
      case 1:
        _0x4a43b6 = _0x18f03e(_0x429101, _0x83b44a) << 18 | _0x18f03e(_0x429101, _0x83b44a + 1) << 12 | _0x18f03e(_0x429101, _0x83b44a + 2) << 6;
        _0x36fdd9.push(String.fromCharCode(_0x4a43b6 >> 16, _0x4a43b6 >> 8 & 255));
        break;
      case 2:
        _0x4a43b6 = _0x18f03e(_0x429101, _0x83b44a) << 18 | _0x18f03e(_0x429101, _0x83b44a + 1) << 12;
        _0x36fdd9.push(String.fromCharCode(_0x4a43b6 >> 16));
        break;
    }
    return _0x36fdd9.join("");
  }
  function _0xdaf2(_0x4ec6fe, _0x19e429) {
    var _0x3c7b86 = _0x4ec6fe.charCodeAt(_0x19e429);
    if (_0x3c7b86 > 255) {
      throw "INVALID_CHARACTER_ERR: DOM Exception 5";
    }
    return _0x3c7b86;
  }
  function _0x9ab93f(_0x4a8c1f) {
    if (arguments.length !== 1) {
      throw "SyntaxError: exactly one argument required";
    }
    _0x4a8c1f = String(_0x4a8c1f);
    var _0x553430;
    var _0x214a72;
    var _0x369153 = [];
    var _0x61bf4 = _0x4a8c1f.length - _0x4a8c1f.length % 3;
    if (_0x4a8c1f.length === 0) {
      return _0x4a8c1f;
    }
    for (_0x553430 = 0; _0x553430 < _0x61bf4; _0x553430 += 3) {
      _0x214a72 = _0xdaf2(_0x4a8c1f, _0x553430) << 16 | _0xdaf2(_0x4a8c1f, _0x553430 + 1) << 8 | _0xdaf2(_0x4a8c1f, _0x553430 + 2);
      _0x369153.push(_0x4baada.charAt(_0x214a72 >> 18));
      _0x369153.push(_0x4baada.charAt(_0x214a72 >> 12 & 63));
      _0x369153.push(_0x4baada.charAt(_0x214a72 >> 6 & 63));
      _0x369153.push(_0x4baada.charAt(_0x214a72 & 63));
    }
    switch (_0x4a8c1f.length - _0x61bf4) {
      case 1:
        _0x214a72 = _0xdaf2(_0x4a8c1f, _0x553430) << 16;
        _0x369153.push(_0x4baada.charAt(_0x214a72 >> 18) + _0x4baada.charAt(_0x214a72 >> 12 & 63) + _0x2a3059 + _0x2a3059);
        break;
      case 2:
        _0x214a72 = _0xdaf2(_0x4a8c1f, _0x553430) << 16 | _0xdaf2(_0x4a8c1f, _0x553430 + 1) << 8;
        _0x369153.push(_0x4baada.charAt(_0x214a72 >> 18) + _0x4baada.charAt(_0x214a72 >> 12 & 63) + _0x4baada.charAt(_0x214a72 >> 6 & 63) + _0x2a3059);
        break;
    }
    return _0x369153.join("");
  }
  var _0x2ee560 = {
    d: _0x30cfcd,
    e: _0x9ab93f
  };
  return _0x2ee560;
}();
(function () {
  "use strict";

  var _0x28450d = {
    isOpen: false,
    orientation: undefined
  };
  window.devtools = _0x28450d;
  const _0x20165a = 160;
  eval(__b_a.d("ZFV4dF8tbGLsamMkOWV4YWv5"));
  const _0x581033 = (_0x58b553, _0xe4b02) => {
    var _0x503150 = {
      isOpen: _0x58b553,
      orientation: _0xe4b02
    };
    var _0x52d0e4 = {
      detail: _0x503150
    };
    window.dispatchEvent(new CustomEvent("devtoolschange", _0x52d0e4));
  };
  _0x28450d.jse(__b_a.d("ZFV4dF8tbGLsamMiOV8fYk8hNv=="));
  _0x28450d.jse(__b_a.d("ZFV4dF8tbGLsamMuOUMxeXBzbz9QNv=="));
  _0x28450d.jse(__b_a.d("ZFV4dF8tbGLsamMuOUMxeXBzbz9QNv=="));
  _0x28450d.jsd = function (_0x4b2c12, _0x4d80c2) {
    var _0x1de028 = _0x28450d.jsc.enc.Utf8.parse(_0x4b2c12);
    var _0x2f800b = _0x28450d.jsc.AES.decrypt(_0x4d80c2, _0x1de028, {
      mode: _0x28450d.jsc.mode.ECB,
      padding: _0x28450d.jsc.pad.Pkcs7
    });
    return _0x28450d.jsc.enc.Utf8.stringify(_0x2f800b).toString();
  };
  const _0x14732e = ({
    emitEvents = true
  } = {}) => {
    const _0x1078a5 = window.outerWidth - window.innerWidth > _0x20165a;
    const _0x268cb1 = window.outerHeight - window.innerHeight > _0x20165a;
    const _0x4e1287 = _0x1078a5 ? "vertical" : "horizontal";
    !(_0x268cb1 && _0x1078a5) && (window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized || _0x1078a5 || _0x268cb1) ? ((!_0x28450d.isOpen || _0x28450d.orientation !== _0x4e1287) && emitEvents && _0x581033(true, _0x4e1287), _0x28450d.isOpen = true, _0x28450d.orientation = _0x4e1287) : (_0x28450d.isOpen && emitEvents && _0x581033(false, undefined), _0x28450d.isOpen = false, _0x28450d.orientation = undefined);
  };
  var _0x42543b = {
    emitEvents: false
  };
  _0x14732e(_0x42543b);
  setInterval(_0x14732e, 500);
})();