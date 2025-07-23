import { Module } from '@nestjs/common';
import { MenuItemOptionsService } from '@/modules/menu.item.options/menu.item.options.service';
import { MenuItemOptionsController } from '@/modules/menu.item.options/menu.item.options.controller';

@Module({
  controllers: [MenuItemOptionsController],
  providers: [MenuItemOptionsService],
})
export class MenuItemOptionsModule {}
