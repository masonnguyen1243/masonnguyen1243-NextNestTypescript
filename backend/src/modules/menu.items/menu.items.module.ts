import { Module } from '@nestjs/common';
import { MenuItemsService } from '@/modules/menu.items/menu.items.service';
import { MenuItemsController } from '@/modules/menu.items/menu.items.controller';

@Module({
  controllers: [MenuItemsController],
  providers: [MenuItemsService],
})
export class MenuItemsModule {}
