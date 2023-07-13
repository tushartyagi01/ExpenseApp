import { IsNumber, IsPositive,IsNotEmpty,IsString, IsOptional} from "class-validator";
import { Exclude,Expose } from "class-transformer";
import { ReportType } from "src/data";
import {v4 as uuid} from 'uuid';
export class createReportDto{
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    amount:number;

    @IsNotEmpty()
    @IsString()
    source:string;
}
export class updateReportDto{
    @IsOptional()
    @IsNumber()
    @IsPositive()
    amount:number;

    @IsOptional()    
    @IsString()
    @IsNotEmpty()
    source:string;

}

export class reportReponseDto{
    id:string;
    amount:number;
    source:string;
    created_By:Date;

    @Exclude()
    updated_By:Date;
    type:ReportType;
     

    // basically we write this to understand to create an instance of this type
    // it will take an object and then trim it out
    constructor(obj: Partial<reportReponseDto>){
        Object.assign(this,obj);
    }
}