import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ description: 'Product name', example: 'MacBook Pro' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Product price', example: 1299.99 })
  @IsNumber()
  price: number;

  @ApiProperty({ description: 'Quantity available', example: 10 })
  @IsInt()
  quantity: number;

  @ApiProperty({ description: 'Product image', example: '["image1.jpg", "image2.jpg"]' })
  @IsString()
  img: Array<string>;

  @ApiProperty({ description: 'Category ID', example: 1 })
  @IsInt()
  categoryId: number;
}

