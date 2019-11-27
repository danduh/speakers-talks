import { Module } from '@nestjs/common';
import { LocalStrategy } from '../auth/strategies/local.strategy';
import { ProfileController } from './profile.controller';

@Module({
  imports: [],
  controllers: [
    ProfileController
  ],
  providers: [

  ],
  exports: [

  ]
})
export class ProfileModule {

}
