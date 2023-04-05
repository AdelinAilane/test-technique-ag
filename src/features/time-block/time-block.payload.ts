import { ElectricityOrigin } from '../../shared/enum/electricity-origin.enum';
import { ApiProperty } from '@nestjs/swagger';

export class TimeBlockCreationPayload {
  @ApiProperty({
    name: 'parkId',
    description: 'parkId',
    example: 1,
    required: true,
  })
  public parkId: number;

  @ApiProperty({
    name: 'power',
    description: 'power',
    example: 1,
    required: true,
  })
  public power: number;

  @ApiProperty({
    name: 'lowestPrice',
    description: 'lowestPrice',
    example: 1,
    required: true,
  })
  public lowestPrice: number;

  @ApiProperty({
    name: 'startDate',
    description: 'startDate',
    example: '2011-10-05T14:48:00.000Z',
    required: true,
  })
  public startDate: string;

  @ApiProperty({
    name: 'endDate',
    description: 'endDate',
    example: '2011-10-05T19:48:00.000Z',
    required: true,
  })
  public endDate: string;
}
