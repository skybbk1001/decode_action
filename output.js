//Sat May 10 2025 03:47:58 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const checkCookie = () => {
  const _0x595814 = document.cookie;
  const _0x106534 = String.fromCharCode(95) + "ga";
  const _0x4e1f55 = String.fromCharCode(95, 95) + "it";
  return _0x595814.includes(_0x106534) && !_0x595814.includes(_0x4e1f55);
};
if (isAgeVerified && checkCookie()) {
  let seconds = Math.floor(Math.random() * 6) + 5;
  const mask = document.createElement("div");
  mask.id = "chapter-mask";
  mask.style.cssText = "\n        position: fixed;\n        inset: 0;\n        background: rgba(255, 255, 255, 0.95);\n        z-index: 9999;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", sans-serif;\n        animation: fadeIn 0.3s ease;\n    ";
  const style = document.createElement("style");
  style.textContent = "\n        @keyframes fadeIn {\n            from { opacity: 0; }\n            to { opacity: 1; }\n        }\n        .chapter-btn {\n            margin-top: 20px;\n            padding: 12px 24px;\n            font-size: 16px;\n            background: linear-gradient(to right, #f97316, #ef4444);\n            color: white;\n            border: none;\n            border-radius: 999px;\n            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n            cursor: pointer;\n            transition: all 0.2s ease;\n        }\n        .chapter-btn:active {\n            transform: scale(0.96);\n            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);\n        }\n    ";
  document.head.appendChild(style);
  const countdownText = document.createElement("div");
  countdownText.style.fontSize = "16px";
  countdownText.style.color = "#444";
  countdownText.innerHTML = "⏳ 正在解锁章节顺序，请稍等 <span id=\"countdown\">" + seconds + "</span> 秒...";
  mask.appendChild(countdownText);
  document.body.appendChild(mask);
  const countdownEl = document.getElementById("countdown");
  const timer = setInterval(() => {
    seconds--;
    countdownEl.textContent = seconds;
    if (seconds <= 0) {
      {
        clearInterval(timer);
        const _0x2e33df = document.createElement("button");
        _0x2e33df.className = "chapter-btn";
        _0x2e33df.textContent = "🔓 解锁章节";
        _0x2e33df.addEventListener("click", () => {
          const _0x411e9e = $(".BCsectionTwo-top");
          const _0x330f4d = $(".BCsectionTwo-top-chapter");
          const _0x3f3690 = _0x330f4d.get().sort((_0x1e35df, _0x20e04d) => {
            return parseInt(_0x1e35df.dataset.x) - parseInt(_0x20e04d.dataset.x);
          });
          _0x411e9e.empty().append(_0x3f3690);
          _0x411e9e.css({
            "display": "flex",
            "flex-direction": "column"
          });
          _0x3f3690.forEach((_0x277e1f, _0x18d534) => {
            {
              _0x277e1f.style.order = _0x18d534;
            }
          });
          _0x411e9e.find("a[abc-title]").each(function () {
            const _0x81079f = this.getAttribute("abc-title");
            this.textContent = _0x81079f;
          });
          _0x411e9e.find("a[data-link]").each(function () {
            this.addEventListener("click", function () {
              const _0x3217a3 = this.getAttribute("data-link");
              const _0x283d46 = atob(_0x3217a3);
              location.href = _0x283d46;
            });
          });
          mask.remove();
        });
        mask.innerHTML = "";
        mask.appendChild(_0x2e33df);
      }
    }
  }, 1000);
  console.log("User has agreed to age verification.");
} else {
  setTimeout(() => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        {
          confirm("温馨提示：顺序解析失败，请先访问书籍封面。");
        }
      }, Math.random() * 500 + 500);
    });
  }, Math.random() * 500 + 500);
  console.log("User has not agreed to age verification.");
}
_0xodB = "jsjiami.com.v6";