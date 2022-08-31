import {  Injectable } from '@nestjs/common';
import {  user } from './../user/user.entity';
import { DataSource } from 'typeorm';
import { dtouser } from 'src/dto/user.dto';

@Injectable()
export class LoginService {
 
 
  
  
    constructor(private connection:DataSource){}


      // Read user and authenticate user

   async loginData(dtouser:dtouser) {
        let email:string=dtouser.email;
        let data= await this.connection.getRepository(user).findBy({email});
        
        if(data.length<1)
        {
           return false;
        }
        else
        {
            if(data[0].password != dtouser.password)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
      
    }


 // delete user

 async deleteData(email: string) {
    
       await this.connection.getRepository(user).delete({email})

       return true;

  }


 async userdata(email: string) {
    let data= await this.connection.getRepository(user).findOneBy({email})
    return data;
  }


 async updateUser(dtouser) {
    let email:string=dtouser.email
    let person=await this.connection.getRepository(user).findOneBy({email})

    console.log(person)
    let id:number =person.id

    await this.connection.getRepository(user).update(id,dtouser)

     return true;

  }


}
