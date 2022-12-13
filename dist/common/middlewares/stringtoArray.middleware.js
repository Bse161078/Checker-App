"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
function StringToArray(field, type) {
    return class Middleware {
        use(req, res, next) {
            const myField = req.body[field];
            if ((0, class_validator_1.isArray)(myField))
                return next();
            if ((0, class_validator_1.isString)(myField) && type == "mongoId") {
                req.body[field] = [...new Set(myField.split(",").filter(class_validator_1.isMongoId))];
            }
            else if ((0, class_validator_1.isString)(myField)) {
                req.body[field] = myField.split(",");
            }
            else {
                req.body[field] = [];
            }
            console.log(req.body[field]);
            return next();
        }
    };
}
exports.default = StringToArray;
//# sourceMappingURL=stringtoArray.middleware.js.map