import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDetailDto } from '@/order.detail/dto/create-order.detail.dto';

export class UpdateOrderDetailDto extends PartialType(CreateOrderDetailDto) {}
