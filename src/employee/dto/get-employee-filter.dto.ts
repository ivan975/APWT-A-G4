
import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { UserStatus } from "../employee-status.enum";

export class GetEmployeeFilterDto{
    @IsOptional()
    @IsIn([UserStatus.Check,UserStatus.In_Progress,UserStatus.Done])
    status: UserStatus

    @IsOptional()
    @IsNotEmpty()
    search:string;
}