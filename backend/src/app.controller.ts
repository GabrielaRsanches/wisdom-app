import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AppController {
  constructor() {}

  @Get('sign-up')
  getSignUp() {
    return { message: 'Main Sign Up Endpoint' };
  }
}
