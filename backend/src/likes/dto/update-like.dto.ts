import { PartialType } from '@nestjs/mapped-types';
import { CreateLikeDto } from '@/likes/dto/create-like.dto';

export class UpdateLikeDto extends PartialType(CreateLikeDto) {}
