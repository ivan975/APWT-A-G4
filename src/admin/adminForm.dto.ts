import { IsNotEmpty, IsInt, Length, IsEmail, IsOptional } from 'class-validator';

export class CreateAdmin {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @Length(3, 8)
    @IsNotEmpty()
    password: string;    
}

export class CreateEmployee {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    department: string;

    @IsInt()
    salary: number;

    @IsInt()
    @IsNotEmpty()
    @IsOptional()
    adminId: number;
    
    /*
    constructor(partial: Partial<CreateEmployee>) {
        Object.assign(this, partial);
    }
    */
}
