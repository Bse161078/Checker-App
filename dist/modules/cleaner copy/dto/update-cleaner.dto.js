"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCleanerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_cleaner_dto_1 = require("./create-cleaner.dto");
class UpdateCleanerDto extends (0, swagger_1.PartialType)(create_cleaner_dto_1.CreateCleanerDto) {
}
exports.UpdateCleanerDto = UpdateCleanerDto;
//# sourceMappingURL=update-cleaner.dto.js.map