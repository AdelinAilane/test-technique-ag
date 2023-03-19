import { Module } from '@nestjs/common';
import {ParkDao} from "./dao/park.dao";

@Module({
  imports: [],
  controllers: [],
  providers: [ParkDao],
  exports: [ParkDao]
})
export class SharedModule {}
