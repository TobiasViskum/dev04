"use strict";
exports.id = 486;
exports.ids = [486];
exports.modules = {

/***/ 4486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ht": () => (/* reexport */ execute),
  "$s": () => (/* reexport */ getAppData),
  "$y": () => (/* reexport */ getProfileData)
});

// EXTERNAL MODULE: ./node_modules/serverless-mysql/index.js
var serverless_mysql = __webpack_require__(4831);
var serverless_mysql_default = /*#__PURE__*/__webpack_require__.n(serverless_mysql);
;// CONCATENATED MODULE: ./lib/db/db.ts

const db = serverless_mysql_default()({
    config: {
        host: "192.168.2.20",
        user: "tobias",
        password: "fitness",
        database: "fitness_db"
    }
});
async function execute(q, val) {
    try {
        const result = await db.query(q, val);
        await db.end();
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

;// CONCATENATED MODULE: ./lib/db/getProfileData.ts

async function getProfileData() {
    const q = "SELECT * FROM dim_profile AS A INNER JOIN dim_profile_group AS B ON A.profile_group_id = B.id WHERE A.uid=(?)";
    const val = [
        "d5141240-33e2-4d7a-807e-e5df34b64d71"
    ];
    const profileData = await execute(q, val);
    return profileData;
}

;// CONCATENATED MODULE: ./lib/db/getAppData.ts

async function getAppData() {
    const q = "SELECT * FROM app_data";
    const appData = await execute(q, []);
    return appData;
}

;// CONCATENATED MODULE: ./lib/db/index.ts






/***/ })

};
;