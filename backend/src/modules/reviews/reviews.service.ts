import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from '@/modules/reviews/dto/create-review.dto';
import { UpdateReviewDto } from '@/modules/reviews/dto/update-review.dto';

@Injectable()
export class ReviewsService {
  create(createReviewDto: CreateReviewDto) {
    return 'This action adds a new review';
  }

  findAll() {
    return `This action returns all reviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
