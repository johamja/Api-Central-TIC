import { Injectable } from '@nestjs/common';
import { UsersRepositry } from './repositories/UsersRepositry';
import { User } from './models/User';

const usersRepositry = new UsersRepositry();

@Injectable()
export class AppService {
  getHello(): Promise<User[]> {
    return usersRepositry.GetAll();
  }
}
