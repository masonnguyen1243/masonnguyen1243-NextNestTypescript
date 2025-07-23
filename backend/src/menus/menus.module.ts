import { Module } from '@nestjs/common';
import { MenusService } from '@/menus/menus.service';
import { MenusController } from '@/menus/menus.controller';

@Module({
  controllers: [MenusController],
  providers: [MenusService],
})
export class MenusModule {}
