"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBathroomDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_bathroom_dto_1 = require("./create-bathroom.dto");
class UpdateBathroomDto extends (0, swagger_1.PartialType)(create_bathroom_dto_1.CreateBathroomDto) {
}
exports.UpdateBathroomDto = UpdateBathroomDto;
//# sourceMappingURL=update-bathroom.dto.js.map