import { Controller, Get,Post,Put,Delete,Param, Body ,ParseIntPipe,ParseUUIDPipe, ParseEnumPipe} from "@nestjs/common";
import { data ,ReportType} from "./data";
import {v4 as uuid} from 'uuid';
import { AppService } from "./app.service";
import { createReportDto, reportReponseDto, updateReportDto } from "./dtos/report.dto";

@Controller('report/:type')
export class AppController{
 constructor(private appService:AppService){}
  @Get()
  getAllIncomeReport(@Param('type') type:string): reportReponseDto[]{
    const reportType = type==='income'? ReportType.Income : ReportType.Expense;
      return this.appService.getAllReports(reportType);
    //  return [];
  }
  @Get('/:id')
  getIncomeReportById( @Param('type' ,new ParseEnumPipe(ReportType)) type: string, @Param('id',ParseUUIDPipe) id:string) : reportReponseDto {
     const reportType = type==='income'? ReportType.Income : ReportType.Expense;
    return this.appService.getReportById(reportType,id)
  }

  @Post( )
  createReport(@Body() body :createReportDto, @Param('type',new ParseEnumPipe(ReportType)) type:string){
    const reportType= type=== "income"? ReportType.Income: ReportType.Expense;
     return this.appService.createReport(reportType,body)
  }
  @Put('/:id')
  updateReport( @Param('type',new ParseEnumPipe(ReportType)) type:ReportType, @Param('id',ParseUUIDPipe) id:string,@Body()body:updateReportDto){
       const reportType= type==='income'? ReportType.Income : ReportType.Expense;
      return this.appService.updateReport(reportType,id,body);
  }
  @Delete('/:id')
  deleteReport(@Param('type',new ParseEnumPipe(ReportType)) type: string, @Param('id',ParseUUIDPipe) id:string){
    // const reportIndex= data.report.findIndex((report)=>report.id==id);
    return this.appService.deleteReport(id);
  }
}