import { Module } from '@nestjs/common';
import { OrderDetailService } from '@/modules/order.detail/order.detail.service';
import { OrderDetailController } from '@/modules/order.detail/order.detail.controller';

@Module({
  controllers: [OrderDetailController],
  providers: [OrderDetailService],
})
export class OrderDetailModule {}
