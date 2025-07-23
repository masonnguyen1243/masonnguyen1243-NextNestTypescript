import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '@/modules/users/dto/create-user.dto';
import { UpdateUserDto } from '@/modules/users/dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '@/modules/users/schemas/user.schema';
import { Model } from 'mongoose';
import { hashPasswordHelper } from '@/helpers/utils';
import aqp from 'api-query-params';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    //
  ) {}

  isEmailExists = async (email: string) => {
    const user = await this.userModel.exists({ email: email });

    if (user) {
      return true;
    }
    return false;
  };

  async create(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;
    //Check if email already exists
    const isExists = await this.isEmailExists(email);
    if (isExists === true) {
      throw new BadRequestException('Email already exists');
    }

    //Hash password
    const hashPassword = await hashPasswordHelper(password);

    const user = await this.userModel.create({
      name,
      email,
      password: hashPassword,
    });
    return {
      _id: user._id,
    };
  }

  async findAll(query: string, current: number, pageSize: number) {
    const { filter, sort } = aqp(query);
    if (filter.current) delete filter.current;
    if (filter.pageSize) delete filter.pageSize;

    if (!current) current = 1;
    if (!pageSize) pageSize = 10;

    const totalItems = (await this.userModel.find(filter)).length;
    const totalPage = Math.ceil(totalItems / pageSize);
    const skip = (current - 1) * pageSize;

    const results = await this.userModel
      .find(filter)
      .limit(pageSize)
      .skip(skip)
      .select('-password')
      .sort(sort as any);

    return { results, totalPage };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
