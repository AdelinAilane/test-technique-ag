import { ElectricityOrigin } from '../../shared/enum/electricity-origin.enum';
import { ApiProperty } from '@nestjs/swagger';

export class ParkCreationPayload {
  @ApiProperty({
    name: 'electricityOrigin',
    description: 'electricityOrigin',
    example: ElectricityOrigin.WIND,
    required: true,
  })
  public electricityOrigin: ElectricityOrigin;

  @ApiProperty({
    name: 'name',
    description: 'name',
    example: 'KTR FRANCE',
    required: true,
  })
  public name: string;
}
