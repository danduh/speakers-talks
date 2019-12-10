import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { UsersService } from '../users/users.service';
import { DbModule } from '../shared/db-module';

@Module({
  imports: [
    DbModule
  ],
  controllers: [
    ProfileController
  ],
  providers: [
    ProfileService,
    UsersService
  ],
  exports: []
})
export class ProfileModule {

}
