import { User } from "src/app/models/user";

export interface AccountApplicationResponse {
    applicationID:number;
    accountType:string;
    income:number;
    jobTitle:string;
    email:string;
    user: User;
    status:string;
}
