import { Injectable } from '@nestjs/common';
import { user } from './../user/user.entity';
import { DataSource } from 'typeorm';
import { dtouser } from 'src/dto/user.dto';

@Injectable()
export class SignupService {
    constructor(private connection:DataSource){}
    
    addData(dtoUser:dtouser){
        return this.connection.getRepository(user).save({
          email:dtoUser.email,
          password:dtoUser.password
        })
       }
      
     
}
