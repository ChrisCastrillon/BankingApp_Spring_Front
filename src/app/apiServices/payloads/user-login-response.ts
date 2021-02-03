export interface UserLoginResponse {
    userID: number;
    userRole: string;
    firstname: string;
    lastname: string;
    ssn: number;
    username: string;
    password: string;
    email: string;
    addressess: {
        id: number;
        street: string;
        city: string;
        state: string;
        zipcode: number;
    }
    accounts: {
        accountNumber: number;
        accountType: string;
        balance: number;
    }
    application: {
        applicationId: number;
        accountType: string;
        income: number;
        jobTitle: string;
    }
}
