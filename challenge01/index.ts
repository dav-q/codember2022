import { users } from "./users_data";
import * as userTypes from "./user_types";

/**
 * Make string in object format
 * @param string_object
 * @returns string
 */
const stringToFormatObject = (string_object: string): string => {
  let key_and_values: Array<string> = string_object.split(" ");
  let strings_formated: Array<string> = [];
  for (let index = 0; index < key_and_values.length; index++) {
    const _kv = key_and_values[index];
    let values = _kv.split(":");
    let key_and_value = `"${values[0]}":"${values[1]}"`;
    strings_formated.push(key_and_value);
  }
  let final_string = `{${strings_formated.join(",")}}`;
  return final_string;
};

/**
 * Validate if user data has all required attributes
 * @param data
 * @returns  IValidateUser
 */
const validateUser = (data: string): userTypes.IValidateUser => {
  let is_valid = false;
  const attributes_required = ["usr", "eme", "psw", "age", "loc", "fll"];
  let user_data_object = JSON.parse(data);
  for (let index = 0; index < attributes_required.length; index++) {
    const attr = attributes_required[index];
    if (user_data_object[attr]) {
      is_valid = true;
    } else {
      is_valid = false;
      break;
    }
  }
  return {
    is_valid,
    user_data_object,
  };
};

/**
 * Validate users from string DB
 * @param data
 * @returns  IValidateBots
 */
const validateBots = (db_data: string): userTypes.IValidateBots => {
  let split_by_users: Array<string> = db_data.split("\n");
  let total_valid_users: number = 0;
  let total_invalid_users: number = 0;
  let last_user_valid: string = "";
  let accum_data: string = "";

  for (let index = 0; index < split_by_users.length; index++) {
    const data = split_by_users[index];
    let user_data = data;
    if (data === "" || (index + 1 == split_by_users.length)) {
      let string_as_object = stringToFormatObject(accum_data);
      let validate_user = validateUser(string_as_object);
      if (validate_user?.is_valid) {
        total_valid_users++;
        last_user_valid = validate_user.user_data_object.usr;
      } else total_invalid_users++;
      accum_data = "";
      continue;
    }
    accum_data += ` ${user_data} ${split_by_users[index + 1] ?? ""}`;
  }

  return {
    total_valid_users,
    total_invalid_users,
    last_user_valid,
  };
};
console.log(validateBots(users));
