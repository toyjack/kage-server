import { Body, Controller, Post } from '@nestjs/common';
import { KageService } from 'src/kage/kage.service';
import { KageDto } from 'src/dto';

@Controller('api')
export class ApiController {
  constructor(private kageService: KageService) {}

  @Post('gen')
  gen(@Body() body: KageDto): any {
    return this.kageService.gen(body);
  }
}
