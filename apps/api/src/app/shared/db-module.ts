import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../schemas/user.schema';
import { LocalStrategy } from '../auth/strategies/local.strategy';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    AuthService,
    LocalStrategy,
    JwtStrategy
  ],
  controllers: [],
  providers: [
    UsersService,
    AuthService,
    LocalStrategy,
    JwtStrategy
  ]
})

export class DbModule {

}
