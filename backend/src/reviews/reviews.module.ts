import { Module } from '@nestjs/common';
import { ReviewsService } from '@/reviews/reviews.service';
import { ReviewsController } from '@/reviews/reviews.controller';

@Module({
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewsModule {}
