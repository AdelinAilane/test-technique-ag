import { TimeBlockService } from './time-block.service';
import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JoiValidationPipe } from '../../shared/validator/joi-validation-pipe';
import { TimeBlockCreationPayload } from './time-block.payload';
import { CreateTimeBlockSchema } from '../../shared/validator/create-time-block.validator';

@Controller('time-block')
@ApiTags('time-block')
export class TimeBlockController {
  constructor(private readonly timeBlockService: TimeBlockService) {}

  @Post()
  @ApiOperation({ summary: 'Create new time block linked to park' })
  @UsePipes(new JoiValidationPipe(CreateTimeBlockSchema))
  addTimeBlockToPark(@Body() payloadCreate: TimeBlockCreationPayload) {
    return this.timeBlockService.addTimeBlockToAPark(payloadCreate);
  }
  @Get()
  @ApiOperation({ summary: 'Get all' })
  getAllTimeBlocks() {
    return this.timeBlockService.getAll();
  }
}
