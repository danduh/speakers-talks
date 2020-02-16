import { Body, Controller, Get, HttpStatus, Param, Post, Put, Response, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '@shared-dtos';
import { AuthGuard } from '@nestjs/passport';
import { ProfileService } from './profile.service';
import { IUser } from '../interfaces/user.interface';
import { ApiBearerAuth, ApiParam } from '@nestjs/swagger';


@ApiBearerAuth()
@Controller('/profiles')
export class ProfileController {
  constructor(private profileService: ProfileService) {

  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  public async update(@Param() params, @Response() res, @Body() profileDto: IUser) {
    console.log(profileDto);
    console.log(params.id);
    this.profileService.update(params.id, profileDto)
      .then(resp => res.status(HttpStatus.OK).json(resp))
      .catch(err => res.status(HttpStatus.BAD_REQUEST).json(err));
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiParam({ name: 'id' })
  @Get(':id')
  public async get(@Param() params, @Response() res) {
    console.log(params.id);
    this.profileService.getById(params.id)
      .then(resp => res.status(HttpStatus.OK).json(resp))
      .catch(err => res.status(HttpStatus.BAD_REQUEST).json(err));

  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  public async create(@Param() params, @Response() res, @Body() createUserDto: CreateUserDto) {
    return res.status(HttpStatus.OK).json({});
  }
}
