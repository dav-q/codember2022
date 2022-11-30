import * as battleRoyaleType from "./battle_royale_types";
import { example_battle,test_battle } from "./battle_royale_data";

/**
 * battleRoyale
 * @param frameworks list of competing frameworks
 * @returns battleRoyaleType.IFoundSurvivor
 */
const battleRoyale = (frameworks:Array<string>):battleRoyaleType.IFoundSurvivor => {
    let survivors:Array<string> = [...frameworks]
    let unique:boolean=true
    while(unique){
        for (let index = 0; index < survivors.length; index++) {
            let survivor = survivors[index];
            if(survivor){
                let find_next_survivor:number = survivors.slice(index+1).findIndex((_i)=>_i)
                if(find_next_survivor!=-1){
                    console.log(survivor+" KILLS 🔫 "+survivors[find_next_survivor+(index+1)]);
                    survivors[find_next_survivor+(index+1)] = undefined
                }else{
                    let found_first_survivor:number = survivors.findIndex((_i)=>_i)
                    if(found_first_survivor!=-1){
                        console.log(survivor+" KILLS 🔫 "+ survivors[found_first_survivor]);
                        survivors[found_first_survivor] = undefined
                    }
                }
            }
        }
        if(survivors.filter((_i)=>_i).length==1) unique = false
    }
    let found_survivor:number = survivors.findIndex((_i)=>_i)
    return {
        survivor:survivors[found_survivor],
        position:found_survivor
    }
}

console.log(battleRoyale(test_battle))