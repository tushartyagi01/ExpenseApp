
export  enum ReportType{
    Income="income",
    Expense="expense"
}

export const data:reportType= {
    report:[
        {
            id:"uuid1",
            source:"salary",
            amount:1000,
            created_By: new Date(),
            updated_By: new Date(),
            type: ReportType.Income
        },
        {
            id:"uuid2",
            source:"pocket money",
            amount:14400,
            created_By: new Date(),
            updated_By: new Date(),
            type: ReportType.Income
        },
        {
            id:"uuid3",
            source:"Youtube",
            amount:5000,
            created_By: new Date(),
            updated_By: new Date(),
            type: ReportType.Income
        },
        {
            id:"uuid4",
            source:"intrest",
            amount:500,
            created_By: new Date(),
            updated_By: new Date(),
            type: ReportType.Income,
        },
    ]
}
export interface reportType{
       report:{
        id:string,
        source:string,
        amount:number,
        created_By: Date,
        updated_By: Date,
        type:ReportType
       }[]
}
