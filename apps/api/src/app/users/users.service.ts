import { Model, PassportLocalModel } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { debug } from 'console';
import { AuthDetailsDTO, CreateUserDto } from '@shared-dtos';
import { IUser } from '../interfaces/user.interface';

const PublicUserData = { username: 1, firstName: 1, lastName: 1 };

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: PassportLocalModel<IUser>) {
  }

  async login(login: AuthDetailsDTO) {
    return this.userModel.authenticate();
  }

  async findAll(): Promise<IUser[]> {
    return await this.userModel.find().exec();
  }

  async findOne(options: AuthDetailsDTO): Promise<IUser> {
    return await this.userModel.findOne({ username: options.username }).select(PublicUserData).exec();
  }

  async findById(ID: number): Promise<IUser> {
    return await this.userModel.findById(ID).exec();
  }

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async update(ID: string, newValue: IUser): Promise<IUser> {
    const user = await this.userModel.findById(ID).exec();

    if (!user._id) {
      debug('user not found');
    }

    await this.userModel.findByIdAndUpdate(ID, newValue).exec();
    return await this.userModel.findById(ID).exec();
  }

  async delete(ID: number): Promise<string> {
    try {
      await this.userModel.findByIdAndRemove(ID).exec();
      return 'The user has been deleted';
    } catch (err) {
      debug(err);
      return 'The user could not be deleted';
    }
  }
}
