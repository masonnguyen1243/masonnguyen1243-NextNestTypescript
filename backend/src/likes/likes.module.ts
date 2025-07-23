import { Module } from '@nestjs/common';
import { LikesService } from '@/likes/likes.service';
import { LikesController } from '@/likes/likes.controller';

@Module({
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}
