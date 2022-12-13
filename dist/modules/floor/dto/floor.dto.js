"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const floor_entity_1 = require("../entities/floor.entity");
class FloorDto extends (0, swagger_1.PartialType)(floor_entity_1.Floor) {
}
exports.FloorDto = FloorDto;
//# sourceMappingURL=floor.dto.js.map