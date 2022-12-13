"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTime = exports.parseValue = exports.getObjectFiles = exports.removeEmptyFieldsObject = exports.filterObject = exports.createEnumWithObject = exports.randomNumber = void 0;
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
function getObjectFiles(files) {
    let fileObject = {};
    for (const key in files) {
        fileObject[key] = files[key].map((file) => file.path.slice(7));
    }
    return fileObject;
}
exports.getObjectFiles = getObjectFiles;
function parseValue(objectDto) {
    for (const key in objectDto) {
        if (!isNaN(Number(objectDto[key])))
            objectDto[key] = +objectDto[key];
        if (typeof objectDto[key] == "string" && objectDto[key] == "true")
            objectDto[key] = true;
        if (typeof objectDto[key] == "string" && objectDto[key] == "false")
            objectDto[key] = false;
    }
    return objectDto;
}
exports.parseValue = parseValue;
function parseTime(hours, minutes) {
    if (+hours < 10)
        hours = `0${hours}`;
    if (+minutes < 10)
        minutes = `0${minutes}`;
    return `${hours}:${minutes}`;
}
exports.parseTime = parseTime;
//# sourceMappingURL=functions.js.map