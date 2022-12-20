"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReceptionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_reception_dto_1 = require("./create-reception.dto");
class UpdateReceptionDto extends (0, swagger_1.PartialType)(create_reception_dto_1.CreateReceptionDto) {
}
exports.UpdateReceptionDto = UpdateReceptionDto;
//# sourceMappingURL=update-reception.dto.js.map