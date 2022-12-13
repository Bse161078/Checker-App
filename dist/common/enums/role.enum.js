"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOTEL_ROLES = exports.ADMIN_ROLES = exports.ROLES = void 0;
var ROLES;
(function (ROLES) {
    ROLES["USER"] = "User";
    ROLES["SUPERADMIN"] = "SuperAdmin";
    ROLES["HOTELADMIN"] = "HotelAdmin";
    ROLES["HOTELRECEPTION"] = "HotelReception";
    ROLES["CHECKER"] = "Checker";
    ROLES["CLEANER"] = "Cleaner";
    ROLES["COMPANYADMIN"] = "CompanyAdmin";
})(ROLES = exports.ROLES || (exports.ROLES = {}));
var ADMIN_ROLES;
(function (ADMIN_ROLES) {
    ADMIN_ROLES["HOTELADMIN"] = "HotelAdmin";
    ADMIN_ROLES["COMPANYADMIN"] = "CompanyAdmin";
})(ADMIN_ROLES = exports.ADMIN_ROLES || (exports.ADMIN_ROLES = {}));
var HOTEL_ROLES;
(function (HOTEL_ROLES) {
    HOTEL_ROLES["HOTELRECEPTION"] = "HotelReception";
    HOTEL_ROLES["CHECKER"] = "Checker";
    HOTEL_ROLES["CLEANER"] = "Cleaner";
})(HOTEL_ROLES = exports.HOTEL_ROLES || (exports.HOTEL_ROLES = {}));
//# sourceMappingURL=role.enum.js.map