import {ParkService} from "./park.service";
import {Body, Controller, Get, Param, Post, UsePipes} from "@nestjs/common";
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {JoiValidationPipe} from "../../shared/validator/joi-validation-pipe";
import {CreateParkSchema} from "../../shared/validator/create-park.validator";
import {ParkCreationPayload} from "./park.payload";
import {MarketType} from "../../shared/enum/market-type.enum";

@Controller('park')
@ApiTags('park')
export class ParkController {
    constructor(private readonly parkService: ParkService) {
    }

    @Post()
    @ApiOperation({ summary: 'Create new electricity generating park' })
    @UsePipes(new JoiValidationPipe(CreateParkSchema))
    addElecGeneratingPark(@Body() payloadCreate: ParkCreationPayload) {
        return this.parkService.createPark(payloadCreate);
    }

    @Get(':marketType')
    @ApiOperation({ summary: 'list parks selling on a market' })
    listParksOnAMarket(@Param('marketType') marketType: MarketType) {
        return this.parkService.listParks(marketType);
    }

}
