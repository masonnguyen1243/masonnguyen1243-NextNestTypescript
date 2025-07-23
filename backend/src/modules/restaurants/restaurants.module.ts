import { Module } from '@nestjs/common';
import { RestaurantsService } from '@/modules/restaurants/restaurants.service';
import { RestaurantsController } from '@/modules/restaurants/restaurants.controller';

@Module({
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
})
export class RestaurantsModule {}
