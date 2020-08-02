import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export interface UserModel {
    id: Number;
    fullName: string;
    age: Number;
    birthdate: Date ;
    gender: string;
}

export interface UsersListResponse {
    data: UserModel[];
    message: string;
}


