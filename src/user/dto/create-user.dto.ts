import { IsEmail, IsEnum, IsNotEmpty, IsOptional, MinLength, IsInt, IsString, IsArray, IsPhoneNumber, IsDate } from 'class-validator';
import { Role, Status } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'First name of the user', example: 'John' })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({ description: 'Last name of the user', example: 'Doe' })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({ description: 'Email address of the user', example: 'john.doe@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Password for the user account', example: 'StrongPassword123!', minLength: 6 })
  @MinLength(4)
  password: string;

  @ApiProperty({ description: 'User role', enum: Role, example: Role.USER, required: false })
  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @ApiProperty({ description: 'User status', enum: Status, example: Status.INACTIVE, required: false })
  @IsOptional()
  @IsEnum(Status)
  status?: Status;
}
