/******/ var __webpack_modules__ = ({

/***/ "./web/FNViewLabel.js"
/*!****************************!*\
  !*** ./web/FNViewLabel.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNViewLabel)
/* harmony export */ });
/* harmony import */ var _FNViewLabelComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNViewLabelComponent.js */ "./web/FNViewLabelComponent.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


// FNViewLabel Web
// A web side import for an ABView.
//
function FNViewLabel(_ref) {
  var ABViewPlugin = _ref.ABViewPlugin,
    ABViewComponentPlugin = _ref.ABViewComponentPlugin;
  var ABViewLabelComponent = (0,_FNViewLabelComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ABViewComponentPlugin: ABViewComponentPlugin
  });

  // Define the default values for this components settings:
  // when a new instance of your widget is created, these values will be
  // the default settings
  var ABViewLabelComponentDefaults = {
    text: ""
  };

  // Define the Default Values for this ABView
  // These are used by the platform and ABDesigner to display the view.
  var ABViewDefaults = {
    key: "ab-view-view-label",
    // {string}
    // unique key for this view

    icon: "font",
    // {string}
    // fa-[icon] reference for this view

    labelKey: "Plugin ab-view-view-label"
    // {string}
    // the multilingual label key for the class label
  };

  ///
  /// We return the ABView here
  ///
  return /*#__PURE__*/function (_ABViewPlugin) {
    function ABViewLabel() {
      _classCallCheck(this, ABViewLabel);
      return _callSuper(this, ABViewLabel, arguments);
    }
    _inherits(ABViewLabel, _ABViewPlugin);
    return _createClass(ABViewLabel, [{
      key: "component",
      value:
      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      function component(parentId) {
        return new ABViewLabelComponent(this, parentId);
      }

      /**
       * @method toObj()
       * properly compile the current state of this ABView instance
       * into the values needed for saving to the DB.
       * @return {json}
       */
    }, {
      key: "toObj",
      value: function toObj() {
        // NOTE: ABView auto translates/untranslates "label"
        // add in any additional fields here:
        // this.unTranslate(this, this, ["text"]);

        var obj = _superPropGet(ABViewLabel, "toObj", this, 3)([]);
        obj.views = [];
        return obj;
      }

      /**
       * @method fromValues()
       *
       * initialze this object with the given set of values.
       * @param {obj} values
       */
    }, {
      key: "fromValues",
      value: function fromValues(values) {
        _superPropGet(ABViewLabel, "fromValues", this, 3)([values]);
        this.settings = this.settings || {};

        // NOTE: ABView auto translates/untranslates "label"
        // add in any additional fields here:
        // this.translate(this, this, ["text"]);
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
    }, {
      key: "componentList",
      value: function componentList() {
        // NOTE: if your component allows other components to be placed inside, then
        // return the list of components that are allowed to be placed inside.
        // otherwise return an empty array.
        return [];
      }
    }], [{
      key: "getPluginKey",
      value:
      // constructor(...params) {
      //    super(...params);
      // }

      /**
       * @method getPluginKey
       * return the plugin key for this view.
       * @return {string} plugin key
       */
      function getPluginKey() {
        return "ab-view-view-label";
      }

      /**
       * @method common
       * return the common values for this view.
       * @return {obj} common values
       */
    }, {
      key: "common",
      value: function common() {
        return ABViewDefaults;
      }

      /**
       * @method defaultValues
       * return the default values for this view.
       * @return {obj} default values
       */
    }, {
      key: "defaultValues",
      value: function defaultValues() {
        return ABViewLabelComponentDefaults;
      }
    }]);
  }(ABViewPlugin);
}

/***/ },

/***/ "./web/FNViewLabelComponent.js"
/*!*************************************!*\
  !*** ./web/FNViewLabelComponent.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNViewLabelComponent)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function FNViewLabelComponent(_ref) {
  var AB = _ref.AB,
    ABViewComponentPlugin = _ref.ABViewComponentPlugin;
  return /*#__PURE__*/function (_ABViewComponentPlugi) {
    function ABViewLabelComponent(baseView, idBase, ids) {
      _classCallCheck(this, ABViewLabelComponent);
      return _callSuper(this, ABViewLabelComponent, [baseView, idBase || "ABViewLabel_".concat(baseView.id), Object.assign({
        template: ""
      }, ids)]);
    }

    /**
     * @method ui
     * return the Webix UI definition for this component.
     * @return {object} Webix UI definition
     */
    _inherits(ABViewLabelComponent, _ABViewComponentPlugi);
    return _createClass(ABViewLabelComponent, [{
      key: "ui",
      value: function ui() {
        var baseView = this.view;
        baseView.text = this.view.settings.text;
        this.settings = this.view.settings;
        var _ui = _superPropGet(ABViewLabelComponent, "ui", this, 3)([[this.uiFormatting({
          view: "label",
          label: baseView.text || "*",
          align: this.settings.alignment,
          type: {
            height: "auto"
          }
        })]]);
        delete _ui.type;
        return _ui;
      }
      /**
       * @method uiFormatting
       * a common routine to properly update the displayed label
       * UI with the css formatting for the given .settings
       * @param {obj} _ui the current webix.ui definition
       * @return {obj} a properly formatted webix.ui definition
       */
    }, {
      key: "uiFormatting",
      value: function uiFormatting(ui) {
        // add different css settings based upon it's format
        // type.
        switch (parseInt(this.settings.format)) {
          // normal
          case 0:
            ui.css = "ab-component-label ab-ellipses-text";
            break;

          // title
          case 1:
            ui.css = "ab-component-header ab-ellipses-text";
            break;

          // description
          case 2:
            ui.css = "ab-component-description ab-ellipses-text";
            break;
        }
        return ui;
      }
      /**
       * @method onShow
       * called when the component is shown.
       * perform any additional initialization here.
       */
    }, {
      key: "onShow",
      value: function onShow() {
        _superPropGet(ABViewLabelComponent, "onShow", this, 3)([]);
      }
    }]);
  }(ABViewComponentPlugin);
}

/***/ }

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Check if module exists (development only)
/******/ 	if (__webpack_modules__[moduleId] === undefined) {
/******/ 		var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 		e.code = 'MODULE_NOT_FOUND';
/******/ 		throw e;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************!*\
  !*** ./web.js ***!
  \****************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ registerWeb)
/* harmony export */ });
/* harmony import */ var _web_FNViewLabel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web/FNViewLabel.js */ "./web/FNViewLabel.js");

function registerWeb(PluginAPI) {
  return [(0,_web_FNViewLabel_js__WEBPACK_IMPORTED_MODULE_0__["default"])(PluginAPI)];
}
})();

const __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };

//# sourceMappingURL=ABLabel_web.mjs.map