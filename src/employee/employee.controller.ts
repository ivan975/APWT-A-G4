import { Controller,Body,Delete,Put,Get,Param,ParseIntPipe,Query,Post} from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import {EmployeeForm} from "./employee.dto";

@Controller("Employee")

    export class EmployeeController
    {
    constructor( private employeeservice:EmployeeService ){}
    @Get("/index")
    getemployee():any{
        return this.employeeservice.getIndex();
    }

    @Get("/:id")
    getUserById(@Param("id,ParsenIntPipe")id:number):any{
        return this.employeeservice.getUserByID(id);
    }

    /*@Get("/finduser")
    getUserByName(@Query()gru:any):any{
        return this.employeeservice.getUserByName(qry);
    }*/

    @Post("/insertEmployee")
    insertEmployee(@Body() mydto:EmployeeForm):any{
        return this.employeeservice.insertEmployee(mydto);
    }

    @Put("/updateEmployee/:id")
    updateEmployee(
        @Body("name")name:string,
        @Body("id")id:number
    ): any{
        return this.employeeservice.updateEmployee(name, id);
    }

    @Put("/updateEmployee/:id")
    updateEmployeeid(
        @Body("name") name:string,
        @Param("id,ParseIntPipe") id:number
    ) : any{
        return this.employeeservice.updateEmployee(name,id);
    }

    @Delete("/deleteEmployee/:id")
    deleteEmployeebyid( 
     @Param("id", ParseIntPipe) id:number
      ): any {
    return this.employeeservice.deleteEmployeebyid(id);
    }
}