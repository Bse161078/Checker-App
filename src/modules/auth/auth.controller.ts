import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiConsumes, ApiTags } from "@nestjs/swagger";
import { ContentType } from "src/common/enums/swagger.enum";
import { AuthService } from "./services/auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto.ts";
import { AuthDecorator } from "src/common/decorators/auth.decorator";
import { GetUser } from "src/common/decorators/user.decorator";

@Controller("auth")
@ApiTags("Authentication")
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Post("/login")
    @HttpCode(HttpStatus.OK)
    @ApiConsumes(ContentType.URL_ENCODED, ContentType.JSON)
    async login(@Body() body: LoginDto) {
        const loginResult = await this.authService.login(body)
        return { loginResult }
    }
    @Post("/register")
    @ApiConsumes(ContentType.URL_ENCODED, ContentType.JSON)
    async register(@Body() body: RegisterDto) {
        const registerResult = await this.authService.register(body)
        return { registerResult }
    }
    @Get("/check-login")
    @ApiConsumes(ContentType.URL_ENCODED, ContentType.JSON)
    @AuthDecorator()
    async checkLogin(@GetUser() user: Express.User) {
        return { user }
    }
}