import { Module } from '@nestjs/common';
import { LikesService } from '@/modules/likes/likes.service';
import { LikesController } from '@/modules/likes/likes.controller';

@Module({
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}
