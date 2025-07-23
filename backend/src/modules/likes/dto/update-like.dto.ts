import { PartialType } from '@nestjs/mapped-types';
import { CreateLikeDto } from '@/modules/likes/dto/create-like.dto';

export class UpdateLikeDto extends PartialType(CreateLikeDto) {}
