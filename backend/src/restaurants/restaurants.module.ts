import { Module } from '@nestjs/common';
import { RestaurantsService } from '@/restaurants/restaurants.service';
import { RestaurantsController } from '@/restaurants/restaurants.controller';

@Module({
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
})
export class RestaurantsModule {}
