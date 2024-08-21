import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchModule } from './branch/branch.module';
import { EmployeeModule } from './employee/employee.module';
import { JobTitleModule } from './employee/job-title/jobTitle.module';
import { PaymentModule } from './payment/payment.module';
import { ClientModule } from './client/client.module';
import { OrderModule } from './order/order.module';
import { TimeFrameModule } from './timeframe/timeframe.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'Easy-book',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Set to false in production
    }),
    BranchModule,
    EmployeeModule,
    JobTitleModule,
    PaymentModule,
    ClientModule,
    OrderModule,
    TimeFrameModule,
    AuthModule
  ],
})
export class AppModule {}
