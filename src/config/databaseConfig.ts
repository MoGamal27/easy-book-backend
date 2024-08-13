//config database
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';


export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'process.env.DATABASE_TYPE',
    host: 'process.env.DATABASE_HOST',
    port: process.env.Database_PORT,
    username: 'process.env.DATABASE_USERNAME',
    password: 'process.env.DATABASE_PASSWORD',
    database: 'process.env.DATABASE_NAME',
    entities: [User],
    synchronize: true,
}

