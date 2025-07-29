import { Injectable } from '@nestjs/common';
//master
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Mason Nguyen!';
  }
}
