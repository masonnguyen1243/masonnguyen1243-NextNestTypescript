import { Injectable } from '@nestjs/common';
import { UsersService } from '@/modules/users/users.service';
import { comparePasswordHelper } from '@/helpers/utils';
import { JwtService } from '@nestjs/jwt';
import { CodeAuthDto, CreateAuthDto } from '@/auth/dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  //Validate user
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(username);
    if (!user) return null;

    const isValidPassword = await comparePasswordHelper(pass, user.password);

    if (!isValidPassword) return null;

    return user;
  }

  //Login
  async login(user: any) {
    const payload = { username: user.email, sub: user._id };
    return {
      user: {
        email: user.email,
        _id: user._id,
        name: user.name,
      },
      access_token: this.jwtService.sign(payload),
    };
  }

  //Register
  register = async (registerDto: CreateAuthDto) => {
    return await this.usersService.handleRegister(registerDto);
  };

  //Check code
  checkCode = async (data: CodeAuthDto) => {
    return await this.usersService.handleActive(data);
  };

  //retryActive
  retryActive = async (data: string) => {
    return await this.usersService.retryActive(data);
  };
}
