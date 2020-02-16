import { Controller, UseGuards, HttpStatus, Response, Post, Body } from '@nestjs/common';
import { AuthDetailsDTO, CreateUserDto } from '@shared-dtos';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from '../users/users.service';


@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
              private readonly usersService: UsersService) {
  }

  @Post('register')
  public async register(@Response() res, @Body() createUserDto: CreateUserDto) {
    const result = await this.authService.register(createUserDto);
    if (!result.success) {
      return res.status(HttpStatus.BAD_REQUEST).json(result);
    }
    return res.status(HttpStatus.OK).json(result);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  public async login(@Response() res, @Body() login: AuthDetailsDTO) {
    return await this.usersService.findOne(login)
      .then(user => {
        if (!user) {
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'User Not Found' });
        } else {
          const response = {
            token: this.authService.createToken(user),
            user
          };
          return res.status(HttpStatus.OK).json(response);
        }
      });
  }
}
