import { Body, Controller, Get, HttpStatus, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.guard';
import { Roles } from './role/roles.decorator';
import { RoleGuard } from './role/role.guard';

@Controller('auth')
export class AuthController {
    constructor(
    private readonly authService: AuthService
    ){}

    @Post('sign-up')
    signUp(@Body() signUpDto: SignupDto): Promise<any> {
      return this.authService.signUp(signUpDto);
    }

    @Post('sign-in')
    signIn(@Body() signInDto: SignupDto): Promise<any> {
      return this.authService.signIn(signInDto);
    }

    /*@Roles('admin')
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Get('profile')
    getProfile(@Query('userId') userId: number, @Req() req, @Res() res) {
    return res.status(HttpStatus.OK).json(this.authService.getProfile(userId));
    }*/
    @Get('profile')
   @Roles('admin')
   @UseGuards(JwtAuthGuard, RoleGuard)
  async getProfile(@Req() req) {
  const user = await this.authService.getProfile(req.user.id);
  return user;
}

    }

