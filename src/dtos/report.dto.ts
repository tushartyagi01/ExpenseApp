import { IsNumber, IsPositive,IsNotEmpty,IsString} from "class-validator";


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
    @IsNumber()
    @IsPositive()
    amount:number;
    
    @IsString()
    source:string;

}