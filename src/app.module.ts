import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SharedModule} from "./shared/shared.module";
import {ParkModule} from "./features/park/park.module";
import {OfferModule} from "./features/offer/offer.module";

@Module({
  imports: [SharedModule, ParkModule, OfferModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
