import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { BcryptService } from './bcrypt.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/auth.entity';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { RoleGuard } from './role/role.guard';
import { JwtAuthGuard } from './jwt.guard';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  PassportModule,
  JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1h' } }),  
],
  controllers: [AuthController],
  providers: [AuthService, BcryptService, JwtStrategy, JwtAuthGuard, RoleGuard ],
})
export class AuthModule {}
