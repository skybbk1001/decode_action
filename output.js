//Fri Aug 01 2025 16:49:36 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  var _0x53e814 = {
    477: function () {},
    4131: function (_0x40589e, _0x2d8c00, _0x30a2b5) {
      "use strict";

      _0x30a2b5.d(_0x2d8c00, {
        g: function () {
          return _0x279188;
        },
        r: function () {
          {
            return _0x478b4e;
          }
        }
      });
      _0x30a2b5(8111);
      _0x30a2b5(1701);
      _0x30a2b5(8237);
      _0x30a2b5(4603);
      _0x30a2b5(7566);
      _0x30a2b5(8721);
      var _0x2aa467 = _0x30a2b5(3169);
      var _0x40c647 = _0x30a2b5.n(_0x2aa467);
      function _0x279188(_0x3940a2, _0x10bb00) {
        const _0x32a6c6 = Date.now();
        const _0x3f7bc6 = _0x2aa467.lib.WordArray.random(16).toString();
        let _0xc360c0 = _0x3940a2.url;
        if (!_0xc360c0.startsWith("http")) {
          const _0xe2b39c = _0x3940a2.baseURL || window.location.origin;
          _0xc360c0 = new URL(_0xc360c0, _0xe2b39c).href;
        }
        const _0xd6a5a6 = _0x3940a2.method.toUpperCase();
        const _0x18c077 = new URL(_0xc360c0).pathname;
        let _0x4b1044 = {};
        if (_0x3940a2.url.includes("?")) {
          const _0x3dfd95 = _0x3940a2.url.split("?")[1];
          const _0x3f7560 = new URLSearchParams(_0x3dfd95);
          for (const [_0x4c2a53, _0x349ac1] of _0x3f7560.entries()) _0x4b1044[_0x4c2a53] = _0x349ac1;
        }
        const _0x41b947 = _0x3940a2.params ? Object.entries(_0x3940a2.params).reduce((_0x4d6bd6, [_0x1fb08b, _0x1cfe09]) => (_0x4d6bd6[_0x1fb08b] = String(_0x1cfe09), _0x4d6bd6), {}) : {};
        const _0x7645db = {
          ..._0x4b1044,
          ..._0x41b947
        };
        const _0x55aaa6 = _0x112d06(_0x7645db);
        const _0xb134d7 = _0x3940a2.data ? _0x112d06(_0x3940a2.data) : {};
        const _0x6511a0 = [_0xd6a5a6, _0x18c077, JSON.stringify(_0x55aaa6), JSON.stringify(_0xb134d7), _0x32a6c6, _0x3f7bc6].join("|");
        const _0x1b0915 = (0, _0x2aa467.HmacSHA256)(_0x6511a0, _0x10bb00).toString();
        return ";" + _0x1b0915 + ";" + _0x32a6c6 + ";" + _0x3f7bc6;
      }
      function _0x112d06(_0xb6df9c) {
        return "object" !== typeof _0xb6df9c || null === _0xb6df9c ? _0xb6df9c : Array.isArray(_0xb6df9c) ? _0xb6df9c.map(_0x112d06) : Object.keys(_0xb6df9c).sort().reduce((_0x16acf2, _0x4b2361) => (_0x16acf2[_0x4b2361] = _0x112d06(_0xb6df9c[_0x4b2361]), _0x16acf2), {});
      }
      const _0x478b4e = {
        encrypt(_0x4779cc, _0x4aaf59) {
          const _0x1639e7 = 60000 * Math.floor(Date.now() / 60000);
          const _0x3991ea = _0x4aaf59 + _0x1639e7;
          const _0x3956f2 = _0x40c647().SHA256(_0x3991ea);
          const _0x5b4613 = _0x40c647().lib.WordArray.random(16);
          const _0x537486 = _0x40c647().AES.encrypt(_0x4779cc, _0x3956f2, {
            iv: _0x5b4613,
            mode: _0x40c647().mode.CBC,
            padding: _0x40c647().pad.Pkcs7
          });
          const _0x5c1613 = _0x5b4613.concat(_0x537486.ciphertext);
          return _0x5c1613.toString(_0x40c647().enc.Base64);
        },
        decrypt(_0x535b86, _0x48f856) {
          try {
            {
              const _0x5ae885 = _0x40c647().enc.Base64.parse(_0x535b86);
              const _0x4e1a60 = _0x40c647().lib.WordArray.create(_0x5ae885.words.slice(0, 4));
              const _0x47a1cd = _0x40c647().lib.WordArray.create(_0x5ae885.words.slice(4));
              const _0x63e305 = [60000 * Math.floor(Date.now() / 60000), 60000 * Math.floor(Date.now() / 60000) - 60000];
              for (const _0x42302d of _0x63e305) try {
                {
                  var _0x43b6ee = {
                    ciphertext: _0x47a1cd
                  };
                  const _0xdf48a2 = _0x48f856 + _0x42302d;
                  const _0x1c67b5 = _0x40c647().SHA256(_0xdf48a2);
                  const _0x2d978c = _0x40c647().AES.decrypt(_0x43b6ee, _0x1c67b5, {
                    iv: _0x4e1a60,
                    mode: _0x40c647().mode.CBC,
                    padding: _0x40c647().pad.Pkcs7
                  });
                  const _0x239626 = _0x2d978c.toString(_0x40c647().enc.Utf8);
                  if (_0x239626 && _0x239626.length > 0) {
                    return _0x239626;
                  }
                }
              } catch (_0x2cf558) {
                {
                  console.warn("时间戳 " + _0x42302d + " 解密失败", _0x2cf558);
                }
              }
              throw new Error("所有密钥尝试失败");
            }
          } catch (_0x836fc4) {
            {
              throw new Error("解密过程错误: " + _0x836fc4.message);
            }
          }
        }
      };
    },
    4161: function (_0x2e8114, _0x1b77ca, _0x940843) {
      "use strict";

      var _0x10dab8 = _0x940843(5130);
      var _0x37c804 = _0x940843(6768);
      var _0x3642ae = _0x940843(4232);
      const _0x32e494 = {
        class: "novel-app"
      };
      const _0x50f221 = {
        class: "header"
      };
      const _0x335b28 = {
        key: 0,
        class: "container"
      };
      const _0x304757 = {
        class: "main-nav"
      };
      const _0x38a3dc = {
        key: 0
      };
      const _0x10f924 = {
        key: 1
      };
      const _0x3fa9f0 = {
        key: 2
      };
      const _0x24952a = {
        key: 3
      };
      const _0x5665e4 = {
        key: 4
      };
      const _0x35ac61 = {
        key: 1,
        class: "search-login"
      };
      const _0x5b44f5 = {
        key: 0,
        class: "user-menu"
      };
      const _0x3fe4cd = {
        class: "main-content"
      };
      function _0x52b51c(_0x406165, _0x434841, _0x420727, _0x441863, _0x27c6ad, _0x1b805a) {
        {
          const _0x231fb7 = (0, _0x37c804.g2)("router-view");
          var _0x5ef0ab = {
            class: "username"
          };
          (0, _0x37c804.uX)();
          return (0, _0x37c804.CE)("div", _0x32e494, [(0, _0x37c804.Lk)("header", _0x50f221, [_0x27c6ad.showApp ? ((0, _0x37c804.uX)(), (0, _0x37c804.CE)("div", _0x335b28, [_0x27c6ad.isLoginTag ? ((0, _0x37c804.uX)(), (0, _0x37c804.CE)("div", {
            key: 0,
            class: "logo",
            onClick: _0x434841[0] || (_0x434841[0] = (0, _0x10dab8.D$)(_0x35ec62 => _0x1b805a.urlPush("/"), ["stop"]))
          }, _0x434841[15] || (_0x434841[15] = [(0, _0x37c804.Lk)("span", null, "📖 汉化论坛", -1)]))) : (0, _0x37c804.Q3)("", true), (0, _0x37c804.Lk)("nav", _0x304757, [(0, _0x37c804.Lk)("ul", null, [_0x27c6ad.isLoginTag ? ((0, _0x37c804.uX)(), (0, _0x37c804.CE)("li", _0x38a3dc, [(0, _0x37c804.Lk)("a", {
            href: "#",
            class: (0, _0x3642ae.C4)({
              active: "/" === _0x27c6ad.activeRoute
            }),
            onClick: _0x434841[1] || (_0x434841[1] = (0, _0x10dab8.D$)(_0x2ef579 => _0x1b805a.urlPush("/"), ["stop"]))
          }, "社区", 2)])) : (0, _0x37c804.Q3)("", true), _0x27c6ad.isLoginTag ? ((0, _0x37c804.uX)(), (0, _0x37c804.CE)("li", _0x10f924, [(0, _0x37c804.Lk)("a", {
            href: "#",
            class: (0, _0x3642ae.C4)({
              active: "/favorites" === _0x27c6ad.activeRoute
            }),
            onClick: _0x434841[2] || (_0x434841[2] = (0, _0x10dab8.D$)(_0x5b1bc3 => _0x1b805a.urlPush("/favorites"), ["stop"]))
          }, "收藏", 2)])) : (0, _0x37c804.Q3)("", true), _0x27c6ad.isLoginTag ? ((0, _0x37c804.uX)(), (0, _0x37c804.CE)("li", _0x3fa9f0, [(0, _0x37c804.Lk)("a", {
            href: "#",
            class: (0, _0x3642ae.C4)({
              active: "/webLibrary" === _0x27c6ad.activeRoute
            }),
            onClick: _0x434841[3] || (_0x434841[3] = (0, _0x10dab8.D$)(_0x17efe8 => _0x1b805a.urlPush("/webLibrary"), ["stop"]))
          }, "看书", 2)])) : (0, _0x37c804.Q3)("", true), _0x27c6ad.isLoginTag ? ((0, _0x37c804.uX)(), (0, _0x37c804.CE)("li", _0x24952a, [(0, _0x37c804.Lk)("a", {
            href: "#",
            class: (0, _0x3642ae.C4)({
              active: "/uploadNovelDetail" === _0x27c6ad.activeRoute
            }),
            onClick: _0x434841[4] || (_0x434841[4] = (0, _0x10dab8.D$)((..._0x64d846) => _0x1b805a.uploadNovel && _0x1b805a.uploadNovel(..._0x64d846), ["stop"]))
          }, "上传", 2)])) : (0, _0x37c804.Q3)("", true), _0x27c6ad.isLoginTag ? ((0, _0x37c804.uX)(), (0, _0x37c804.CE)("li", _0x5665e4, [(0, _0x37c804.Lk)("a", {
            href: "#",
            class: (0, _0x3642ae.C4)({
              active: "/novelPlatform" === _0x27c6ad.activeRoute
            }),
            onClick: _0x434841[5] || (_0x434841[5] = (0, _0x10dab8.D$)(_0x50fc5c => _0x1b805a.urlPush("/novelPlatform"), ["stop"]))
          }, "汉化", 2)])) : (0, _0x37c804.Q3)("", true)])]), _0x27c6ad.hideSearch ? ((0, _0x37c804.uX)(), (0, _0x37c804.CE)("div", _0x35ac61, [_0x27c6ad.isLoginTag ? ((0, _0x37c804.uX)(), (0, _0x37c804.CE)("div", {
            key: 0,
            class: "search-box",
            onClick: _0x434841[7] || (_0x434841[7] = (..._0x2ec295) => _0x1b805a.onSearch && _0x1b805a.onSearch(..._0x2ec295))
          }, [(0, _0x37c804.bo)((0, _0x37c804.Lk)("input", {
            "onUpdate:modelValue": _0x434841[6] || (_0x434841[6] = _0x2ef208 => _0x27c6ad.searchInput = _0x2ef208),
            type: "text",
            placeholder: "请输入书名或原书名"
          }, null, 512), [[_0x10dab8.Jo, _0x27c6ad.searchInput]]), _0x434841[16] || (_0x434841[16] = (0, _0x37c804.Lk)("button", {
            class: "search-btn"
          }, "🔎", -1))])) : (0, _0x37c804.Q3)("", true), _0x27c6ad.isAuthenticated ? ((0, _0x37c804.uX)(), (0, _0x37c804.CE)("div", {
            key: 1,
            class: "user-profile",
            onClick: _0x434841[13] || (_0x434841[13] = (..._0x2ea4f6) => _0x1b805a.toggleMenu && _0x1b805a.toggleMenu(..._0x2ea4f6))
          }, [_0x434841[22] || (_0x434841[22] = (0, _0x37c804.Lk)("span", {
            class: "username"
          }, "用户", -1)), _0x434841[23] || (_0x434841[23] = (0, _0x37c804.Lk)("i", {
            class: "dropdown-icon"
          }, null, -1)), _0x27c6ad.isMenuOpen ? ((0, _0x37c804.uX)(), (0, _0x37c804.CE)("div", _0x5b44f5, [(0, _0x37c804.Lk)("div", {
            class: "menu-item",
            onClick: _0x434841[8] || (_0x434841[8] = (0, _0x10dab8.D$)((..._0xdcd0b8) => _0x1b805a.exchangeMember && _0x1b805a.exchangeMember(..._0xdcd0b8), ["stop"]))
          }, _0x434841[17] || (_0x434841[17] = [(0, _0x37c804.Lk)("span", null, "📒️ 个人信息", -1)])), (0, _0x37c804.Lk)("div", {
            class: "menu-item",
            onClick: _0x434841[9] || (_0x434841[9] = (0, _0x10dab8.D$)(_0x4f57b3 => _0x1b805a.urlPush("/webHistory"), ["stop"]))
          }, _0x434841[18] || (_0x434841[18] = [(0, _0x37c804.Lk)("span", null, "📝 历史记录", -1)])), (0, _0x37c804.Lk)("div", {
            class: "menu-item",
            onClick: _0x434841[10] || (_0x434841[10] = (0, _0x10dab8.D$)(_0x423f61 => _0x1b805a.urlPush("/tagFilter"), ["stop"]))
          }, _0x434841[19] || (_0x434841[19] = [(0, _0x37c804.Lk)("span", null, "🏷️ 标签过滤", -1)])), (0, _0x37c804.Lk)("div", {
            class: "menu-item",
            onClick: _0x434841[11] || (_0x434841[11] = (0, _0x10dab8.D$)(_0x4b89de => _0x1b805a.urlPush("/webNote"), ["stop"]))
          }, _0x434841[20] || (_0x434841[20] = [(0, _0x37c804.Lk)("span", null, "📤 笔记", -1)])), (0, _0x37c804.Lk)("div", {
            class: "menu-item",
            onClick: _0x434841[12] || (_0x434841[12] = (0, _0x10dab8.D$)((..._0xc8d5e7) => _0x1b805a.logout && _0x1b805a.logout(..._0xc8d5e7), ["stop"]))
          }, _0x434841[21] || (_0x434841[21] = [(0, _0x37c804.Lk)("span", null, "🔚 退出", -1)]))])) : (0, _0x37c804.Q3)("", true)])) : ((0, _0x37c804.uX)(), (0, _0x37c804.CE)("div", {
            key: 2,
            class: "user-profile",
            onClick: _0x434841[14] || (_0x434841[14] = (..._0x32180c) => _0x1b805a.handleLogin && _0x1b805a.handleLogin(..._0x32180c))
          }, _0x434841[24] || (_0x434841[24] = [(0, _0x37c804.Lk)("span", _0x5ef0ab, "登录", -1)])))])) : (0, _0x37c804.Q3)("", true)])) : (0, _0x37c804.Q3)("", true)]), (0, _0x37c804.Lk)("main", _0x3fe4cd, [(0, _0x37c804.bF)(_0x231fb7)])]);
        }
      }
      _0x940843(4114);
      var _0x4a3d5d = _0x940843(7682);
      var _0x4c540f = {
        name: "NovelApp",
        data() {
          var _0x2e9195 = {
            isLoginTag: false,
            searchInput: null,
            isAuthenticated: false,
            activeRoute: "/",
            isMenuOpen: false,
            showApp: true,
            hideSearch: true
          };
          return _0x2e9195;
        },
        watch: {
          $route(_0x29c535) {
            {
              this.showApp = !_0x29c535.meta.hideApp;
              this.hideSearch = !_0x29c535.meta.hideSearch;
              this.activeRoute = _0x29c535.path;
              this.isLogin();
            }
          }
        },
        created() {
          this.showApp = !this.$route.meta.hideApp;
          this.activeRoute = this.$route.path;
        },
        methods: {
          isLogin() {
            _0x4a3d5d.Ay.get("/api/auth/isLogin").then(_0x25e7a8 => {
              this.isLoginTag = _0x25e7a8.data;
            }).catch(() => {
              this.isLoginTag = false;
            }).finally(() => {
              {
                localStorage.setItem("isLoginTag", this.isLoginTag);
              }
            });
          },
          urlPush(_0x4d8418) {
            this.activeRoute = _0x4d8418;
            this.$router.push(_0x4d8418);
          },
          onSearch() {
            var _0x4615d9 = {
              name: "WebSearch"
            };
            this.$router.push(_0x4615d9);
          },
          async handleLogin() {
            {
              this.$router.push("/login");
            }
          },
          toggleMenu() {
            {
              this.isMenuOpen = !this.isMenuOpen;
            }
          },
          exchangeMember() {
            var _0x5b26b9 = {
              name: "UserDetail"
            };
            this.isMenuOpen = false;
            this.$router.push(_0x5b26b9);
          },
          uploadNovel() {
            var _0x1634fb = {
              name: "UploadNovelDetail"
            };
            this.isMenuOpen = false;
            this.$router.push(_0x1634fb);
          },
          logout() {
            {
              this.isAuthenticated = false;
              this.isMenuOpen = false;
              localStorage.removeItem("Authorization");
              this.$router.push("/login");
            }
          }
        },
        mounted() {
          {
            var _0x1faa09 = {
              top: 0,
              behavior: "smooth"
            };
            window.scrollTo(_0x1faa09);
            localStorage.getItem("Authorization") && (this.isAuthenticated = true);
            document.addEventListener("click", _0x217724 => {
              {
                _0x217724.target.closest(".user-profile") || (this.isMenuOpen = false);
              }
            });
          }
        }
      };
      var _0x1863ff = _0x940843(1241);
      const _0x164eaf = (0, _0x1863ff.A)(_0x4c540f, [["render", _0x52b51c], ["__scopeId", "data-v-9969885a"]]);
      var _0x223997 = _0x164eaf;
      var _0x28d620 = _0x940843(6071);
      _0x940843(4188);
      var _0x154b1b = _0x940843(1387);
      var _0x274160 = _0x940843(1219);
      var _0x27e9ad = {
        hideApp: true
      };
      var _0x9e2979 = {
        hideSearch: true
      };
      var _0x5a4807 = {
        hideSearch: true
      };
      var _0x4c1312 = {
        hideSearch: true
      };
      var _0x11b54c = {
        hideSearch: true
      };
      var _0x5dfe5d = {
        hideApp: true
      };
      var _0x137d70 = {
        hideSearch: true
      };
      var _0x3cef6f = {
        hideSearch: true
      };
      var _0x4df75f = {
        hideSearch: true
      };
      var _0x2cda45 = {
        hideSearch: true
      };
      var _0x3b201b = {
        hideSearch: true
      };
      var _0x548973 = {
        hideApp: true
      };
      const _0x201005 = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 4882));
      const _0x42c312 = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 6401));
      const _0x4e2a08 = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 2685));
      const _0x3f6539 = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 7188));
      const _0x1dd510 = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 4538));
      const _0x28290d = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 5435));
      const _0x3e3fe5 = () => _0x940843.e(242).then(_0x940843.bind(_0x940843, 4383));
      const _0x825619 = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 9396));
      const _0x34a693 = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 8713));
      const _0x289541 = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 9412));
      const _0x396052 = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 5068));
      const _0x2b5e4a = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 9376));
      const _0x1579b1 = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 8296));
      const _0xf44d19 = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 9010));
      const _0x420cf5 = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 7632));
      const _0x24e357 = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 7759));
      const _0x47d7e8 = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 7957));
      const _0x36dd3d = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 2108));
      const _0x2e31f3 = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 1485));
      const _0x4b2a55 = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 9542));
      const _0x56a26e = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 3485));
      const _0x395982 = () => _0x940843.e(526).then(_0x940843.bind(_0x940843, 370));
      const _0x481a9e = [{
        path: "/webLibrary",
        name: "WebLibrary",
        component: _0x201005
      }, {
        path: "/glossaryPage/:id",
        name: "GlossaryPage",
        component: _0x395982,
        meta: _0x27e9ad
      }, {
        path: "/search",
        name: "WebSearch",
        component: _0x42c312,
        meta: _0x9e2979
      }, {
        path: "/uploadNovelDetail",
        name: "UploadNovelDetail",
        component: _0x24e357,
        meta: _0x5a4807
      }, {
        path: "/uploadNovelEdit/:id",
        name: "UploadNovelEdit",
        component: _0x2e31f3,
        meta: _0x4c1312
      }, {
        path: "/uploadChapterAdmin/:id",
        name: "UploadChapterAdmin",
        component: _0x47d7e8,
        meta: _0x11b54c
      }, {
        path: "/tagFilter",
        name: "TagFilter",
        component: _0x56a26e
      }, {
        path: "/uploadChapterEdit/:id",
        name: "UploadChapterEdit",
        component: _0x36dd3d,
        meta: _0x5dfe5d
      }, {
        path: "/uploadAndShare",
        name: "UploadAndShare",
        component: _0x420cf5,
        meta: _0x137d70
      }, {
        path: "/syosetuNovel",
        name: "SyosetuNovel",
        component: _0x2b5e4a,
        meta: _0x3cef6f
      }, {
        path: "/novelPiaNovel",
        name: "NovelPiaNovel",
        component: _0xf44d19,
        meta: _0x4df75f
      }, {
        path: "/novelPlatform",
        name: "WebNovelPlatform",
        component: _0x1579b1
      }, {
        path: "/noteDetail/:id",
        name: "NoteDetail",
        component: _0x396052,
        meta: _0x2cda45
      }, {
        path: "/webNote",
        name: "WebNote",
        component: _0x289541,
        meta: _0x3b201b
      }, {
        path: "/",
        name: "RecommendationList",
        component: _0x825619
      }, {
        path: "/recommendationDetail/:id",
        name: "RecommendationDetail",
        component: _0x34a693
      }, {
        path: "/login",
        name: "WebLogin",
        component: _0x3e3fe5
      }, {
        path: "/webHistory",
        name: "WebHistory",
        component: _0x4b2a55
      }, {
        path: "/favorites",
        name: "WebFavorites",
        component: _0x4e2a08
      }, {
        path: "/chapterDetail/:id",
        name: "ChapterDetail",
        component: _0x3f6539,
        meta: _0x548973
      }, {
        path: "/novelDetail/:id",
        name: "NovelDetail",
        component: _0x1dd510
      }, {
        path: "/userDetail",
        name: "UserDetail",
        component: _0x28290d
      }];
      const _0x13a86f = (0, _0x154b1b.aE)({
        history: (0, _0x154b1b.LA)("/"),
        routes: _0x481a9e
      });
      const _0x2d946c = ["WebLogin", "WebSearch", "RecommendationList", "RecommendationDetail", "WebLibrary", "NovelDetail", "ChapterDetail"];
      const _0x3a98fe = _0x1adb45 => _0x2d946c.includes(_0x1adb45);
      _0x13a86f.beforeEach((_0x3b333d, _0x36de96, _0x1be893) => {
        let _0x197ec6 = (0, _0x4a3d5d.b4)() + (0, _0x4a3d5d.cP)() + (0, _0x4a3d5d.il)();
        if (_0x197ec6.length > 0 && !(0, _0x4a3d5d.xh)(_0x197ec6)) {
          _0x274160.nk.error("system error");
          return Promise.reject(new Error("system error"));
        }
        const _0x1040d1 = localStorage.getItem("Authorization");
        _0x1040d1 && "undefined" !== _0x1040d1 || _0x3a98fe(_0x3b333d.name) ? _0x1be893() : _0x1be893({
          name: "WebLogin"
        });
      });
      _0x13a86f.afterEach(() => {
        document.documentElement.scrollTop = 0;
      });
      var _0xaee91e = _0x13a86f;
      (0, _0x10dab8.Ef)(_0x223997).use(_0xaee91e).use(_0x28d620.A).mount("#app");
    },
    7682: function (_0x2629be, _0x513c15, _0x154266) {
      "use strict";

      _0x154266.d(_0x513c15, {
        b4: function () {
          return _0x5ba9b4;
        },
        cP: function () {
          return _0x3cf61f;
        },
        il: function () {
          return _0x15838b;
        },
        xh: function () {
          {
            return _0x4f8ac8;
          }
        }
      });
      var _0x387299 = _0x154266(4373);
      var _0x477f5e = _0x154266(1219);
      var _0x4b327a = _0x154266(4131);
      var _0x6ad471 = {
        baseURL: "https://freenovel.sbs",
        timeout: 30000
      };
      const _0x37dab9 = _0x387299.A.create(_0x6ad471);
      function _0x4f8ac8(_0x5e9187) {
        {
          return /[\u4e00-\u9fa5]/.test(_0x5e9187);
        }
      }
      function _0x3cf61f() {
        try {
          {
            const _0x1765b3 = document.evaluate("//*[@id=\"app\"]/div/header/div/div[1]/span", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            return _0x1765b3.singleNodeValue?.["textContent"] || "";
          }
        } catch (_0x577c6d) {
          return "";
        }
      }
      function _0x5ba9b4() {
        {
          try {
            {
              const _0x46e8ee = document.evaluate("//*[@id=\"app\"]/div/main/div/div[4]/div[1]/div/span[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
              return _0x46e8ee.singleNodeValue?.["textContent"] || "";
            }
          } catch (_0x564b90) {
            return "";
          }
        }
      }
      function _0x15838b() {
        try {
          {
            const _0x4a22f5 = document.evaluate("//*[@id=\"app\"]/div/main/div/nav/div/a[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            return _0x4a22f5.singleNodeValue?.["textContent"] || "";
          }
        } catch (_0x567792) {
          return "";
        }
      }
      _0x37dab9.interceptors.request.use(_0x20a7fe => {
        const _0x517234 = _0x3cf61f();
        const _0x2870d5 = _0x5ba9b4();
        const _0x50de45 = _0x15838b();
        let _0x59248d = _0x2870d5 + _0x517234 + _0x50de45;
        if (_0x59248d.length > 0 && !_0x4f8ac8(_0x59248d)) {
          _0x477f5e.nk.error("system error");
          return Promise.reject(new Error("system error"));
        }
        _0x20a7fe.url.includes("/api/auth/") && !_0x20a7fe.url.includes("/api/auth/isLogin") && localStorage.removeItem("Authorization");
        const _0x412db7 = localStorage.getItem("Authorization");
        const _0x4d7f8e = _0x412db7 || "import {computed} from \"vue\";";
        if (_0x412db7) {
          const _0x3e711f = (0, _0x4b327a.g)(_0x20a7fe, _0x4d7f8e);
          _0x20a7fe.headers.Authorization = _0x412db7 + _0x3e711f;
        }
        return _0x20a7fe;
      });
      _0x37dab9.interceptors.response.use(_0x1a8796 => (401 === _0x1a8796.status ? localStorage.removeItem("Authorization") : 502 === _0x1a8796.status && _0x477f5e.nk.error("请勿频繁刷新页面"), _0x1a8796), _0x4c76a9 => (_0x4c76a9.response && 401 === _0x4c76a9.response.status ? localStorage.removeItem("Authorization") : _0x4c76a9.response ? _0x477f5e.nk.error("" + _0x4c76a9.response.data) : _0x477f5e.nk.error("请求出错，请稍后重试"), Promise.reject(_0x4c76a9)));
      _0x513c15.Ay = _0x37dab9;
    }
  };
  var _0x3cd202 = {};
  function _0x4aad02(_0xc4a768) {
    var _0x67fbee = _0x3cd202[_0xc4a768];
    if (undefined !== _0x67fbee) {
      return _0x67fbee.exports;
    }
    var _0x48e251 = {
      exports: {}
    };
    _0x3cd202[_0xc4a768] = _0x48e251;
    var _0x17b31d = _0x3cd202[_0xc4a768];
    _0x53e814[_0xc4a768].call(_0x17b31d.exports, _0x17b31d, _0x17b31d.exports, _0x4aad02);
    return _0x17b31d.exports;
  }
  _0x4aad02.m = _0x53e814;
  (function () {
    var _0x9c34b3 = [];
    _0x4aad02.O = function (_0x2095bf, _0x507ee3, _0x297244, _0x2a4540) {
      {
        if (!_0x507ee3) {
          var _0x165b21 = Infinity;
          for (_0xd95ca9 = 0; _0xd95ca9 < _0x9c34b3.length; _0xd95ca9++) {
            _0x507ee3 = _0x9c34b3[_0xd95ca9][0];
            _0x297244 = _0x9c34b3[_0xd95ca9][1];
            _0x2a4540 = _0x9c34b3[_0xd95ca9][2];
            for (var _0x5788e8 = true, _0x3b5560 = 0; _0x3b5560 < _0x507ee3.length; _0x3b5560++) {
              (false & _0x2a4540 || _0x165b21 >= _0x2a4540) && Object.keys(_0x4aad02.O).every(function (_0x41f2f9) {
                return _0x4aad02.O[_0x41f2f9](_0x507ee3[_0x3b5560]);
              }) ? _0x507ee3.splice(_0x3b5560--, 1) : (_0x5788e8 = false, _0x2a4540 < _0x165b21 && (_0x165b21 = _0x2a4540));
            }
            if (_0x5788e8) {
              {
                _0x9c34b3.splice(_0xd95ca9--, 1);
                var _0x4665f7 = _0x297244();
                undefined !== _0x4665f7 && (_0x2095bf = _0x4665f7);
              }
            }
          }
          return _0x2095bf;
        }
        _0x2a4540 = _0x2a4540 || 0;
        for (var _0xd95ca9 = _0x9c34b3.length; _0xd95ca9 > 0 && _0x9c34b3[_0xd95ca9 - 1][2] > _0x2a4540; _0xd95ca9--) {
          _0x9c34b3[_0xd95ca9] = _0x9c34b3[_0xd95ca9 - 1];
        }
        _0x9c34b3[_0xd95ca9] = [_0x507ee3, _0x297244, _0x2a4540];
      }
    };
  })();
  (function () {
    _0x4aad02.n = function (_0x30cfb0) {
      var _0x668416 = _0x30cfb0 && _0x30cfb0.__esModule ? function () {
        {
          return _0x30cfb0.default;
        }
      } : function () {
        return _0x30cfb0;
      };
      _0x4aad02.d(_0x668416, {
        a: _0x668416
      });
      return _0x668416;
    };
  })();
  (function () {
    _0x4aad02.d = function (_0x1ce490, _0x56c66f) {
      for (var _0x35a559 in _0x56c66f) _0x4aad02.o(_0x56c66f, _0x35a559) && !_0x4aad02.o(_0x1ce490, _0x35a559) && Object.defineProperty(_0x1ce490, _0x35a559, {
        enumerable: true,
        get: _0x56c66f[_0x35a559]
      });
    };
  })();
  (function () {
    {
      _0x4aad02.f = {};
      _0x4aad02.e = function (_0x2bc500) {
        return Promise.all(Object.keys(_0x4aad02.f).reduce(function (_0x40ef0d, _0x300845) {
          _0x4aad02.f[_0x300845](_0x2bc500, _0x40ef0d);
          return _0x40ef0d;
        }, []));
      };
    }
  })();
  (function () {
    _0x4aad02.u = function (_0x78372) {
      return "js/" + {
        242: "WebLogin",
        526: "FeedBack"
      }[_0x78372] + "." + {
        242: "27689679",
        526: "e98eedbf"
      }[_0x78372] + ".js";
    };
  })();
  (function () {
    _0x4aad02.miniCssF = function (_0x23c0e0) {
      {
        return "css/" + {
          242: "WebLogin",
          526: "FeedBack"
        }[_0x23c0e0] + "." + {
          242: "3c495b56",
          526: "3c6184ca"
        }[_0x23c0e0] + ".css";
      }
    };
  })();
  (function () {
    _0x4aad02.g = function () {
      {
        if ("object" === typeof globalThis) {
          return globalThis;
        }
        try {
          return this || new Function("return this")();
        } catch (_0x3dfe0e) {
          if ("object" === typeof window) {
            return window;
          }
        }
      }
    }();
  })();
  (function () {
    {
      _0x4aad02.o = function (_0x452cbc, _0x37cc89) {
        return Object.prototype.hasOwnProperty.call(_0x452cbc, _0x37cc89);
      };
    }
  })();
  (function () {
    {
      var _0x42eb21 = {};
      var _0x2d64d3 = "free-novel-web:";
      _0x4aad02.l = function (_0x40617f, _0x1f0fc9, _0x24f59e, _0x43d42a) {
        if (_0x42eb21[_0x40617f]) {
          _0x42eb21[_0x40617f].push(_0x1f0fc9);
        } else {
          var _0x262414;
          var _0x4d2e10;
          if (undefined !== _0x24f59e) {
            for (var _0x3ac755 = document.getElementsByTagName("script"), _0x5263a2 = 0; _0x5263a2 < _0x3ac755.length; _0x5263a2++) {
              {
                var _0x38fdbb = _0x3ac755[_0x5263a2];
                if (_0x38fdbb.getAttribute("src") == _0x40617f || _0x38fdbb.getAttribute("data-webpack") == _0x2d64d3 + _0x24f59e) {
                  {
                    _0x262414 = _0x38fdbb;
                    break;
                  }
                }
              }
            }
          }
          _0x262414 || (_0x4d2e10 = true, _0x262414 = document.createElement("script"), _0x262414.charset = "utf-8", _0x262414.timeout = 120, _0x4aad02.nc && _0x262414.setAttribute("nonce", _0x4aad02.nc), _0x262414.setAttribute("data-webpack", _0x2d64d3 + _0x24f59e), _0x262414.src = _0x40617f);
          _0x42eb21[_0x40617f] = [_0x1f0fc9];
          var _0x1f5a7d = function (_0x237ef8, _0x455567) {
            {
              _0x262414.onerror = _0x262414.onload = null;
              clearTimeout(_0x58e04b);
              var _0x197582 = _0x42eb21[_0x40617f];
              if (delete _0x42eb21[_0x40617f], _0x262414.parentNode && _0x262414.parentNode.removeChild(_0x262414), _0x197582 && _0x197582.forEach(function (_0xf0e47e) {
                return _0xf0e47e(_0x455567);
              }), _0x237ef8) {
                return _0x237ef8(_0x455567);
              }
            }
          };
          var _0x58e04b = setTimeout(_0x1f5a7d.bind(null, undefined, {
            type: "timeout",
            target: _0x262414
          }), 120000);
          _0x262414.onerror = _0x1f5a7d.bind(null, _0x262414.onerror);
          _0x262414.onload = _0x1f5a7d.bind(null, _0x262414.onload);
          _0x4d2e10 && document.head.appendChild(_0x262414);
        }
      };
    }
  })();
  (function () {
    _0x4aad02.r = function (_0xe7c5bf) {
      var _0x531c0c = {
        value: "Module"
      };
      var _0x2422b5 = {
        value: true
      };
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(_0xe7c5bf, Symbol.toStringTag, _0x531c0c);
      Object.defineProperty(_0xe7c5bf, "__esModule", _0x2422b5);
    };
  })();
  (function () {
    _0x4aad02.p = "/";
  })();
  (function () {
    {
      if ("undefined" !== typeof document) {
        {
          var _0x79950f = function (_0x12bd3b, _0x5c2126, _0x106bb0, _0x46522e, _0x418ced) {
            {
              var _0x2b347b = document.createElement("link");
              _0x2b347b.rel = "stylesheet";
              _0x2b347b.type = "text/css";
              _0x4aad02.nc && (_0x2b347b.nonce = _0x4aad02.nc);
              var _0x3f8576 = function (_0x2f663c) {
                {
                  if (_0x2b347b.onerror = _0x2b347b.onload = null, "load" === _0x2f663c.type) {
                    _0x46522e();
                  } else {
                    var _0x2ad5ec = _0x2f663c && _0x2f663c.type;
                    var _0xec338c = _0x2f663c && _0x2f663c.target && _0x2f663c.target.href || _0x5c2126;
                    var _0x344a23 = new Error("Loading CSS chunk " + _0x12bd3b + " failed.\n(" + _0x2ad5ec + ": " + _0xec338c + ")");
                    _0x344a23.name = "ChunkLoadError";
                    _0x344a23.code = "CSS_CHUNK_LOAD_FAILED";
                    _0x344a23.type = _0x2ad5ec;
                    _0x344a23.request = _0xec338c;
                    _0x2b347b.parentNode && _0x2b347b.parentNode.removeChild(_0x2b347b);
                    _0x418ced(_0x344a23);
                  }
                }
              };
              _0x2b347b.onerror = _0x2b347b.onload = _0x3f8576;
              _0x2b347b.href = _0x5c2126;
              _0x106bb0 ? _0x106bb0.parentNode.insertBefore(_0x2b347b, _0x106bb0.nextSibling) : document.head.appendChild(_0x2b347b);
              return _0x2b347b;
            }
          };
          var _0x42e8e = function (_0x4c80b8, _0x53e783) {
            for (var _0x4eabaf = document.getElementsByTagName("link"), _0x27b796 = 0; _0x27b796 < _0x4eabaf.length; _0x27b796++) {
              {
                var _0x55b2d6 = _0x4eabaf[_0x27b796];
                var _0x1b33b6 = _0x55b2d6.getAttribute("data-href") || _0x55b2d6.getAttribute("href");
                if ("stylesheet" === _0x55b2d6.rel && (_0x1b33b6 === _0x4c80b8 || _0x1b33b6 === _0x53e783)) {
                  return _0x55b2d6;
                }
              }
            }
            var _0x2fba14 = document.getElementsByTagName("style");
            for (_0x27b796 = 0; _0x27b796 < _0x2fba14.length; _0x27b796++) {
              {
                _0x55b2d6 = _0x2fba14[_0x27b796];
                _0x1b33b6 = _0x55b2d6.getAttribute("data-href");
                if (_0x1b33b6 === _0x4c80b8 || _0x1b33b6 === _0x53e783) {
                  return _0x55b2d6;
                }
              }
            }
          };
          var _0x552b5d = function (_0x526ffb) {
            return new Promise(function (_0x105d14, _0x51f1cd) {
              var _0x9e5abd = _0x4aad02.miniCssF(_0x526ffb);
              var _0x44c006 = _0x4aad02.p + _0x9e5abd;
              if (_0x42e8e(_0x9e5abd, _0x44c006)) {
                return _0x105d14();
              }
              _0x79950f(_0x526ffb, _0x44c006, null, _0x105d14, _0x51f1cd);
            });
          };
          var _0x20f170 = {
            "524": 0
          };
          _0x4aad02.f.miniCss = function (_0x4c17c5, _0x14eca7) {
            {
              var _0x3688e4 = {
                "242": 1,
                "526": 1
              };
              _0x20f170[_0x4c17c5] ? _0x14eca7.push(_0x20f170[_0x4c17c5]) : 0 !== _0x20f170[_0x4c17c5] && _0x3688e4[_0x4c17c5] && _0x14eca7.push(_0x20f170[_0x4c17c5] = _0x552b5d(_0x4c17c5).then(function () {
                _0x20f170[_0x4c17c5] = 0;
              }, function (_0x280170) {
                throw delete _0x20f170[_0x4c17c5], _0x280170;
              }));
            }
          };
        }
      }
    }
  })();
  (function () {
    var _0x502286 = {
      "524": 0
    };
    _0x4aad02.f.j = function (_0x2a7d70, _0x562fe9) {
      {
        var _0x5db7fa = _0x4aad02.o(_0x502286, _0x2a7d70) ? _0x502286[_0x2a7d70] : undefined;
        if (0 !== _0x5db7fa) {
          if (_0x5db7fa) {
            _0x562fe9.push(_0x5db7fa[2]);
          } else {
            var _0x18588 = new Promise(function (_0x474993, _0x5a7e0d) {
              _0x5db7fa = _0x502286[_0x2a7d70] = [_0x474993, _0x5a7e0d];
            });
            _0x562fe9.push(_0x5db7fa[2] = _0x18588);
            var _0xad786e = _0x4aad02.p + _0x4aad02.u(_0x2a7d70);
            var _0x2428ec = new Error();
            var _0x5669d7 = function (_0x57d331) {
              if (_0x4aad02.o(_0x502286, _0x2a7d70) && (_0x5db7fa = _0x502286[_0x2a7d70], 0 !== _0x5db7fa && (_0x502286[_0x2a7d70] = undefined), _0x5db7fa)) {
                var _0x2e0f91 = _0x57d331 && ("load" === _0x57d331.type ? "missing" : _0x57d331.type);
                var _0x11ff5a = _0x57d331 && _0x57d331.target && _0x57d331.target.src;
                _0x2428ec.message = "Loading chunk " + _0x2a7d70 + " failed.\n(" + _0x2e0f91 + ": " + _0x11ff5a + ")";
                _0x2428ec.name = "ChunkLoadError";
                _0x2428ec.type = _0x2e0f91;
                _0x2428ec.request = _0x11ff5a;
                _0x5db7fa[1](_0x2428ec);
              }
            };
            _0x4aad02.l(_0xad786e, _0x5669d7, "chunk-" + _0x2a7d70, _0x2a7d70);
          }
        }
      }
    };
    _0x4aad02.O.j = function (_0x1e85d5) {
      return 0 === _0x502286[_0x1e85d5];
    };
    var _0x2ed7d6 = function (_0x27c62c, _0x2a8652) {
      {
        var _0x307ed2;
        var _0x117ccd;
        var _0x2b3990 = _0x2a8652[0];
        var _0x5d89a6 = _0x2a8652[1];
        var _0x238d3f = _0x2a8652[2];
        var _0x387ee6 = 0;
        if (_0x2b3990.some(function (_0x2cff2b) {
          {
            return 0 !== _0x502286[_0x2cff2b];
          }
        })) {
          {
            for (_0x307ed2 in _0x5d89a6) _0x4aad02.o(_0x5d89a6, _0x307ed2) && (_0x4aad02.m[_0x307ed2] = _0x5d89a6[_0x307ed2]);
            if (_0x238d3f) {
              var _0x13058c = _0x238d3f(_0x4aad02);
            }
          }
        }
        for (_0x27c62c && _0x27c62c(_0x2a8652); _0x387ee6 < _0x2b3990.length; _0x387ee6++) {
          _0x117ccd = _0x2b3990[_0x387ee6];
          _0x4aad02.o(_0x502286, _0x117ccd) && _0x502286[_0x117ccd] && _0x502286[_0x117ccd][0]();
          _0x502286[_0x117ccd] = 0;
        }
        return _0x4aad02.O(_0x13058c);
      }
    };
    self.webpackChunkfree_novel_web = self.webpackChunkfree_novel_web || [];
    var _0x10f8ff = self.webpackChunkfree_novel_web;
    _0x10f8ff.forEach(_0x2ed7d6.bind(null, 0));
    _0x10f8ff.push = _0x2ed7d6.bind(null, _0x10f8ff.push.bind(_0x10f8ff));
  })();
  var _0x230a85 = _0x4aad02.O(undefined, [504], function () {
    {
      return _0x4aad02(4161);
    }
  });
  _0x230a85 = _0x4aad02.O(_0x230a85);
})();