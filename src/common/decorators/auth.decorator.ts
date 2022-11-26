import { applyDecorators, SetMetadata, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
// import { JwtGuard } from "src/modules/auth/strategies/jwt-auth.guard";
// import { PermissionGuard } from "src/modules/auth/strategies/permission.guard";
import { AuthSchemeName, MetaDataTitles } from "../enums";
import CheckTokenInterceptor from "../interceptors/checkToken.interceptor";

export function AuthDecorator(permissions: string[] = []) {
    return applyDecorators(
        ApiBearerAuth(AuthSchemeName.Authorization),
        UseInterceptors(CheckTokenInterceptor),
        // UseGuards(JwtGuard, PermissionGuard),
        SetMetadata(MetaDataTitles.PERMISSIONS, permissions)
    )
}