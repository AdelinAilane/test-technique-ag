import { ApiProperty } from '@nestjs/swagger';
import { MarketType } from '../../shared/enum/market-type.enum';

export class AddTimeBlockOnOfferPayload {
  @ApiProperty({
    name: 'timeBlockId',
    description: 'timeBlockId',
    example: 1,
    required: true,
  })
  public timeBlockId: number;

  @ApiProperty({
    name: 'offerId',
    description: 'offerId',
    example: 2,
    required: true,
  })
  public offerId: number;
}
