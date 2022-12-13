"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurtainDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const curtains_entity_1 = require("../entities/curtains.entity");
class CurtainDto extends (0, swagger_1.PartialType)(curtains_entity_1.Curtain) {
}
exports.CurtainDto = CurtainDto;
//# sourceMappingURL=curtain.dto.js.map