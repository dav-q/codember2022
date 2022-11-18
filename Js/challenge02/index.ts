import { test_message } from "./encrypted_data";

const decodeMessage = (message: string): string => {
  let default_jumps: number = 2;
  let min_code: number = 32;
  let max_code: number = 255;
  let words: Array<string> = message.split(" ");
  let new_sentence: Array<string> = [];

  for (let index = 0; index < words.length; index++) {
    const word = words[index];
    let init: number = 0;
    let finish: number = default_jumps;
    let new_word: string = "";
    while (finish < word.length) {
      let letter: string = word.slice(init, finish);
      let normal_jump: boolean = true;
      if (parseInt(letter) < min_code) {
        let new_letter: string = word.slice(init, finish + 1);
        if (!(parseInt(new_letter) > max_code || new_letter[0] === "0")) {
          letter = new_letter;
          normal_jump = false;
        }
      }
      letter = String.fromCharCode(parseInt(letter));
      new_word += letter;
      init = normal_jump ? finish : finish + 1;
      finish += normal_jump ? default_jumps : default_jumps + 1;
    }
    new_sentence.push(new_word);
  }
  return new_sentence.join(" ");
};

console.log(decodeMessage(test_message))