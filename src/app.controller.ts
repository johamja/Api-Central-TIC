import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './models/User';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<User[]> {
    return this.appService.getHello();
  }
}
