import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { DbModule } from '../shared/db-module';

@Module({
  imports: [
    UsersModule,
    DbModule,
  ],
  controllers: [
    AuthController
  ],
  providers: [
    LocalStrategy,
    JwtStrategy
  ],
  exports: [
  ]
})
export class AuthModule {

}
