import { Module } from '@nestjs/common';
import { OrdersService } from '@/modules/orders/orders.service';
import { OrdersController } from '@/modules/orders/orders.controller';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
