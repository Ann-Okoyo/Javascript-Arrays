//concat
let carName1 = "Porsche Cayenne"
let carname2 = "Porsche Turbo"
let carName3 = carName1 + carname2;
console.log(carName3);


//length
let passenger = "Jeff Wakah";
let seatmate = passenger.length;
console.log(seatmate)


//substring
//The difference is that the second parameter specifies the length of the extracted part.
let str = "Apple , Banana, Kiwi"
let part  = str.substring(7,6);
console.log(part);

let work = "Basigo"
let newWork = work.replace("Basigo" , "Microsoft");
console.log(newWork);

//Remember to learn how to use .match () with the g flag
//Study on .match()



//replace case insensitive, use a regular expression with an i flag
let text = "Ann finished the essay in time!";
let newText = text.replace(/in time/i, "on time");
console.log(newText);

let Ann = "Engineer";
let Wakah = Ann.toLowerCase();
console.log(Wakah);


let Muyale = "software developer";
let OKoyo = Muyale.toUpperCase();
console.log(OKoyo);


let Wakah3 = "Engineer"
let Ann1  = "Software developer";
let Ann2 = Wakah3.concat("" , Ann1);
console.log(Ann2);

//trim - removes the witespace from both sides of the string
let Wakahia = "   We   Are   friends   ";
let Muyale4 = Wakahia.trim();
console.log(Muyale4);


//trimStart -only removes the space at the start
let Anita = "  Our class 33 students";
let Borg = Anita.trimStart();
console.log(Borg);

//trimEnd-removes spaces at the end
let Ada = "    I am a student at AkiraChix.     "
let school = Ada.trimEnd();
console.log(school);

// const title = "ann";
// const title1 = "wakah";
// const result ='The names are ${title} and ${title1}';
// console.log(result)
//accessing string chracter
const a = 'hello';
console.log(a[1]);

//another way is to use the method chartAt()
const word = 'Hello';
console.log(word.charAt(3));

let kate = 'Masaai';
console.log(kate.charAt(4));

let mary = 'Annet';
console.log(mary.charAt(4))

let shirleen = 'Muyale';
console.log(shirleen.charAt(5));

let anitaB = "Smart ladies"
console.log(anitaB[5]);

let masian = "Katey";
console.log(masian.length -4);

let brush = "I know how to code";
console.log(brush.length -6)

let smart ="SChool";
console.log(smart.charAt(3));
//another way to acces the string charachter
const chair = "Plastic";
console.log(chair.charAt(2));

const nations = "Kenya";
console.log(nations.charAt(3));

const z = "cello";
console.log(z.charAt(2));
//one can also use [] instead of chatAt
const b = "saxophone";
console.log(b[2]);

//JS strings are immutable 
//THta means the characters of a string cannot 
let k = 'hello';
a[0] = 'H';
console.log(a);

let t = 'Hello';
t = 'Hello';
console.log(t);

//Javascript is case sensitive
// const a = 'a';
// const d= 'A';
// console.log(a === b);

//jAVASRCIPT RECOGNIZES  THE UPPER AND LOWER CASE

//Javascript String length
const l = 'hello';
console.log(l.length);

//yOU CAN ALSO CREATE STRINGS USING THE NEW KEYWORD . fOR EXAMPLE
let chef  = "Good food";
let chef1 = new String("Good food");
console.log(typeof chef);
console.log(typeof chef1);

//Its not advisable to  use sztring objects since it slows down the program
//concat()-joins two or more strings
let fruit = "Banana";
let fruit1 = "  Watermelon";
console.log(fruit.concat(fruit1));

let fruit2 = "Kiwi";
let fruit3 = " Apple";
console.log(fruit2.concat(fruit3));


let sharp = "Smart ";
let sharp1 = "Smooth";
console.log(sharp.concat(sharp1));

let Ada2 = "Rediet";
let Ada3 = " Victoria";
console.log(Ada2.concat(Ada3))

//replace -replaces a string with another string
let Hopper = "Regina";
// let Hopper1 = "Susan";
console.log(Hopper.replace("Susan"));

//split -converts the string to an array of strings
let Class1 = "Children  Father Mother";
console.log(Class1.split());

let class2 = "Ann , Kate , Shirl , Masian "
console.log(class2.split());

let class3 = "Paisley Cameron Petty";
console.log(class3.split());

