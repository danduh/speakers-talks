import { Injectable } from '@angular/core';
import { UsersService } from '../users/users.service';
import { IUser } from '../interfaces/user.interface';

@Injectable()
export class ProfileService {
  constructor(private readonly usersService: UsersService) {

  }

  getById(id) {
    return this.usersService.findById(id);
  }

  update(id, profile: IUser) {
    return this.usersService.update(id, profile);
  }
}
