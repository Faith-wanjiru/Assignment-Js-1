//Extract the last four characters from the string below;"extravaganza"
//Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"
//Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
//Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
//Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"



let text = "extravaganza"
console.log({character:a[8]});
console.log({character:a[9]});
console.log({character:a[10]});
console.log({character:a[11]});


const food ="The quick brown fox jumped over the lazy dog"
const insert ="eat"
const secfood = food.substring(0,4) + insert + food.substring(4);
console.log(secfood);


let s = "The quick brown fox jumps over the lazy dog";
let f = "The";
let r = "brown";
let c = a.indexOf(f);
let b = d.indexOf(r);
let g = 0;
while (c!= -1){
    g++;
    c = a.indexOf(c, f+1);
    b = d.indexOf(b, d+1);
}
console.log(c);
console.log(b);


const string1 = "The pupils are reading in the library";
console.log({index:string1.indexOf('are') });