"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomType = exports.RoomOccupationStatus = exports.CheckerRoomStatus = exports.RoomStatus = void 0;
var RoomStatus;
(function (RoomStatus) {
    RoomStatus["CleanQuick"] = "Clean Quick";
    RoomStatus["ExtraBedNormal"] = "Extra Bed Normal";
    RoomStatus["ExtraBedChild"] = "Extra Bed Child";
    RoomStatus["RedCard"] = "Red Card";
    RoomStatus["CleanQuickGuestWaiting"] = "Clean Quick Guest Waiting";
    RoomStatus["CleanStay"] = "Clean Stay";
    RoomStatus["CleanCheckout"] = "Clean Checkout";
    RoomStatus["CleanAgain"] = "Clean Again";
})(RoomStatus = exports.RoomStatus || (exports.RoomStatus = {}));
var CheckerRoomStatus;
(function (CheckerRoomStatus) {
    CheckerRoomStatus["Cleaned"] = "Cleaned";
    CheckerRoomStatus["NotCleaned"] = "NotCleaned";
    CheckerRoomStatus["Damaged"] = "Damaged";
    CheckerRoomStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(CheckerRoomStatus = exports.CheckerRoomStatus || (exports.CheckerRoomStatus = {}));
var RoomOccupationStatus;
(function (RoomOccupationStatus) {
    RoomOccupationStatus["Free"] = "Free";
    RoomOccupationStatus["Occupied"] = "Occupied";
})(RoomOccupationStatus = exports.RoomOccupationStatus || (exports.RoomOccupationStatus = {}));
var RoomType;
(function (RoomType) {
    RoomType["Single"] = "Single";
    RoomType["Double"] = "Double";
    RoomType["Suite"] = "Suite";
    RoomType["King"] = "King";
})(RoomType = exports.RoomType || (exports.RoomType = {}));
//# sourceMappingURL=room-type.enum.js.map