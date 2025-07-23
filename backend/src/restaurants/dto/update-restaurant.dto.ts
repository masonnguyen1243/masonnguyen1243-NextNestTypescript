import { PartialType } from '@nestjs/mapped-types';
import { CreateRestaurantDto } from '@/restaurants/dto/create-restaurant.dto';

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {}
