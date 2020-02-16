import {  ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  readonly _id: number;

  @ApiProperty({ required: false })
  readonly firstName: string;

  @ApiProperty({ required: false })
  readonly lastName: string;

  @ApiProperty({ required: true })
  readonly username: string;

  @ApiProperty({ required: true })
  readonly password: string;
}

export class AuthDetailsDTO {
  @ApiProperty({ required: true })
  readonly username: string;

  @ApiProperty({ required: true })
  readonly password: string;
}
