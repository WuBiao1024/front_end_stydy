(self["webpackChunk"] = self["webpackChunk"] || []).push([["index"],{

/***/ "./src/helloWord.js":
/*!**************************!*\
  !*** ./src/helloWord.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


function getString() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('Hello Word!!!');
    }, 2000);
  });
}
function helloWord() {
  return _helloWord.apply(this, arguments);
}
function _helloWord() {
  _helloWord = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var string;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return getString();
        case 2:
          string = _context.sent;
          console.log(string);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _helloWord.apply(this, arguments);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helloWord);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _helloWord_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helloWord.js */ "./src/helloWord.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);




var div = document.createElement('div');
div.classList.add('icon');
div.innerHTML = "&#xe605;";
document.body.appendChild(div);
(0,_helloWord_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
console.log(lodash__WEBPACK_IMPORTED_MODULE_2___default().join(['lodash', 'hello', 'wubiao'], "-"));

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "../node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/regenerator/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/regenerator/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "../node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDLHlCQUF5QixTQUFTLHlCQUF5Qjs7Ozs7Ozs7OztBQy9Takc7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRyxFQUFFLHlCQUF5QixTQUFTLHlCQUF5QjtBQUNoRTtBQUNBLDBCQUEwQix5QkFBeUIsU0FBUyx5QkFBeUI7Ozs7Ozs7Ozs7QUNUckY7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLG1HQUErQjtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG9Xb3JkLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2RlNTAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3JlZ2VuZXJhdG9yUnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFN0cmluZygpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgnSGVsbG8gV29yZCEhIScpXHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoZWxsb1dvcmQoKXtcclxuICAgIGxldCBzdHJpbmcgPSBhd2FpdCBnZXRTdHJpbmcoKTtcclxuICAgIGNvbnNvbGUubG9nKHN0cmluZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlbGxvV29yZCIsImltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnXHJcbmltcG9ydCAnLi9oZWxsb1dvcmQuanMnXHJcbmltcG9ydCBoZWxsb1dvcmQgZnJvbSAnLi9oZWxsb1dvcmQuanMnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmRpdi5jbGFzc0xpc3QuYWRkKCdpY29uJylcclxuZGl2LmlubmVySFRNTCA9IFwiJiN4ZTYwNTtcIlxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcclxuXHJcbmhlbGxvV29yZCgpO1xyXG5cclxuY29uc29sZS5sb2coXy5qb2luKFsnbG9kYXNoJywnaGVsbG8nLCd3dWJpYW8nXSxcIi1cIikpXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gIFwidXNlIHN0cmljdFwiOyAvKiEgcmVnZW5lcmF0b3ItcnVudGltZSAtLSBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy4gLS0gbGljZW5zZSAoTUlUKTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2Jsb2IvbWFpbi9MSUNFTlNFICovXG4gIG1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSA9IGZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gICAgcmV0dXJuIGU7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgdmFyIHQsXG4gICAgZSA9IHt9LFxuICAgIHIgPSBPYmplY3QucHJvdG90eXBlLFxuICAgIG4gPSByLmhhc093blByb3BlcnR5LFxuICAgIG8gPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgfHwgZnVuY3Rpb24gKHQsIGUsIHIpIHtcbiAgICAgIHRbZV0gPSByLnZhbHVlO1xuICAgIH0sXG4gICAgaSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sXG4gICAgYSA9IGkuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCIsXG4gICAgYyA9IGkuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiLFxuICAgIHUgPSBpLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuICBmdW5jdGlvbiBkZWZpbmUodCwgZSwgcikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgZSwge1xuICAgICAgdmFsdWU6IHIsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSwgdFtlXTtcbiAgfVxuICB0cnkge1xuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKHQpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUodCwgZSwgcikge1xuICAgICAgcmV0dXJuIHRbZV0gPSByO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gd3JhcCh0LCBlLCByLCBuKSB7XG4gICAgdmFyIGkgPSBlICYmIGUucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gZSA6IEdlbmVyYXRvcixcbiAgICAgIGEgPSBPYmplY3QuY3JlYXRlKGkucHJvdG90eXBlKSxcbiAgICAgIGMgPSBuZXcgQ29udGV4dChuIHx8IFtdKTtcbiAgICByZXR1cm4gbyhhLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IG1ha2VJbnZva2VNZXRob2QodCwgciwgYylcbiAgICB9KSwgYTtcbiAgfVxuICBmdW5jdGlvbiB0cnlDYXRjaCh0LCBlLCByKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGFyZzogdC5jYWxsKGUsIHIpXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgYXJnOiB0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBlLndyYXAgPSB3cmFwO1xuICB2YXIgaCA9IFwic3VzcGVuZGVkU3RhcnRcIixcbiAgICBsID0gXCJzdXNwZW5kZWRZaWVsZFwiLFxuICAgIGYgPSBcImV4ZWN1dGluZ1wiLFxuICAgIHMgPSBcImNvbXBsZXRlZFwiLFxuICAgIHkgPSB7fTtcbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG4gIHZhciBwID0ge307XG4gIGRlZmluZShwLCBhLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICB2YXIgZCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICB2ID0gZCAmJiBkKGQodmFsdWVzKFtdKSkpO1xuICB2ICYmIHYgIT09IHIgJiYgbi5jYWxsKHYsIGEpICYmIChwID0gdik7XG4gIHZhciBnID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocCk7XG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyh0KSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRlZmluZSh0LCBlLCBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKGUsIHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcih0LCBlKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKHIsIG8sIGksIGEpIHtcbiAgICAgIHZhciBjID0gdHJ5Q2F0Y2godFtyXSwgdCwgbyk7XG4gICAgICBpZiAoXCJ0aHJvd1wiICE9PSBjLnR5cGUpIHtcbiAgICAgICAgdmFyIHUgPSBjLmFyZyxcbiAgICAgICAgICBoID0gdS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIGggJiYgXCJvYmplY3RcIiA9PSBfdHlwZW9mKGgpICYmIG4uY2FsbChoLCBcIl9fYXdhaXRcIikgPyBlLnJlc29sdmUoaC5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB0LCBpLCBhKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCB0LCBpLCBhKTtcbiAgICAgICAgfSkgOiBlLnJlc29sdmUoaCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHUudmFsdWUgPSB0LCBpKHUpO1xuICAgICAgICB9LCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCB0LCBpLCBhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBhKGMuYXJnKTtcbiAgICB9XG4gICAgdmFyIHI7XG4gICAgbyh0aGlzLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQsIG4pIHtcbiAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBlKGZ1bmN0aW9uIChlLCByKSB7XG4gICAgICAgICAgICBpbnZva2UodCwgbiwgZSwgcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHIgPSByID8gci50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoZSwgciwgbikge1xuICAgIHZhciBvID0gaDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGksIGEpIHtcbiAgICAgIGlmIChvID09PSBmKSB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgaWYgKG8gPT09IHMpIHtcbiAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gaSkgdGhyb3cgYTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdCxcbiAgICAgICAgICBkb25lOiAhMFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZm9yIChuLm1ldGhvZCA9IGksIG4uYXJnID0gYTs7KSB7XG4gICAgICAgIHZhciBjID0gbi5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICB2YXIgdSA9IG1heWJlSW52b2tlRGVsZWdhdGUoYywgbik7XG4gICAgICAgICAgaWYgKHUpIHtcbiAgICAgICAgICAgIGlmICh1ID09PSB5KSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiB1O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoXCJuZXh0XCIgPT09IG4ubWV0aG9kKSBuLnNlbnQgPSBuLl9zZW50ID0gbi5hcmc7ZWxzZSBpZiAoXCJ0aHJvd1wiID09PSBuLm1ldGhvZCkge1xuICAgICAgICAgIGlmIChvID09PSBoKSB0aHJvdyBvID0gcywgbi5hcmc7XG4gICAgICAgICAgbi5kaXNwYXRjaEV4Y2VwdGlvbihuLmFyZyk7XG4gICAgICAgIH0gZWxzZSBcInJldHVyblwiID09PSBuLm1ldGhvZCAmJiBuLmFicnVwdChcInJldHVyblwiLCBuLmFyZyk7XG4gICAgICAgIG8gPSBmO1xuICAgICAgICB2YXIgcCA9IHRyeUNhdGNoKGUsIHIsIG4pO1xuICAgICAgICBpZiAoXCJub3JtYWxcIiA9PT0gcC50eXBlKSB7XG4gICAgICAgICAgaWYgKG8gPSBuLmRvbmUgPyBzIDogbCwgcC5hcmcgPT09IHkpIGNvbnRpbnVlO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcC5hcmcsXG4gICAgICAgICAgICBkb25lOiBuLmRvbmVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFwidGhyb3dcIiA9PT0gcC50eXBlICYmIChvID0gcywgbi5tZXRob2QgPSBcInRocm93XCIsIG4uYXJnID0gcC5hcmcpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShlLCByKSB7XG4gICAgdmFyIG4gPSByLm1ldGhvZCxcbiAgICAgIG8gPSBlLml0ZXJhdG9yW25dO1xuICAgIGlmIChvID09PSB0KSByZXR1cm4gci5kZWxlZ2F0ZSA9IG51bGwsIFwidGhyb3dcIiA9PT0gbiAmJiBlLml0ZXJhdG9yW1wicmV0dXJuXCJdICYmIChyLm1ldGhvZCA9IFwicmV0dXJuXCIsIHIuYXJnID0gdCwgbWF5YmVJbnZva2VEZWxlZ2F0ZShlLCByKSwgXCJ0aHJvd1wiID09PSByLm1ldGhvZCkgfHwgXCJyZXR1cm5cIiAhPT0gbiAmJiAoci5tZXRob2QgPSBcInRocm93XCIsIHIuYXJnID0gbmV3IFR5cGVFcnJvcihcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ1wiICsgbiArIFwiJyBtZXRob2RcIikpLCB5O1xuICAgIHZhciBpID0gdHJ5Q2F0Y2gobywgZS5pdGVyYXRvciwgci5hcmcpO1xuICAgIGlmIChcInRocm93XCIgPT09IGkudHlwZSkgcmV0dXJuIHIubWV0aG9kID0gXCJ0aHJvd1wiLCByLmFyZyA9IGkuYXJnLCByLmRlbGVnYXRlID0gbnVsbCwgeTtcbiAgICB2YXIgYSA9IGkuYXJnO1xuICAgIHJldHVybiBhID8gYS5kb25lID8gKHJbZS5yZXN1bHROYW1lXSA9IGEudmFsdWUsIHIubmV4dCA9IGUubmV4dExvYywgXCJyZXR1cm5cIiAhPT0gci5tZXRob2QgJiYgKHIubWV0aG9kID0gXCJuZXh0XCIsIHIuYXJnID0gdCksIHIuZGVsZWdhdGUgPSBudWxsLCB5KSA6IGEgOiAoci5tZXRob2QgPSBcInRocm93XCIsIHIuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpLCByLmRlbGVnYXRlID0gbnVsbCwgeSk7XG4gIH1cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KHQpIHtcbiAgICB2YXIgZSA9IHtcbiAgICAgIHRyeUxvYzogdFswXVxuICAgIH07XG4gICAgMSBpbiB0ICYmIChlLmNhdGNoTG9jID0gdFsxXSksIDIgaW4gdCAmJiAoZS5maW5hbGx5TG9jID0gdFsyXSwgZS5hZnRlckxvYyA9IHRbM10pLCB0aGlzLnRyeUVudHJpZXMucHVzaChlKTtcbiAgfVxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KHQpIHtcbiAgICB2YXIgZSA9IHQuY29tcGxldGlvbiB8fCB7fTtcbiAgICBlLnR5cGUgPSBcIm5vcm1hbFwiLCBkZWxldGUgZS5hcmcsIHQuY29tcGxldGlvbiA9IGU7XG4gIH1cbiAgZnVuY3Rpb24gQ29udGV4dCh0KSB7XG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3tcbiAgICAgIHRyeUxvYzogXCJyb290XCJcbiAgICB9XSwgdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyksIHRoaXMucmVzZXQoITApO1xuICB9XG4gIGZ1bmN0aW9uIHZhbHVlcyhlKSB7XG4gICAgaWYgKGUgfHwgXCJcIiA9PT0gZSkge1xuICAgICAgdmFyIHIgPSBlW2FdO1xuICAgICAgaWYgKHIpIHJldHVybiByLmNhbGwoZSk7XG4gICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLm5leHQpIHJldHVybiBlO1xuICAgICAgaWYgKCFpc05hTihlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIG8gPSAtMSxcbiAgICAgICAgICBpID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGZvciAoOyArK28gPCBlLmxlbmd0aDspIGlmIChuLmNhbGwoZSwgbykpIHJldHVybiBuZXh0LnZhbHVlID0gZVtvXSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICAgICAgICByZXR1cm4gbmV4dC52YWx1ZSA9IHQsIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiBpLm5leHQgPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKF90eXBlb2YoZSkgKyBcIiBpcyBub3QgaXRlcmFibGVcIik7XG4gIH1cbiAgcmV0dXJuIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBvKGcsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICBjb25maWd1cmFibGU6ICEwXG4gIH0pLCBvKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb24sXG4gICAgY29uZmlndXJhYmxlOiAhMFxuICB9KSwgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIHUsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIiksIGUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQgJiYgdC5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gISFlICYmIChlID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIgPT09IChlLmRpc3BsYXlOYW1lIHx8IGUubmFtZSkpO1xuICB9LCBlLm1hcmsgPSBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YodCwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpIDogKHQuX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZSh0LCB1LCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpKSwgdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGcpLCB0O1xuICB9LCBlLmF3cmFwID0gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX19hd2FpdDogdFxuICAgIH07XG4gIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSksIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvciwgZS5hc3luYyA9IGZ1bmN0aW9uICh0LCByLCBuLCBvLCBpKSB7XG4gICAgdm9pZCAwID09PSBpICYmIChpID0gUHJvbWlzZSk7XG4gICAgdmFyIGEgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKHQsIHIsIG4sIG8pLCBpKTtcbiAgICByZXR1cm4gZS5pc0dlbmVyYXRvckZ1bmN0aW9uKHIpID8gYSA6IGEubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0LmRvbmUgPyB0LnZhbHVlIDogYS5uZXh0KCk7XG4gICAgfSk7XG4gIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhnKSwgZGVmaW5lKGcsIHUsIFwiR2VuZXJhdG9yXCIpLCBkZWZpbmUoZywgYSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZGVmaW5lKGcsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KSwgZS5rZXlzID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZSA9IE9iamVjdCh0KSxcbiAgICAgIHIgPSBbXTtcbiAgICBmb3IgKHZhciBuIGluIGUpIHIucHVzaChuKTtcbiAgICByZXR1cm4gci5yZXZlcnNlKCksIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICBmb3IgKDsgci5sZW5ndGg7KSB7XG4gICAgICAgIHZhciB0ID0gci5wb3AoKTtcbiAgICAgICAgaWYgKHQgaW4gZSkgcmV0dXJuIG5leHQudmFsdWUgPSB0LCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICB9O1xuICB9LCBlLnZhbHVlcyA9IHZhbHVlcywgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KGUpIHtcbiAgICAgIGlmICh0aGlzLnByZXYgPSAwLCB0aGlzLm5leHQgPSAwLCB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdCwgdGhpcy5kb25lID0gITEsIHRoaXMuZGVsZWdhdGUgPSBudWxsLCB0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLmFyZyA9IHQsIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpLCAhZSkgZm9yICh2YXIgciBpbiB0aGlzKSBcInRcIiA9PT0gci5jaGFyQXQoMCkgJiYgbi5jYWxsKHRoaXMsIHIpICYmICFpc05hTigrci5zbGljZSgxKSkgJiYgKHRoaXNbcl0gPSB0KTtcbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLmRvbmUgPSAhMDtcbiAgICAgIHZhciB0ID0gdGhpcy50cnlFbnRyaWVzWzBdLmNvbXBsZXRpb247XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSB0LnR5cGUpIHRocm93IHQuYXJnO1xuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbiBkaXNwYXRjaEV4Y2VwdGlvbihlKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB0aHJvdyBlO1xuICAgICAgdmFyIHIgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKG4sIG8pIHtcbiAgICAgICAgcmV0dXJuIGEudHlwZSA9IFwidGhyb3dcIiwgYS5hcmcgPSBlLCByLm5leHQgPSBuLCBvICYmIChyLm1ldGhvZCA9IFwibmV4dFwiLCByLmFyZyA9IHQpLCAhIW87XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBvID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IG8gPj0gMDsgLS1vKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy50cnlFbnRyaWVzW29dLFxuICAgICAgICAgIGEgPSBpLmNvbXBsZXRpb247XG4gICAgICAgIGlmIChcInJvb3RcIiA9PT0gaS50cnlMb2MpIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIGlmIChpLnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgYyA9IG4uY2FsbChpLCBcImNhdGNoTG9jXCIpLFxuICAgICAgICAgICAgdSA9IG4uY2FsbChpLCBcImZpbmFsbHlMb2NcIik7XG4gICAgICAgICAgaWYgKGMgJiYgdSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoaS5jYXRjaExvYywgITApO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShpLmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoaS5jYXRjaExvYywgITApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXUpIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShpLmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWJydXB0OiBmdW5jdGlvbiBhYnJ1cHQodCwgZSkge1xuICAgICAgZm9yICh2YXIgciA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyByID49IDA7IC0tcikge1xuICAgICAgICB2YXIgbyA9IHRoaXMudHJ5RW50cmllc1tyXTtcbiAgICAgICAgaWYgKG8udHJ5TG9jIDw9IHRoaXMucHJldiAmJiBuLmNhbGwobywgXCJmaW5hbGx5TG9jXCIpICYmIHRoaXMucHJldiA8IG8uZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBpID0gbztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaSAmJiAoXCJicmVha1wiID09PSB0IHx8IFwiY29udGludWVcIiA9PT0gdCkgJiYgaS50cnlMb2MgPD0gZSAmJiBlIDw9IGkuZmluYWxseUxvYyAmJiAoaSA9IG51bGwpO1xuICAgICAgdmFyIGEgPSBpID8gaS5jb21wbGV0aW9uIDoge307XG4gICAgICByZXR1cm4gYS50eXBlID0gdCwgYS5hcmcgPSBlLCBpID8gKHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMubmV4dCA9IGkuZmluYWxseUxvYywgeSkgOiB0aGlzLmNvbXBsZXRlKGEpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHQsIGUpIHtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHQudHlwZSkgdGhyb3cgdC5hcmc7XG4gICAgICByZXR1cm4gXCJicmVha1wiID09PSB0LnR5cGUgfHwgXCJjb250aW51ZVwiID09PSB0LnR5cGUgPyB0aGlzLm5leHQgPSB0LmFyZyA6IFwicmV0dXJuXCIgPT09IHQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHQuYXJnLCB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCIsIHRoaXMubmV4dCA9IFwiZW5kXCIpIDogXCJub3JtYWxcIiA9PT0gdC50eXBlICYmIGUgJiYgKHRoaXMubmV4dCA9IGUpLCB5O1xuICAgIH0sXG4gICAgZmluaXNoOiBmdW5jdGlvbiBmaW5pc2godCkge1xuICAgICAgZm9yICh2YXIgZSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBlID49IDA7IC0tZSkge1xuICAgICAgICB2YXIgciA9IHRoaXMudHJ5RW50cmllc1tlXTtcbiAgICAgICAgaWYgKHIuZmluYWxseUxvYyA9PT0gdCkgcmV0dXJuIHRoaXMuY29tcGxldGUoci5jb21wbGV0aW9uLCByLmFmdGVyTG9jKSwgcmVzZXRUcnlFbnRyeShyKSwgeTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24gX2NhdGNoKHQpIHtcbiAgICAgIGZvciAodmFyIGUgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgZSA+PSAwOyAtLWUpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLnRyeUVudHJpZXNbZV07XG4gICAgICAgIGlmIChyLnRyeUxvYyA9PT0gdCkge1xuICAgICAgICAgIHZhciBuID0gci5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChcInRocm93XCIgPT09IG4udHlwZSkge1xuICAgICAgICAgICAgdmFyIG8gPSBuLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkocik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiBkZWxlZ2F0ZVlpZWxkKGUsIHIsIG4pIHtcbiAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGUpLFxuICAgICAgICByZXN1bHROYW1lOiByLFxuICAgICAgICBuZXh0TG9jOiBuXG4gICAgICB9LCBcIm5leHRcIiA9PT0gdGhpcy5tZXRob2QgJiYgKHRoaXMuYXJnID0gdCksIHk7XG4gICAgfVxuICB9LCBlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8vIFRPRE8oQmFiZWwgOCk6IFJlbW92ZSB0aGlzIGZpbGUuXG5cbnZhciBydW50aW1lID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lXCIpKCk7XG5tb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG5cbi8vIENvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vcGFja2FnZXMvcnVudGltZS9ydW50aW1lLmpzI0w3MzY9XG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSJdLCJuYW1lcyI6WyJnZXRTdHJpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJoZWxsb1dvcmQiLCJfaGVsbG9Xb3JkIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsInN0cmluZyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJzZW50IiwiY29uc29sZSIsImxvZyIsInN0b3AiLCJfIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiYm9keSIsImFwcGVuZENoaWxkIiwiam9pbiJdLCJzb3VyY2VSb290IjoiIn0=