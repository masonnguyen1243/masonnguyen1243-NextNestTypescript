import { Injectable } from '@nestjs/common';
import { CreateMenuItemOptionDto } from '@/modules/menu.item.options/dto/create-menu.item.option.dto';
import { UpdateMenuItemOptionDto } from '@/modules/menu.item.options/dto/update-menu.item.option.dto';

@Injectable()
export class MenuItemOptionsService {
  create(createMenuItemOptionDto: CreateMenuItemOptionDto) {
    return 'This action adds a new menuItemOption';
  }

  findAll() {
    return `This action returns all menuItemOptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menuItemOption`;
  }

  update(id: number, updateMenuItemOptionDto: UpdateMenuItemOptionDto) {
    return `This action updates a #${id} menuItemOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} menuItemOption`;
  }
}
