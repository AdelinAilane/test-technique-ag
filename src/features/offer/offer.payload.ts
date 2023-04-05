import { ApiProperty } from '@nestjs/swagger';
import { MarketType } from '../../shared/enum/market-type.enum';

export class OfferCreationPayload {
  @ApiProperty({
    name: 'marketType',
    description: 'MarketType',
    example: MarketType.FAST_RESERVE,
    required: true,
  })
  public marketType: MarketType;

  @ApiProperty({
    name: 'name',
    description: 'name',
    example: 'offre promotionnelle du samedi : ZEUS2000',
    required: true,
  })
  public name: string;
}
