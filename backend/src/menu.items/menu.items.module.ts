import { Module } from '@nestjs/common';
import { MenuItemsService } from '@/menu.items/menu.items.service';
import { MenuItemsController } from '@/menu.items/menu.items.controller';

@Module({
  controllers: [MenuItemsController],
  providers: [MenuItemsService],
})
export class MenuItemsModule {}
