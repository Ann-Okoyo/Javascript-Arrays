// 
//HOW TO CREATE AN ARRAY
const cars = [];
cars[0]= "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
console.log(cars)

let children = [];
children[0] = "Ann";
children[1] = "Kate";
children[2] = "Anil";
console.log(children)

//new array
const garis = new Array("Saab" ,"Volvo","BMW");
console.log(garis);


let doit = [];
doit[0] = "Peris";
doit[2] = "Chirlene";
doit[1] = "Pearl";
console.log(doit);

let charles = new Array("Ann","Abriella","Samarah");
console.log(charles);

const Anita = ["Apiu" ,"Ann","Joyce"]
let Anita1 = Anita[0];
console.log(Anita1);


const fruits = ["mangoes" ,"bananas","apples" ,"passions"]
let fruits2 = fruits.length;
console.log(fruits2)

const schools = ["AkiraChix","Starch","Gashora"];
let insts = schools.length;
console.log(schools)

//accessin the first element of an array
let cartoon =["Gumble" , "Bubbles" ,"Timmy"];
let anime =cartoon.length;
console.log(anime)

const foods =["Chips","chicken","sausages"];
let foods3 = foods[0]
console.log(foods3)

const career =["pilot" ,"civil" ,"trainer"];
let careers = career[career.length -1];
console.log(careers);

//looping Array elements
//One way to loop through an array is using for loop
//Your Array.forEach


//Adding array Elements
let drinks = ["Yoghurt","Cake","Doghnut"];
let drinks2 = drinks[0];
console.log(drinks2)

let sweets = ["KCL","PK","Juicy fruit"];
let tam = sweets[2];
console.log(tam);

const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;
console.log(person);

const lady =[];
lady[0] = "Ann";
lady[1] = "Muyale";
lady[3] = "Okoyo";
lady.length;
console.log(lady);

//The difference between arrays and objects
//In javascript ,arrays use numbered indexes
//In javascript , objects use named indexes

const body = ["UN" ,"UNESCO","UN HABITAT"];
let type = typeof body;
console.log(type);

const thing = ["cat","dog","puppy"];
let animal = thing instanceof Array;
console.log(animal);

let jobs = ["Musician","Engineer","Doctor","Software Developer"];
let employment =["Musician","Engineer","Doctor","Software Developer"];
let cares = jobs[jobs.concat(employment)];
console.log(cares);

 



let supers = ['Superman' , 'Batman','flash' ,'Aquaman'];
console.log(supers.push("Spider-man"));
console.log(supers.shift());
console.log(supers);
// console.log(supers.unshift("Captain marvel"));
// console.log(supers);


//Change an aray into a string
let woman = ["Ann" , "Esther","Masian"];
let women3 = woman.toString();
console.log(women3);

//The join() method also joins all array elements into a string.
let join1 =["Airforce" ,"Jordans","Rubbers"];
let join2 = join1.join()
console.log(join2);

//pop reoves the last element in an array and prints it out
let brands = ["Gucci","Versace","Armami"];
let brands1 =  brands.pop();
console.log(brands1);

// 

let Ann = ["Engineer","Musician" ,"Software Developer"];
let Ann2 = Ann.push("Miliioniare");
console.log(Ann2);

//shift removes the first element of an array
let snacks = ["pocorns","crisps" ,"chips"];
let snacks2 = snacks.shift();
console.log(snacks2);

//unshift 
let snacks1 = ["crips" ,"buiscuits","chocolate"];
let snack3  = snacks1.unshift("krackles");
console.log(snack3);


const tamu =["apple","banana","passion"];
const tamu2 = tamu[1];
console.log(tamu2);
console.log(tamu[0]);

//concat 
// 
let myGirls = ["Hailey","Katey","Perry"];
let myGirls1 = ["Daisy","Paisley","Kerry"];
let myGirls3 = myGirls1.concat(myGirls);
console.log(myGirls3);

//becomes one array
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);



//splice adds new item to an array
const stuff = ["Banana","Apple","Water"];
const stuff1 = stuff.splice(0,1);
console.log(stuff1);

const things = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const thing2 = things.slice(1);
console.log(thing2);

let names5 = ["Kerry","Grace","Annie","Susan"," Wendy"];
let names6 = names5.splice(1,5,"Abriella");
console.log(names6);

let months = ["April","May","June","July","August","September"];
let months1 =months.splice(2,3,"October");
console .log(months);
let sw=["jane","mary","caro","ann","mercy"];
let sw1=sw.splice(2,1,"lynn");
console.log(sw);


