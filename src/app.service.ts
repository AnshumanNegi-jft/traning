import { Injectable, Render } from '@nestjs/common';

import { DataSource } from 'typeorm';
import { user } from './user/user.entity';

@Injectable()
export class AppService {
 
  getHello(): string {
    return 'Hello World!';
  } 

 

}
