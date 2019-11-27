import { Injectable } from '@angular/core';
import { UsersService } from '../users/users.service';

@Injectable()
export class ProfileService {
  constructor(private readonly usersService: UsersService) {

  }

  update() {
    return this.usersService.update('asdas');
  }
}
