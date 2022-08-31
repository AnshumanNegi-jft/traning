import { Body, Controller, Get, Post, Redirect, Render, Req, Res } from '@nestjs/common';
import { Response,Request } from 'express';
import { dtouser } from './../dto/user.dto';
import { LoginService } from './login.service';

@Controller('')
export class LoginController {
    constructor(private readonly loginservice:LoginService) {}

    @Get('logIn')
    @Render('login')
    root(){
      
    }

   


    @Post('logIn')
    async authenticate(@Res() res:Response ,@Body() dtouser:dtouser ){

      res.cookie('email',dtouser.email)

      let da=await this.loginservice.loginData(dtouser);
      if(da== true)
      {
        res.redirect('userD');
      }
      else{
        res.redirect('login');
      }
    }


           

            @Get('userD')
            async userDashboard(@Req() req:Request,@Res() res:Response)
            {
              let email:string=req.cookies['email'];
              
                 let user=await this.loginservice.userdata(email);
                
                
                 let uemail=user.email;
                 let password=user.password

                 console.log(uemail,password);
                 res.render('userD',{email:uemail,password:password})

                
            }
            



    @Post('delete')
    async deletebtn(@Req() req:Request,@Res() res:Response){
      let email:string=req.cookies['email'];
      let data= await this.loginservice.deleteData(email);
      if(data == true)
      {
          res.redirect('login')
      }
    }


    @Post('edituser')
    async editprofile(@Body() dtouser:dtouser,@Res() res:Response)
    {
           let data=await  this.loginservice.updateUser(dtouser);

           if(data==true)
           {
            res.redirect('login');
           }
    }
    


}


