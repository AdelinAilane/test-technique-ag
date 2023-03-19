import {OfferService} from "./offer.service";
import {Body, Controller, Get, Param, Post, UsePipes} from "@nestjs/common";
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {JoiValidationPipe} from "../../shared/validator/joi-validation-pipe";
import {CreateParkSchema} from "../../shared/validator/create-park.validator";
import {OfferCreationPayload} from "./offer.payload";
import {CreateOfferSchema} from "../../shared/validator/create-offer.validator";
import {MarketType} from "../../shared/enum/market-type.enum";

@Controller('offer')
@ApiTags('offer')
export class OfferController {
    constructor(private readonly offerService: OfferService) {
    }

    /**
     * electricity generating parks
     */
    @Post()
    @ApiOperation({ summary: 'Create new electricity offer on a market' })
    @UsePipes(new JoiValidationPipe(CreateOfferSchema))
    addElecGeneratingPark(@Body() payloadCreate: OfferCreationPayload) {
        return this.offerService.createOffer(payloadCreate);
    }

    @Get(':marketType')
    @ApiOperation({ summary: 'list offers on a market' })
    @UsePipes(new JoiValidationPipe(CreateParkSchema))
    listParksOnAMarket(@Param() marketType: MarketType) {
        return this.offerService.listOffers(marketType);
    }


}
