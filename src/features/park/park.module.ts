import { Module } from '@nestjs/common';
import {SharedModule} from "../../shared/shared.module";
import {ParkController} from "./park.controller";
import {ParkService} from "./park.service";

@Module({
  imports: [SharedModule],
  controllers: [ParkController],
  providers: [ParkService],
})
export class ParkModule {}
