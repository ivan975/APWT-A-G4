import { Injectable } from "@nestjs/common";
import { EmployeeForm } from "./employee.dto";

@Injectable()
export class EmployeeService {
    getIndex():string {
        return "Employee Index";
    }

    getUserByID(id):any{
        return "The id is "+id;
    }

    getUserByName(qry):any {
    
        return "the id is "+qry.id +" and name is "+qry.name;
    }
    
    insertUser(mydto:EmployeeForm):any {
        
        return "Employee Inserted name: " + mydto.name+" and id is " + mydto.id;
    }

    insertEmployee(mydto:EmployeeForm):any{
        return "Employee name: "+mydto.name+ "and id is: "+mydto.id;
    }

        
    updateEmployee(name,id):any {
        return "Employee updated name: " +name+" and id is " +id;
    }

    updateEmployeebyid(name,id):any {
        return "Update Employee where id " +id+" and change name to " +name;
    }

    deleteEmployeebyid(id):any {

        return "Delete id is "+id;
    }

}