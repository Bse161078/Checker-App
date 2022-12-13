"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCheckerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_checker_dto_1 = require("./create-checker.dto");
class UpdateCheckerDto extends (0, swagger_1.PartialType)(create_checker_dto_1.CreateCheckerDto) {
}
exports.UpdateCheckerDto = UpdateCheckerDto;
//# sourceMappingURL=update-checker.dto.js.map