import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all products with pagination and filtering' })
  @ApiQuery({ name: 'page', required: false, example: 1 })
  @ApiQuery({ name: 'limit', required: false, example: 10 })

  findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
    return this.productService.findAll(Number(page) || 1, Number(limit) || 10);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a product by ID' })
  findOne(@Param('id') id: string) {
    return this.productService.findOne(Number(id));
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a product by ID' })
  update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productService.update(Number(id), dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product by ID' })
  remove(@Param('id') id: string) {
    return this.productService.remove(Number(id));
  }
}