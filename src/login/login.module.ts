import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './../user/user.entity';
import { UserModule } from './../user/user.module';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({imports: [UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Anshuman@108',
      database: 'nestDemo',
      entities:  [user],
      synchronize: true,
    }),],
    controllers:[LoginController],
     providers: [LoginService]})


export class LoginModule {}
