"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BathRoomDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const bathroom_entity_1 = require("../entities/bathroom.entity");
class BathRoomDto extends (0, swagger_1.PartialType)(bathroom_entity_1.BathRoom) {
}
exports.BathRoomDto = BathRoomDto;
//# sourceMappingURL=bethroom.dto.js.map