import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuItemOptionDto } from '@/menu.item.options/dto/create-menu.item.option.dto';

export class UpdateMenuItemOptionDto extends PartialType(
  CreateMenuItemOptionDto,
) {}
