import { Module } from '@nestjs/common';
import {SharedModule} from "../../shared/shared.module";
import {OfferController} from "./offer.controller";
import {OfferService} from "./offer.service";

@Module({
  imports: [SharedModule],
  controllers: [OfferController],
  providers: [OfferService],
})
export class OfferModule {}
