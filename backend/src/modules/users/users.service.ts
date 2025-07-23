import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '@/modules/users/dto/create-user.dto';
import { UpdateUserDto } from '@/modules/users/dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '@/modules/users/schemas/user.schema';
import { Model } from 'mongoose';
import { hashPasswordHelper } from '@/helpers/utils';
import aqp from 'api-query-params';
import mongoose from 'mongoose';
import { CreateAuthDto } from '@/auth/dto/create-auth.dto';
import { v4 as uuidv4 } from 'uuid';
import * as dayjs from 'dayjs';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly mailerService: MailerService,

    //
  ) {}

  isEmailExists = async (email: string) => {
    const user = await this.userModel.exists({ email: email });

    if (user) {
      return true;
    }
    return false;
  };

  //
  async create(createUserDto: CreateUserDto) {
    const { name, email, password, phone, address, image } = createUserDto;
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
      phone,
      address,
      image,
    });
    return {
      _id: user._id,
    };
  }

  //Get All Users
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

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  //Update user
  async update(updateUserDto: UpdateUserDto) {
    return await this.userModel.updateOne(
      { _id: updateUserDto._id },
      { ...updateUserDto },
    );
  }

  //Delete user
  async remove(_id: string) {
    //Check id
    if (mongoose.isValidObjectId(_id)) {
      //delete
      return await this.userModel.deleteOne({ _id });
    } else {
      throw new BadRequestException('Invalid user ID');
    }
  }

  async handleRegister(registerDto: CreateAuthDto) {
    const { name, email, password } = registerDto;
    //Check if email already exists
    const isExists = await this.isEmailExists(email);
    if (isExists === true) {
      throw new BadRequestException('Email already exists');
    }

    //Hash password
    const hashPassword = await hashPasswordHelper(password);
    const codeId = uuidv4();
    const user = await this.userModel.create({
      name,
      email,
      password: hashPassword,
      isActive: false,
      codeId: codeId,
      codeExpired: dayjs().add(5, 'minutes').toDate(),
    });

    //Send email verification
    this.mailerService.sendMail({
      to: user.email,
      subject: 'Activate your account',
      template: 'register',
      context: {
        name: user?.name ?? user?.email,
        activationCode: codeId,
      },
    });

    //Trả ra phản hồi
    return {
      _id: user._id,
    };
  }
}
