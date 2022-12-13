"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShelvesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const shelves_entity_1 = require("../entities/shelves.entity");
class ShelvesDto extends (0, swagger_1.PartialType)(shelves_entity_1.Shelves) {
}
exports.ShelvesDto = ShelvesDto;
//# sourceMappingURL=shelves.dto.js.map