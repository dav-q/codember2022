import * as passwordType from "./password_types";

/**
 * Found Password
 * @param range range to make array of passwords
 * @param right_index index from right password
 * @returns passwordType.IFoundPassword
 */
const findPassword = (range: passwordType.IRangePassword, right_index: number): passwordType.IFoundPassword => {

    let repeat_number_required = 5
    let min_repetitions = 2
    let passwords: Array<string> = []
    let range_password: Array<string> = []

    for (let index = range.start; index < (range.end + 1); index++) {
        passwords.push(index?.toString())
    }
    for (let index = 0; index < passwords.length; index++) {
        const password = passwords[index];
        let is_valid: boolean = false
        let accum_five: number = 0
        for (let index = 0; index < password.length; index++) {
            const number = password[index];
            if (parseInt(number) == repeat_number_required) accum_five++
            if ((index < password.length - 1) && !(password[index + 1] && parseInt(number) <= parseInt(password[index + 1]))) {
                is_valid = false
                break
            }
            is_valid = true
        }
        if (accum_five >= min_repetitions && is_valid) range_password.push(password)
    }

    return {
        total_passwords: range_password.length,
        password: range_password[right_index]
    }
}
console.log(findPassword({ start: 11098, end: 98123 }, 55)) 