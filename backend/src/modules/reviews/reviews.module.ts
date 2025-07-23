import { Module } from '@nestjs/common';
import { ReviewsService } from '@/modules/reviews/reviews.service';
import { ReviewsController } from '@/modules/reviews/reviews.controller';

@Module({
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewsModule {}
