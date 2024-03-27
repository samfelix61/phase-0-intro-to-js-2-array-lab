// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    return cats.push('Ralph');
}
function destructivelyPrependCat(name){
    return cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function appendCat(name){
    let newArray = [...cats, name]
    return newArray;
}
function prependCat(name){
  const  newArray = [name, ...cats]
  return newArray;
}
function removeLastCat(){
    return cats.slice(0, cats.length-1)
}
function removeFirstCat(){
    return cats.slice(1)
}