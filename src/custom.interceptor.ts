import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import {map} from 'rxjs';
export class CustomInterceptor implements NestInterceptor{
  intercept(
    context: ExecutionContext,
    handler:CallHandler

  ){
     return handler.handle().pipe(
        map((data)=>{
            const reponse= {
                ...data,
                createdAt:data.created_By
            }
            delete reponse.updated_By;
            delete reponse.created_By;

            console.log("data" ,{reponse});
      return reponse;
        })
     )
  }
}