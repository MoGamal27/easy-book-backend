import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './auth.service';
import { User } from './entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    const { email, password } = loginDto;
    const user = await this.userService.validateUser(email, password);
    if (!user) {
      throw new HttpException('Invalid email or password', HttpStatus.UNAUTHORIZED);
    }
    // You can return user details or other relevant data here
    return {
      message: 'Login successful',
      user: { id: user.id, email: user.email },
    };
  }

  @Post('register')
  async register(@Body() createUserDto: { email: string; password: string }) {
    const { email, password } = createUserDto;
    const existingUser = await this.userService.findOneByEmail(email);
    if (existingUser) {
      throw new HttpException('Email already registered', HttpStatus.BAD_REQUEST);
    }
    const user = new User();
    user.email = email;
    user.password = password;
    await this.userService.create(user);
    return {
      message: 'Registration successful',
      user: { id: user.id, email: user.email },
    };
  }
}
