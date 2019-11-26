import { CreateUserDto } from '@shared-dtos';

export interface JWTToken {
  expiresIn: number;
  accessToken: string;
}

export interface LoginResponse {
  token: JWTToken;
  user: CreateUserDto;
}
