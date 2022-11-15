package main

import (
	"fmt"
	"io/ioutil"
	"strings"
	"golang.org/x/exp/slices"
)

func main() {

	data := ReadData("test_data")
	lines := strings.Split(data, "\n")
	total_lines := len(lines)
	last_string := ""
	total_valid := 0
	last_user := ""

	for _index, line := range lines {
		str,breakl := makeUserString(last_string,line)
		last_line := _index+1==total_lines
		if breakl || last_line {
			if(last_line){
				last_string += (" " + line)
			}
			is_valid,username := validateUser(strings.Trim(last_string," "))
			if(is_valid){
				total_valid ++
				last_user = username
			}
			last_string = ""
		}else{
			last_string += (" "+str)
		}
	}
	fmt.Printf("Total usuarios válidos: %d , Último usuario válido: %s\n",total_valid,last_user)
}

func validateUser(user_string string)(bool,string) {
	is_valid := true
	username := ""
	attributes_required := []string{"usr", "eme", "psw", "age", "loc", "fll"}
	user_data := strings.Split(user_string, " ")
	keys := make([]string, len(user_data))
	values := make([]string, len(user_data))

	for _index, data := range user_data {
		key_value := strings.Split(data, ":")
		keys[_index] = key_value[0]
		values[_index] = key_value[1]
		if(key_value[0]=="usr"){
			username = key_value[1]
		}
	}

	for _, attr := range attributes_required {
		exists := slices.Contains(keys, attr)
		if(!exists) {
			is_valid = false
			break
		}
	}

	return is_valid,username
}

func makeUserString(accum_string string , new_string string)(string , bool) {
	break_line := false
	final_string := "%s %s"
	final_string  = fmt.Sprintf(final_string, accum_string, new_string)
	if new_string == "" {
		break_line = true
	}
	return new_string , break_line
}

func ReadData(file_name string)(string) {
	path := "././Challenges/01/filesData/%s.txt"	
	path  = fmt.Sprintf(path, file_name)
	file, err := ioutil.ReadFile(path)
	if err != nil {
		fmt.Println("An error has ocurred",err)
		return "Error"
	} else {
		return string(file)
	}
}