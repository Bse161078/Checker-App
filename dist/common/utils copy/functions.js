"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEmptyFieldsObject = exports.filterObject = exports.createEnumWithObject = exports.randomNumber = void 0;
function randomNumber(length) {
    let max = '9';
    let min = '1';
    for (let index = 1; index < length; index++) {
        max += '0';
        min += '0';
    }
    return Math.floor(Math.random() * parseInt(max)) + parseInt(min);
}
exports.randomNumber = randomNumber;
function createEnumWithObject(target) {
    Object.freeze(target);
    return target;
}
exports.createEnumWithObject = createEnumWithObject;
function filterObject(obj, ...keys) {
    for (const key of keys) {
        delete obj[key];
    }
    return obj;
}
exports.filterObject = filterObject;
function removeEmptyFieldsObject(obj) {
    for (const field in obj) {
        ['', ' ', null, undefined].includes(obj[field]) ? delete obj[field] : true;
    }
    return Object.assign({}, obj);
}
exports.removeEmptyFieldsObject = removeEmptyFieldsObject;
//# sourceMappingURL=functions.js.map