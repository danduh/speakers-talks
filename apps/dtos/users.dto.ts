import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiModelProperty()
  readonly _id: number;

  @ApiModelProperty({ required: false })
  readonly firstName: string;

  @ApiModelProperty({ required: false })
  readonly lastName: string;

  @ApiModelProperty({ required: true })
  readonly username: string;

  @ApiModelProperty({ required: true })
  readonly password: string;
}

export class AuthDetailsDTO {
  @ApiModelProperty({ required: true })
  readonly username: string;

  @ApiModelProperty({ required: true })
  readonly password: string;
}
