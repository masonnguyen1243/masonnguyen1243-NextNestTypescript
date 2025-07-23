import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuItemOptionDto } from '@/modules/menu.item.options/dto/create-menu.item.option.dto';

export class UpdateMenuItemOptionDto extends PartialType(
  CreateMenuItemOptionDto,
) {}
