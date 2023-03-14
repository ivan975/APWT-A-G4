import { IsNotEmpty, IsInt, Length, IsEmail } from 'class-validator';

export class CreateAdmin {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @Length(3, 8)
    password: string;    
}

export class CreateEmployee {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @Length(3, 8)
    password: string;

    @IsInt()
    salary: number;

    @IsInt()
    @IsNotEmpty()
    adminid: number;
}