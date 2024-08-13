import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './config/databaseConfig';

@Module({
  imports: [AuthModule, DatabaseModule],
})
export class AppModule {}

