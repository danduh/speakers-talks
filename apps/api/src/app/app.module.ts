import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { environment } from '../environments/environment';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${environment.mongoURL}/nest`),
    UsersModule,
    AuthModule,
    ProfileModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ]
})
export class AppModule {
}
