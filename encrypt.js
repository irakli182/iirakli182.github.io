`use strict`;

const button_encrypt = document.getElementById('button-encrypt');

const button_refresh = document.getElementById('button-refresh');



button_encrypt.addEventListener('click', function(){
  let left_text = document.querySelector("#textarea-left").value;
  

  let encrypt_number = Number(document.querySelector("#encrypt-number").value);
  console.log(encrypt_number)
  console.log(left_text);

  const list_alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  console.log(left_text.length)

  let k = -1;
  let encrypt_sentence = [];

  for (i = 1; i <= left_text.length; i++) {
    if ((left_text[k+1] >= 'a' && left_text[k+1] <= 'z') || (left_text[k+1] >= 'A' && left_text[k+1] <= 'Z')) {
      let index_orig_sentence = list_alphabet.indexOf(left_text[k+1])
      word = list_alphabet[index_orig_sentence + encrypt_number]
      encrypt_sentence.push(word)
      k++
    } else if (left_text[k+1] >= '0' && left_text[k+1] <= '9') {
      encrypt_sentence.push(left_text[k+1])
      k++
    } else if (left_text[k+1] === " " || left_text[k+1] === "."  || left_text[k+1] === "," || left_text[k+1] === "!" || left_text[k+1] === "?" || left_text[k+1] === "'" || left_text[k+1] === '"') {
      encrypt_sentence.push(left_text[k+1])
      k++
    }
    }

console.log(encrypt_sentence)

let join_arr = encrypt_sentence.join("")
console.log(join_arr)


  document.querySelector("#textarea-right").textContent = join_arr;
 

}); 

button_refresh.addEventListener('click', function(){
  location.reload()
})



