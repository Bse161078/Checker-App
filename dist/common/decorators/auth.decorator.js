"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDecorator = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../../modules/auth/guards/jwt.guard");
const role_guard_1 = require("../../modules/auth/guards/role.guard");
const role_decorator_1 = require("./role.decorator");
function AuthDecorator(...permissions) {
    permissions = permissions !== null && permissions !== void 0 ? permissions : [];
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)("Bearer"), (0, role_decorator_1.Roles)(...permissions), (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, role_guard_1.RoleGuard));
}
exports.AuthDecorator = AuthDecorator;
//# sourceMappingURL=auth.decorator.js.map