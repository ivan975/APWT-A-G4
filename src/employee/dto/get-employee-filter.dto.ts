import { UserStatus } from "../employee.model";
import { IsIn, IsNotEmpty, IsOptional } from "class-validator";

export class GetEmployeeFilterDto{
    @IsOptional()
    @IsIn([UserStatus.Check,UserStatus.In_Progress,UserStatus.Done])
    status: UserStatus

    @IsOptional()
    @IsNotEmpty()
    search:string;
}