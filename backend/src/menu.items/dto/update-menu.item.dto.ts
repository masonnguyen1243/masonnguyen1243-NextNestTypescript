import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuItemDto } from '@/menu.items/dto/create-menu.item.dto';

export class UpdateMenuItemDto extends PartialType(CreateMenuItemDto) {}
