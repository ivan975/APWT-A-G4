//import { IsInt, IsNotEmpty, Length } from "class-validator";

export class EmployeeForm {   
    //@IsNotEmpty({message: "Please enter your id"}) 
   // @IsInt()
    id: number;

   // @IsNotEmpty()
   // @Length(3,8)
    name: string;



}