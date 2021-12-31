const anagram = function(str1, str2){
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length != str2.length){
    return false;
  }
  let object1 = {};
  let object2 = {};
  for(let i = 0; i < str1.length; i++){
    object1[str1[i]] ? object1[str1[i]]++ : object1[str1[i]] = 1
    object2[str2[i]] ? object2[str2[i]]++ : object2[str2[i]] = 1
  }
  let array = [];
  for(const key in object1){
    array.push(key in object2 && object1.key === object2.key);
  }
  return !(false in array);
}

console.log(anagram('finder', 'Friend'));
console.log(anagram('hello', 'bye'));
