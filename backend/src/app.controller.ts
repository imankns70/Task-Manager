import { Controller, Get } from "@nestjs/common";

@Controller('app')
export class AppController {
  @Get('assssss')
  getHello(): string {
    return "API is running!";
  }
}
