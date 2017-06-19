(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rxjs"));
	else if(typeof define === 'function' && define.amd)
		define(["rxjs"], factory);
	else if(typeof exports === 'object')
		exports["ng2-tag-input"] = factory(require("rxjs"));
	else
		root["ng2-tag-input"] = factory(root["rxjs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_19__) {
return webpackJsonpng2_tag_input([0],{

/***/ 19:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(9);
__webpack_require__(3);
__webpack_require__(19);
module.exports = __webpack_require__(4);


/***/ })

},[76]);
});
//# sourceMappingURL=vendor.map