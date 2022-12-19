import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BillsService } from './bills.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('bills')
@ApiTags("Bill of cleaner")
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Post(":cleanerID")
  @ApiParam({name: "cleanerID", type: "string"})
  @ApiOperation({summary: "hotel and company role access"})
  async create(@Param() createBillDto: CreateBillDto) {
    const createdResult = await this.billsService.create(createBillDto);
    return {
      message: "updated/created successfully"
    }
  }
  
  @Get()
  @ApiOperation({summary: "hotel and company role access"})
  async findAll() {
    const bills = await this.billsService.findAll();
    return {
      bills
    }
  }
  
  @Get('/by-cleaner/:cleanerID')
  @ApiOperation({summary: "hotel and company role access"})
  async getByCleaner(@Param('id') id: string) {
    const bill = await this.billsService.getCleanerBill(id);
    return {
      bill
    }
  }
  
  @Get(':id')
  @ApiParam({name: "id", type: "string"})
  @ApiOperation({summary: "hotel and company role access"})
  async findOne(@Param('id') id: string) {
    const bill = await this.billsService.findOne(id);
    return {
      bill
    }
  }


}
