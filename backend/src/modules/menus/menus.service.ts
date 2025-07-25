import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from '@/modules/menus/dto/create-menu.dto';
import { UpdateMenuDto } from '@/modules/menus/dto/update-menu.dto';

@Injectable()
export class MenusService {
  create(createMenuDto: CreateMenuDto) {
    return 'This action adds a new menu';
  }

  findAll() {
    return `This action returns all menus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
