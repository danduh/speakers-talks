import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../../../interfaces/users.inreface';
import { UserDTO } from '../../../../dtos/users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly catModel: Model<User>) {
  }

  async create(createUserDTO: UserDTO): Promise<User> {
    const createdUse = new this.catModel(createUserDTO);
    return await createdUse.save();
  }

  async findAll(): Promise<User[]> {
    return await this.catModel.find().exec();
  }
}
