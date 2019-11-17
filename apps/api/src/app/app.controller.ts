import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

console.log(AppService);
@Controller()
export class AppController {
  constructor(private appService: AppService) {
    console.log(AppService);
  }

  @Get()
  getData() {
    console.log(this.appService);
    return this.appService.getData();
  }
}
