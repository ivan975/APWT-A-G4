export interface Employee {
    id: number;
    name: string;
    email: string;
    status: string;
}

export enum UserStatus{
    Check = 'Check',
    In_Progress = 'In_Progress',
    Done = 'Done',

}