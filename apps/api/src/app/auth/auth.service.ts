import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { PassportLocalModel } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { debug } from 'console';
import { IUser } from '../interfaces/user.interface';
import { RegistrationStatus } from './interfaces/registration-status.interface';
import { CreateUserDto } from '@shared-dtos';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService,
              @InjectModel('User') private readonly userModel: PassportLocalModel<IUser>) {
  }

  register(user: CreateUserDto): Promise<RegistrationStatus> {
    // @ts-ignore
    const iUser = this.userModel(user);
    return this.userModel.register(iUser, user.password)
      .then(() => ({ success: true, message: 'user register' }))
      .catch((err) => {
        debug(err);
        return { success: false, message: err };
      });
  }

  createToken(user) {
    console.log('get the expiration');
    const expiresIn = 3600;

    const accessToken = jwt.sign({
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName
    }, environment.SECRET_KEY, { expiresIn });
    console.log('return the token');
    console.log(accessToken);
    return {
      expiresIn,
      accessToken
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.usersService.findById(payload.id);
  }
}
