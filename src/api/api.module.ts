import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { KageModule } from 'src/kage/kage.module';

@Module({
  imports: [KageModule],
  controllers: [ApiController],
  providers: [],
})
export class ApiModule {}