//push()
//used to add elements to add an element to the end of  an array
//AND RETURNS THE LENGTH OF THE ARRAY
//remeber that the length begins from 1
let ann=["akirachix" , "krs" ,"mwa" ,"lakewood"];
let muyale=ann.push("concordia");
console.log(muyale);
//Adds a new element and returns the new length of the array
let mwa22 =["Jairo","Koske","Mathan","Emmaculate"];
let mwa24 =mwa22.push("Muyale");
console.log(mwa24);


//pop()
//removes the last element in a list
//and prints out the removed element
let supermarkets=["naivas","satelite","josca","carrefour","tuskys"];
let supermarkets2 = supermarkets.pop();
console.log(supermarkets2);


let styles = ["mowhak","jordan","box","weaves"];
let styles2 = styles.pop();
console.log(styles2)

let clas =["AnitaB","Ada lab","loveleace"]
let class4 =clas.pop();
console.log(class4);

let languages1 = ["Python","CSS","Javascrit"];
let languages2 = languages1.pop("Javascrit");
console.log(languages2)

//shift removes the first element from an array and prints out the removed element
let subject = ["Python","Kotlin","Javascript","React js"];
let subjects2 =subject.shift();
console.log(subjects2);

let songs =["symphony","ex","the cat concerto"];
let songs2 =songs.shift();
console.log(songs2);

let musicians =["nikita","nyashanski","nameless"];
let singers =musicians.shift();
console.log(singers);

let estates =["kayole","greenspan","Komarock"];
let estates1 =estates.shift();
console.log(estates1);

let pets= ["cat","dog","chicken"];
let pets2= pets.shift();
console.log(pets2);


let animals =["zebra","cheetah","lion"];
let animals2 =animals.shift();
console.log(animals2);

//adds a new element to the beginning of an array and returns the new length of the array
let clothes = ["top","trousers","jeans","t-shirts"];
let clothes2 = clothes.unshift("skirt");
console.log(clothes2)

let people = ["friends","family","relatives"];
let people2 =people.unshift("schoolmates")
console.log(people2)

//shift adds an element at the beggining of the array and prints out the new length
let favorites = ["Taylor","Nikita","Katey"];
let favorites2 = favorites.unshift("Sia");
console.log(favorites2);
console.log(favorites.indexOf("Nikita"));

let birds =["eagle","chicken","pigeon"];
let birds2 =birds.shift();
console.log(birds2);
console.log(birds.unshift("dove"));
console.log(birds.pop());
console.log(birds.indexOf("chicken"));
// console.log(birds.push("du));
// 
let left = ["children","teachers","parents"];
let left1 =left.push("guardian");
console.log(left1);


//shows the index of a specific element
let kate1 = ["barbie","sherloet","paise"];
let kate2 =kate1.indexOf("barbie");
console.log(kate2)


let perry1=["Ann","Shirleen","Katey","Paisely"];
let perry2=["Charles","Malcom","Mathew","Ken"];
let perry3=perry1+perry2
console.log(perry3);

//or one can use concat
//concat adds both arrays together to form one huge array
let fruits3 =["joy","peace","kindness","humility"];
let fruits1 =["love","peace","patience"];
console.log(fruits1.concat(fruits3));

//toString turns an array into a string
let words1 = ["poems","songs","riddles"];
let words2 = words1.toString();
console.log(words2);

let wild =["Elephant","Lion","Hippo","Giraffe"];
let wild2 =wild.toString();
console.log(wild2);
console.log(wild.sort())

//concatinates both arrays into a string
let domestic =["sheep","cow","goat","rabbit"];
let domestic1 =["chicken","pigeon","dove"];
console.log(domestic.join(domestic1));

//reverse turns the first to the last and the last to the first
let smart1 =["Ada","Hopper","AnitaB"];
let smart2 =smart1.reverse();
console.log(smart2);
console.log(smart1.lastIndexOf("Ada"))
console.log(smart1.sort())


let sum =0;
const numbers =[65,44,12,4];
numbers.forEach(myfunction);

function myfunction(item){
    sum +=item;
}
// const ages =[32,33,16,40];
// const result =ages.filter(checkAdult);

// function checkAdult(age){
//     return age>=18;
// }


let namey = ["Apple","Passion","Bananas","Oranges"]
let namey1 = namey.slice(0,3);
console.log(namey1);
console.log(namey.slice(3));
console.log(namey.slice(-4,-2));
console.log(namey.sort());
console.log(namey.includes("Bananas"));
console.log(namey.includes("Passion"));













    
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

console.log


