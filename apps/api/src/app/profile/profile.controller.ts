import { ApiUseTags } from '@nestjs/swagger';
import { Body, Controller, HttpStatus, Param, Post, Put, Response, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '@shared-dtos';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('profile')
@Controller('/profile')
export class ProfileController {
  constructor() {

  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  public async register(@Param() params, @Response() res, @Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    console.log(params.id);
    // return res.status(HttpStatus.BAD_REQUEST).json({});
    return res.status(HttpStatus.OK).json({});
  }
}
