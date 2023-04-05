import { Injectable, Logger } from '@nestjs/common';
import { ParkDao } from '../../shared/dao/park.dao';
import { TimeBlockDao } from '../../shared/dao/time-block.dao';
import { TimeBlockEntity } from '../../shared/entities/time-block.entity';
import { TimeBlockCreationPayload } from './time-block.payload';

@Injectable()
export class TimeBlockService {
  private readonly logger = new Logger(TimeBlockService.name);

  constructor(
    private readonly parkDao: ParkDao,
    private readonly timeBlockDao: TimeBlockDao,
  ) {}

  public async addTimeBlockToAPark(
    payload: TimeBlockCreationPayload,
  ): Promise<TimeBlockEntity> {
    this.logger.log('createPark ' + JSON.stringify(payload));

    const timeBlock = new TimeBlockEntity(
      payload.parkId,
      payload.startDate,
      payload.endDate,
      payload.power,
      payload.lowestPrice,
    );
    return this.timeBlockDao.insert(timeBlock);
  }

  getAll(): Promise<TimeBlockEntity[]> {
    return this.timeBlockDao.getAll();
  }
}
