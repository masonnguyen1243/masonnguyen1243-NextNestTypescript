import { Module } from '@nestjs/common';
import { MenusService } from '@/modules/menus/menus.service';
import { MenusController } from '@/modules/menus/menus.controller';

@Module({
  controllers: [MenusController],
  providers: [MenusService],
})
export class MenusModule {}
