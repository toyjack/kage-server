import { Module } from '@nestjs/common';
import { KageService } from './kage.service';

@Module({
  providers: [KageService],
  exports: [KageService],
})
export class KageModule {}
