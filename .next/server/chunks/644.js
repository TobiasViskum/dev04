exports.id = 644;
exports.ids = [644];
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

/***/ 6323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ userAuth)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7105);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(117);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);


async function userAuth(uid) {
    if (uid == undefined) (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.redirect)("/login");
    const q = "SELECT * FROM dim_profile WHERE uid=(?)";
    const val = [
        uid
    ];
    const result = await (0,_db__WEBPACK_IMPORTED_MODULE_0__/* .execute */ .ht)(q, val);
    if (result.length == 0) {
        (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.redirect)(`/login?uid=${uid}`);
    }
    return uid;
}


/***/ }),

/***/ 7105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ht": () => (/* reexport */ execute),
  "$s": () => (/* reexport */ getAppData),
  "$y": () => (/* reexport */ getProfileData),
  "R3": () => (/* reexport */ updateFavorite)
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

;// CONCATENATED MODULE: ./lib/db/getProfileData.ts

async function getProfileData(uid) {
    const q = "SELECT * FROM dim_profile AS A INNER JOIN dim_profile_group AS B ON A.profile_group_id = B.id WHERE A.uid=(?)";
    const val = [
        uid
    ];
    const profileData = await execute(q, val);
    return profileData;
}

;// CONCATENATED MODULE: ./lib/db/getAppData.ts

async function getAppData() {
    const q = "SELECT * FROM app_data";
    const appData = await execute(q, [
        ""
    ]);
    return appData;
}

;// CONCATENATED MODULE: ./lib/db/updateFavorite.ts

function getFavoriteState(prevFavortiesState) {
    let favoriteState;
    if (prevFavortiesState == null) {
        favoriteState = {};
    } else {
        favoriteState = prevFavortiesState;
    }
    return favoriteState;
}
async function updateFromNullToObject(name_id, uid) {
    const query = "UPDATE dim_profile SET favorites=? WHERE uid=?";
    const values = [
        name_id,
        uid
    ];
    await execute(query, values);
}
async function insertFavorite(name_id, uid, prevFavortiesState) {
    let favoriteState = getFavoriteState(prevFavortiesState);
    const query_2 = `UPDATE dim_profile SET favorites=? WHERE uid=?`;
    favoriteState[name_id] = name_id;
    const values_2 = [
        JSON.stringify(favoriteState),
        uid
    ];
    await execute(query_2, values_2);
}
async function deleteFavorite(name_id, uid, prevFavortiesState) {
    let favoriteState = getFavoriteState(prevFavortiesState);
    const query_2 = `UPDATE dim_profile SET favorites=? WHERE uid=?`;
    delete favoriteState[name_id];
    const values_2 = [
        JSON.stringify(favoriteState),
        uid
    ];
    await execute(query_2, values_2);
}
async function updateFavorite(uid, newState, name_id, prevFavortiesState) {
    if (newState == false && typeof name_id == "object") {
        await updateFromNullToObject(name_id, uid); //if favorites has to be updated from null to {}
        return;
    } else if (newState && typeof name_id == "string" && prevFavortiesState != undefined) {
        await insertFavorite(name_id, uid, prevFavortiesState); //add item to favorite
        return;
    } else if (newState == false && typeof name_id == "string" && prevFavortiesState != undefined) {
        await deleteFavorite(name_id, uid, prevFavortiesState);
        return;
    }
    return;
}

;// CONCATENATED MODULE: ./lib/db/index.ts







/***/ })

};
;