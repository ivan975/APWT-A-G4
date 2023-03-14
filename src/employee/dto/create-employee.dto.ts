import { IsNotEmpty } from 'class-validator';

export class createformdto{
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    status:string;
}