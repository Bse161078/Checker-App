"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BedDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const bed_entity_1 = require("../entities/bed.entity");
class BedDto extends (0, swagger_1.PartialType)(bed_entity_1.Bed) {
}
exports.BedDto = BedDto;
//# sourceMappingURL=bed.dto.js.map