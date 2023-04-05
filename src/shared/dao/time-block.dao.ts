import { Injectable } from '@nestjs/common';
import { ElecGenParkEntity } from '../entities/elec-generating-park.entity';
import { MarketType } from '../enum/market-type.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { OfferEntity } from '../entities/offer.entity';
import { Repository } from 'typeorm';
import { Pasq } from '../query/pasq';
import { PaginatedQueryResult } from '../model/paginatedQueryResult';
import { TimeBlockEntity } from '../entities/time-block.entity';

@Injectable()
export class TimeBlockDao {
  constructor(
    @InjectRepository(TimeBlockEntity)
    private timeBlockRepository: Repository<TimeBlockEntity>,
  ) {}

  async insert(timeBlockEntity: TimeBlockEntity): Promise<TimeBlockEntity> {
    return this.timeBlockRepository.save(timeBlockEntity);
  }

  async getAll(): Promise<TimeBlockEntity[]> {
    return this.timeBlockRepository.find({ relations: ['park'] });
  }

  async getById(id: number): Promise<TimeBlockEntity> {
    return this.timeBlockRepository.findOne({ where: { timeBlockId: id } });
  }
}
