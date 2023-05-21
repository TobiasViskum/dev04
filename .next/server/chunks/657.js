exports.id = 657;
exports.ids = [657];
exports.modules = {

/***/ 3878:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 3878;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 3165:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4765, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23))

/***/ }),

/***/ 4434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* reexport */ execute)
});

// EXTERNAL MODULE: ./node_modules/mysql2/promise.js
var promise = __webpack_require__(6729);
;// CONCATENATED MODULE: ./lib/db/db.ts

const db = promise.createPool({
    host: "192.168.2.20",
    database: "fitness_db",
    user: "tobias",
    password: "fitness",
    connectionLimit: 20
});
async function execute(q, val) {
    if (q == undefined || val[0] == undefined) return [
        "failed"
    ];
    try {
        const [rows, fields] = await db.execute(q, val);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

;// CONCATENATED MODULE: ./lib/db/index.ts




/***/ }),

/***/ 3308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ userAuth)
/* harmony export */ });
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4434);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(117);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);


async function userAuth(uid) {
    if (uid == undefined) (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.redirect)("/viskum-app/login");
    const q = "SELECT * FROM dim_profile WHERE uid=(?)";
    const val = [
        uid
    ];
    const result = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .execute */ .h)(q, val);
    if (result.length == 0) {
        (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.redirect)(`/viskum-app/login`);
    }
    return uid;
}


/***/ })

};
;