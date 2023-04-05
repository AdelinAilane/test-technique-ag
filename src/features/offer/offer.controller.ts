import { OfferService } from './offer.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JoiValidationPipe } from '../../shared/validator/joi-validation-pipe';
import { OfferCreationPayload } from './offer.payload';
import { CreateOfferSchema } from '../../shared/validator/create-offer.validator';
import { MarketType } from '../../shared/enum/market-type.enum';
import { AddTimeBlockOnOfferPayload } from './add-time-block-on-offer.payload';
import { OfferEntity } from '../../shared/entities/offer.entity';
import { PaginatedQueryResult } from '../../shared/model/paginatedQueryResult';

@Controller('offer')
@ApiTags('offer')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  /**
   * electricity generating parks
   */
  @Post()
  @ApiOperation({ summary: 'Create new electricity offer on a market' })
  @UsePipes(new JoiValidationPipe(CreateOfferSchema))
  addElecGeneratingPark(@Body() payloadCreate: OfferCreationPayload) {
    return this.offerService.createOffer(payloadCreate);
  }

  @Get(':marketType')
  @ApiOperation({ summary: 'list offers on a market' })
  listofferssOnAMarket(
    @Param('marketType') marketType: MarketType,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<PaginatedQueryResult<OfferEntity>> {
    return this.offerService.listPaginatedOffers(marketType, page, limit);
  }

  /**
   * add timeblock to offer
   */
  @Patch('add-time-block')
  @ApiOperation({ summary: 'add time block to existing offer' })
  addTimeBlockToOffer(@Body() payloadAddTimeBlock: AddTimeBlockOnOfferPayload) {
    return this.offerService.addTimeBlockToOffer(
      payloadAddTimeBlock.offerId,
      payloadAddTimeBlock.timeBlockId,
    );
  }
}
