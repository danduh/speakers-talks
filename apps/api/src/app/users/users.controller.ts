import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '@shared-dtos';

@Controller('/users')
export class UsersController {
  constructor(private userService: UsersService) {
  }

  @Get()
  getData() {
    return this.userService.findAll();
  }

  @Post()
  creatData(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }

}
