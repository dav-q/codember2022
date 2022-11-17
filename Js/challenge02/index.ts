let s1 = "109105100117" // midu
let s2 = "9911110010110998101114" // codember
let s3 = "9911110010110998101114 109105100117" // codember midu
let s4 = "11210897121 116101116114105115" // play tetris
let s5 = "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101"
let s6 = "12699111100101109981011141269911110010110998101114" // ~codember~codember


const decodeMessage = (message:string)=>{
    let min = 97
    let max = 126
    let words = message.split(' ')

    let new_sentence = []
    for (let index = 0; index < words.length; index++) {
        const word = words[index];
        let divided =word.length / 3

        let init = 0
        let finish = 3
        let left_character = ''
        let new_word = ''

        for (let index = 0; index < divided; index++) {
            let letter = word.slice(init,finish)
            init = finish
            finish += 3            
            if(left_character!=='') letter = `${left_character}${letter}`
            
            console.log(letter,"BEFORE WHILE");
            let itera = 0
            while(parseInt(letter)>max){

                if(parseInt(letter)>max){
                    console.log(parseInt(letter),"letter and character",left_character);
                    let end = 3
                    // left_character = letter.substring(letter.length-1)
                    if(letter.length<=3) end = 2
                    else if(letter.length>=3) end = letter.length-1
                    
                    if(itera>0)left_character = (letter.substring(end)+left_character)
                    else left_character = letter.substring(end)
                    
                    console.log(left_character,"left_character");
                    // if(left_character.length>0) left_character = left_character.split("").reverse().join("")
                    // console.log(left_character,"left_character");
                    
                    letter = letter.substring(0,end)
                }else{
                    left_character = ''
                    // break
                }
                // break
                itera++
                // console.log(itera,"itera");
            }
            console.log(letter,left_character,index,"------------REAL----------");
            
            letter = String.fromCharCode(parseInt(letter))
            if(letter==="~") console.log("***********************************************************************");
            new_word+=letter
        }
        new_sentence.push(new_word)
    }
    console.log(new_sentence.join(' '));
}

decodeMessage(s5)