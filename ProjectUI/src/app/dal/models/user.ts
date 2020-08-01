export interface UserModel {
    id: string;
    fullName: string;
    age: Number;
    birthdate: Date;
    gender: string;
}

export interface UsersListResponse {
    data: UserModel[];
    message: string;
}


