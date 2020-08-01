export class LoginModel {
    constructor(
      public Username: string,
      public Password: string,
    ) {  }
  
  }

export interface LoginResponse {
  message:string;
  response:UserLoginData;
 }

 export interface UserLoginData {
  access_token: string;
  username: string;
  expires_in: number;
 }