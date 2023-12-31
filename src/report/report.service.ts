import { Body, Injectable } from "@nestjs/common";
import { ReportType, data } from "../data";
import {v4 as uuid} from 'uuid';
import { reportReponseDto } from "../dtos/report.dto";
interface updateReport {
  amount?:number,
  source?:string
}
@Injectable()
export class ReportService{

  getAllReports(type:ReportType):reportReponseDto[] {
       
       return data.report.filter((report)=>report.type===type);
  }
  getReportById(type:ReportType,id:string):reportReponseDto{
    const report= data.report.filter((report)=>report.type===type).find((report)=>report.id===id);
    if(!report) return;
    return new reportReponseDto(report);
  }
  createReport(type:ReportType,@Body() {amount,source}:{amount:number,source:string}){
     const reportType= type=== 'income'? ReportType.Income : ReportType.Expense;
     const newReport= {
          id:uuid(),
          source,
          amount,
          created_By:new Date(),
          updated_By: new Date(),
           type:reportType
        }
        data.report.push(newReport);
        return newReport;
  }
  updateReport(type:ReportType,id:string,body:updateReport){
    // const reportType= type=== 'income'? ReportType.Income : ReportType.Expense; 
  //   const  reportToUpdate= data.report.filter((report)=> report.type===reportType).find((report)=> report.id===report.id);
  //   if(!reportToUpdate) return ;
  //  const reportIndex= data.report.findIndex((report)=>report.id===reportToUpdate.id);
    
  //   data.report[reportIndex]={ 
  //     ...data.report[reportIndex],
  //     ...body,
  //     updated_By:new Date()
  //   };
  // const reportType= type==='income'? ReportType.Income : ReportType.Expense;
  const reportToUpdate= data.report.filter((report)=> report.type=== type).find((report)=> report.id===id);
  if(!reportToUpdate) return;
  const reportIndex= data.report.findIndex((report)=> report.id===reportToUpdate.id);
  data.report[reportIndex]={
    ...data.report[reportIndex],
    created_By: data.report[reportIndex].created_By,
    ...body,
   
      updated_By: new Date(data.report[reportIndex].updated_By)
  }
  return data.report[reportIndex];
  }
  deleteReport(id){
    const reportIndex= data.report.findIndex((report)=>report.id===id);
    if(reportIndex==-1) return;
    data.report.splice(reportIndex,1);
    return "deleted";
  }
}