export interface IUser {
  usr: string;
  eme?: string;
  psw?: string;
  age?: string;
  loc?: string;
  fll?: string;
}

export interface IValidateUser {
  is_valid: boolean;
  user_data_object: IUser;
}

export interface IValidateBots {
  total_valid_users:number;
  total_invalid_users:number;
  last_user_valid:string;
}
