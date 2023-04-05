import { Module } from '@nestjs/common';
import { SharedModule } from '../../shared/shared.module';
import { TimeBlockController } from './time-block.controller';
import { TimeBlockService } from './time-block.service';

@Module({
  imports: [SharedModule],
  controllers: [TimeBlockController],
  providers: [TimeBlockService],
})
export class TimeBlockModule {}
