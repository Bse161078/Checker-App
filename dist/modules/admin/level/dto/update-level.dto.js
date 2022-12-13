"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLevelDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_level_dto_1 = require("./create-level.dto");
class UpdateLevelDto extends (0, swagger_1.PartialType)(create_level_dto_1.CreateLevelDto) {
}
exports.UpdateLevelDto = UpdateLevelDto;
//# sourceMappingURL=update-level.dto.js.map