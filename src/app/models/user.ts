import { EmailValidator } from '@angular/forms';

export class User {
    public userId: number;
    public role: string;
    public firstname: string;
    public lastname: string;
    public username: string;
    public password: string;
    public email: string;
    //you may need to add more fields, how do you get the
    //rest of the data when you need it?
}
