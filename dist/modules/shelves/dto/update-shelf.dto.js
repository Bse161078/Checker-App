"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShelfDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_shelf_dto_1 = require("./create-shelf.dto");
class UpdateShelfDto extends (0, swagger_1.PartialType)(create_shelf_dto_1.CreateShelvesDto) {
}
exports.UpdateShelfDto = UpdateShelfDto;
//# sourceMappingURL=update-shelf.dto.js.map