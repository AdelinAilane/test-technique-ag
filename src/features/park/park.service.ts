import { Injectable, Logger } from '@nestjs/common';
import { ParkCreationPayload } from './park.payload';
import { ParkDao } from '../../shared/dao/park.dao';
import { ElecGenParkEntity } from '../../shared/entities/elec-generating-park.entity';
import { MarketType } from '../../shared/enum/market-type.enum';
import { PaginatedQueryResult } from '../../shared/model/paginatedQueryResult';
import { TimeBlockDao } from '../../shared/dao/time-block.dao';
import { ElectricityOrigin } from '../../shared/enum/electricity-origin.enum';

@Injectable()
export class ParkService {
  private readonly logger = new Logger(ParkService.name);

  constructor(
    private readonly parkDao: ParkDao,
    private readonly timeBlockDao: TimeBlockDao,
  ) {}

  async createPark(payload: ParkCreationPayload): Promise<ElecGenParkEntity> {
    this.logger.log('createPark ' + JSON.stringify(payload));

    const entityToInsert = new ElecGenParkEntity(
      payload.electricityOrigin,
      payload.name,
    );
    const savedPark = await this.parkDao.insert(entityToInsert);
    return savedPark;
  }

  async listPaginatedParks(
    electricityOrigin: ElectricityOrigin,
    page: number,
    limit: number,
  ): Promise<PaginatedQueryResult<ElecGenParkEntity>> {
    this.logger.log('listParks ' + electricityOrigin);
    return this.parkDao.listParkFromOrigin(electricityOrigin, page, limit);
  }
}
