import { applyDecorators, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { JwtGuard } from "src/modules/auth/guards/jwt.guard";
import { RoleGuard } from "src/modules/auth/guards/role.guard";
import { ROLES } from "../enums/role.enum";
import { Roles } from "./role.decorator";


export function AuthDecorator(...permissions: ROLES[]) {
    permissions = permissions ?? []
    return applyDecorators(
        ApiBearerAuth("bearer"),
        Roles(...permissions),
        UseGuards(JwtGuard, RoleGuard)
    )
}