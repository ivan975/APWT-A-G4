import { BadRequestException } from "@nestjs/common/exceptions";
import { PipeTransform } from "@nestjs/common/interfaces";
import { UserStatus } from "../employee.model";

export class UserStatusValidationPipe implements PipeTransform{
    readonly allowedStatus =[

        UserStatus.Check,
        UserStatus.In_Progress,
        UserStatus.Done,
    ];
    transform(value:any){
        value = value.toUpperCase();

        if (!this.isStatusVallied(value)){
            throw new BadRequestException('Invalid Status')
        }

        return value;

    }
        private isStatusVallied(status:any){
           const idx= this.allowedStatus.indexOf(status);

           return idx !== -1;


        }
    

    
    }
