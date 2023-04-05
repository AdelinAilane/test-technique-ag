import { ParkService } from './park.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JoiValidationPipe } from '../../shared/validator/joi-validation-pipe';
import { CreateParkSchema } from '../../shared/validator/create-park.validator';
import { ParkCreationPayload } from './park.payload';
import { PaginatedQueryResult } from '../../shared/model/paginatedQueryResult';
import { ElecGenParkEntity } from '../../shared/entities/elec-generating-park.entity';
import { ElectricityOrigin } from '../../shared/enum/electricity-origin.enum';

@Controller('park')
@ApiTags('park')
export class ParkController {
  constructor(private readonly parkService: ParkService) {}

  @Post()
  @ApiOperation({ summary: 'Create new electricity generating park' })
  @UsePipes(new JoiValidationPipe(CreateParkSchema))
  addElecGeneratingPark(@Body() payloadCreate: ParkCreationPayload) {
    return this.parkService.createPark(payloadCreate);
  }

  @Get(':electricityOrigin')
  @ApiOperation({ summary: 'list parks selling on a market' })
  listParksOnAMarket(
    @Param('electricityOrigin') electricityOrigin: ElectricityOrigin,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<PaginatedQueryResult<ElecGenParkEntity>> {
    console.log('electricityOrigin', electricityOrigin);
    console.log('page', page);
    console.log('limit', limit);

    return this.parkService.listPaginatedParks(electricityOrigin, page, limit);
  }
}
