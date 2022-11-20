import { ILightsData } from "./lights_types";
import { test_light } from "./lights_data";

/**
 * Make string in object format
 * @param string_object
 * @returns string
 */
const calculateLights = (lights:Array<string>):ILightsData => {
    let values:Array<number> = []
    let colors:Array<string> = []
    let last_counter:number = 0
    for (let index = 0; index < lights.length; index++) {
        const light = lights[index];
        const left_lights = lights.slice(index+1,lights.length)
        let counter:number = 0
        let black_color:string = light
        let white_color:string = ''
        if(light && left_lights.length>0){
            let compare_first:boolean = true
            for (let index = 0; index < left_lights.length; index++) {
                const left_light = left_lights[index];
                let is_break:boolean = false
                if(index==0){
                    white_color = left_light
                    let increase:number = 1
                    if(light!==left_light) increase++
                    else is_break = true
                    counter+=increase
                }else{
                    if(compare_first){
                        if(light===left_light){
                            black_color = left_light
                            counter++
                        }else is_break = true
                    }else{
                        if(white_color===left_light){
                            black_color = left_light
                            counter++
                        }else is_break = true
                    }
                    compare_first = (!compare_first)
                }
                if(is_break) break
            }
            last_counter = counter
        }else{
            let increase:number = 1
            if(last_counter>=2) increase++
            counter+=increase
        }
        values.push(counter)
        colors.push(black_color)
    }
    let max = Math.max(...values)
    let position = values.lastIndexOf(max)
    let color = colors[position]
    return {
        max,
        color
    }
}
console.log(calculateLights(test_light))