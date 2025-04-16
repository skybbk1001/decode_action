//Wed Apr 16 2025 07:48:40 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function utf8_char_code_at(_0x156f25, _0x468cc4) {
  let _0x592421 = _0x156f25.charAt(_0x468cc4);
  return _0x592421.charCodeAt(0);
}
function decryptData(_0xeaad38) {
  let _0x8d60f3 = ["NC1iWGQ5aU4=", "NC1SWHlqcnk=", "NC1vWXZ3Vnk=", "NC00Wlk1N1U=", "NC1tYkpwVTc=", "NC02TU0yRWk=", "NC01NFRpUXI=", "NC1QaDV4eDk=", "NC1iWWdlUFI=", "NC1aOUEzYlc="],
    _0x828c42 = Base64.decode(_0x8d60f3[cid % 10]),
    _0x196fa1 = _0x828c42.length,
    _0x2a8879 = atob(_0xeaad38),
    _0x5b1485 = "";
  for (let _0x1a2ef1 = 0; _0x1a2ef1 < _0x2a8879.length; _0x1a2ef1++) {
    let _0x492023 = _0x1a2ef1 % _0x196fa1;
    _0x5b1485 += String.fromCharCode(utf8_char_code_at(_0x2a8879, _0x1a2ef1) ^ utf8_char_code_at(_0x828c42, _0x492023));
  }
  let _0x4a5bac = atob(_0x5b1485);
  return JSON.parse(_0x4a5bac);
}
var newImgs = decryptData(DATA);