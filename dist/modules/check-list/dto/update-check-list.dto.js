"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCheckListDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_check_list_dto_1 = require("./create-check-list.dto");
class UpdateCheckListDto extends (0, swagger_1.PartialType)(create_check_list_dto_1.CreateCheckListDto) {
}
exports.UpdateCheckListDto = UpdateCheckListDto;
//# sourceMappingURL=update-check-list.dto.js.map