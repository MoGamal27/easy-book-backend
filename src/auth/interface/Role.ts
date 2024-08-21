export enum Role {
    Admin =  'admin',
    User = 'user'
}

type User = {
    id: number;
    name: string;
    email: string;
    role: Role;
}

export interface IAthenticate{
    user: User;
    token: string;
}