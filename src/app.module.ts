import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { KageModule } from './kage/kage.module';

@Module({
  imports: [ApiModule, KageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