//substr returns a part ofa string
//substr(start,length)
let class4 = "Buttercup Blossom Bubbles";
console.log(class4.substr(0,8));
console.log(class4.substr(5,11));
console.log(class4.substr(1,7));
//returns a part of a string
//substring(start,end)
console.log(class4.substring(4,10));
console.log(class4.substring(2,10));


let lastWords = "beautiful";
let lastwords2 = "beauty";
let lastwords3 = lastWords.concat(lastwords2);
console.log(lastwords3);

let oils = "Nivea";
console.log(oils.length);

let oils2 = "Vaseline";
console.log(oils2.length);


//indicates the spcific character at that index
let oils3 = "Coco butter";
console.log(oils3.charAt(5));

// let oils4 = "Dove oil"
// console.log(oils4.charAt(6));
// console.log(oils4.length -1);

 //index of checks the occurence of a string
let message ="My name is an Muyale I am an Engineer.";
let message2 =message.indexOf("an");

let explain = "I live in Komarock we live in Komarock";
let explain2 = explain.indexOf("Komarock");
console.log(explain2);
console.log(explain.lastIndexOf("live"));
//both lastindex and indexOf return -1 incase the text is not found

//search -searches a string for string
let put = "I live in Komarock 3A";
let put1 = put.search("Komarock");
console.log(put1);

// The match() method returns an array containing the results of matching 
// a string against a string (or a regular expression).
let travel = "I am travelling to United Kingdom in 2024.";
let travel2 = travel.match(/nite/g);
console.log(travel2);

let abroad = "I love Kenya very much";
let abroad2 = abroad.match(/ove/g);
console.log(abroad2);

// matchAll() method returns an iterator containing the 
// results of matching a string against a string (or a regular expression).
// let outside = "Kenya , Egypt ,SouthAfrica"
// let outside2 = outside.matchAll(Kenya/g);
// console.log(outside2);

//includes
let come = "USA , Canada , Germany";
let come2= come.includes("Canada");
console.log(come2);

let sum = "Brackets , multiply , subtract";
let sum2 = sum.includes("multiply");
console.log(sum2);


let hard1 = "South Africa";
let hard2 =hard1.indexOf(" ");
console.log(hard2);
//starts with and ends with is case sensitive
console.log(hard1.startsWith("S"));
console.log(hard1.startsWith("T"));
console.log(hard1.endsWith("a"));


// let firstname = "Ann";
// let secondname = "Muyale";
// let fullnames = "My name is ${firstname} , ${secondname}"
// console.log(fullnames);
//Learn how to interpolate

let jacket1 = "ann is a software developer";
console.log(jacket1.toUpperCase());

let jacket2 = "ANN IS AN ENGINEER";
console.log(jacket2.toLowerCase());

let text4 = "Javscript ";
let text5 = text4.concat("kotlin");
console.log(text5);

let text6 = "Kotlin";
console.log(text6.concat("Kotlin" , "Javascript"))
//concat is used instead of the plus operator

// 
let doit1 = "beautiful";
let doit2 =doit1.slice(4)
console.log(doit2)

// Insert the following string at the fourth 
// index of the below variable:
// "eat"
// const food = "I was feeling hungry today"
// let food6 = "I was feeling hungry today";
// let food7 =food6.insert;
// console.log(food7)
//concat
let clas1="I am happy today";
let clas2="And nothing is gonna change that";
let clas3= clas1+clas2;
console.log(clas3)

let among1 ="I am gonna make it";
let amng2 ="and i' gonna shine";
console.log(amng2)

// length property returns the length of 
// a string:
let counting ="I am Ann Muyale";
let counting2 =counting.length;
console.log(counting2)

let doing ="I love coding.";
let doing1 =doing.length;
console.log(doing1)

let names4 ="I am improving.";
let names5 =names4.length;
console.log(names5)

let wednesday ="Apple,Banana,Kiwi";
let tuesday =wednesday.slice(-4);
console.log(tuesday)

let thursday = "Mangoes,Apples,Banana";
let thursday1 = thursday.slice(-12);
console.log(thursday1)


let socialmedia = "linkedin,facebook,instagram,";
let socialmedia1=socialmedia.slice(-12,-6);
console.log(socialmedia1)
//in slice will only print the first and leave out the last

//javascript substring
let str8 ="Apple,Banana,Kiwi";
let part8 =str8.substring(7,13);
console.log(part8)
//subdtring will print the first and leave out the second
//the second speciificies the strin to be extracted
let tv ="Hisense , Samsung";
let tv2 =tv.substring(7,6);
console.log(tv2)
//The difference is that the second parameter specifies the length of the extracted part.
//




































