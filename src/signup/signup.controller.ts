import { Body, Controller, Get, Post, Redirect, Render } from '@nestjs/common';
import { dtouser } from './../dto/user.dto';
import { SignupService } from './signup.service';

@Controller('')
export class SignupController {
    constructor(private readonly signupservice:SignupService) {}



  @Get('signup')
  @Render('signup')
  roo(){
   
  }


  @Post('signup')
  @Redirect('login')
  AddData(@Body()dtoUser:dtouser){
    return this.signupservice.addData(dtoUser);
  }



}
