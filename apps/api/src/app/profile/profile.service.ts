import { Injectable } from '@angular/core';
import { UsersService } from '../users/users.service';
import { IUser } from '../interfaces/user.interface';

@Injectable()
export class ProfileService {
  constructor(private readonly usersService: UsersService) {

  }

  update(profile: IUser) {
    return this.usersService.update('asdas', profile);
  }
}
