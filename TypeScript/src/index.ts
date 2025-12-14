// // Strings 
// let myName:string ="akshay";
// console.log(myName);
// //number
// let fevNumber:number=27;
// console.log(fevNumber);
// //boolean
// let tsHard:boolean=false;
// console.log(tsHard);

// Type inference is a core feature in TypeScript that allows the compiler to automatically determine the type of a variable, function return value, or expression based on its assigned value or context, reducing the need for explicit type annotations. This makes the code more concise and readable while maintaining type safety

let myName="akshay";
console.log(myName);
let fevNumber=27;
console.log(fevNumber);
let tsHard=false;
console.log(tsHard);

//ANY TYPE IN TS
let color:any="crimson"
console.log(color);
color=10;
console.log(color);
color=true;
console.log(color);

//functions in TS
//regular
function addOne(num:number){
    return num+1;
}
console.log(addOne(10));
//arrow function
const addTwo=(x:number,y:number)=>{
    return x+y;
}
console.log(addTwo(1,2));


function greet(person="anonoymous"){
    return `hello ${person}`
}
console.log(greet());

//Array in TS (array should be of same datatype)
const nums:number[]=[1,2,3,4,5]
console.log(nums);
const strs:string[]=['a','b',"c","d"]
console.log(strs);

//objects in ts
const person : {firstName:string,lastName:string,age:number}={
    firstName:"akshay",
    lastName:"pawar",
    age:22
}
function person1() : {firstName:string,lastName:string,age:number}{
    return {
        firstName:"akshay",
        lastName:"pawar",
        age:22
    }
}

console.log(`name: ${person.firstName + " " +person.lastName} \n age:${person.age}`)

//type Aliases in TS
type Myinfo={
    firstName:string,lastName:string,age:number
 }
//insted of writting long annotation make it type and use it
const itsMe:Myinfo={
    firstName:"akshay",
    lastName:"pawar",
    age:22
}
console.log(itsMe);

//optional property
type Person={
    name:string,
    age:number,
    // email is optional
    email?:string
}
const alice:Person={name:"Alice" ,age:30};
const bob:Person={name:"bob",age:22,email:"ap123@mail.com"}

//intersection type
type PersonalInfo={
    name:string,
    age:number
}
type Employee={
    id:number,
    title:string
}
type PersonAndEmployee=PersonalInfo & Employee;

const akshay:PersonAndEmployee={
    name:"Alice",
    age:22,
    id:23412,
    title:"SWE"
}
console.log(akshay);

//union in ts
let password:string | number = 10;

type UserInfo={
    fisrt:string,
    last:string,
    age:number
}

type AccountDetails={
    email:string,
    password:string
}

let User:UserInfo | AccountDetails ={
    email:"akshay@gamil.com",
    password:"pass@365"
}

const items:(string | number) [] =[1,2,3,4,"hello","akshay"]

console.log(items);

//literal type in ts

let Color:"red" | "blue" | "green"
Color="red" //valid
// Color="yellow" //invalid

let number:1|2|3;
number=1 //valid
// number=4 //invalid

let isTrue: true;
isTrue=true
// isTrue:false  //unused value

//tuples in ts
let myTuple:[string,number]=["hello",50];
console.log(myTuple[0]);
console.log(myTuple[1]);
//de-structuring
let [first,second]=myTuple;
console.log(first);
console.log(second);

//enum in ts

enum WeatherConditions{
    sunny="sunny",
    cloudy="cloudy",
    temprature=22,
    day="sunday"
}

const currentWeather=WeatherConditions.sunny
console.log(currentWeather);

//interface in ts
interface song{
    songName:string,
    singerName:string,
    printSongInfo(songName:string,singerName:string):string;
}

const song1:song={
    songName: "samba ho!",singerName:"AR rehman",
    printSongInfo(songName, singerName) {
        return `song: ${songName} \nsinger: ${singerName}`
    },
}
console.log(song1.printSongInfo("piya tu aab toh aja","RD Burman"));

//interface allows you to use extend property

interface MovieDetails{
    readonly name:string,
    rating :number,
    printmovieinfo(name:string,price:number,rating:number):string | number
}
interface MovieGenra extends MovieDetails{
    genra:string
}

const movie1:MovieGenra={
    name:"dhurander",
    rating:9.5,
    genra:"documentry",
    printmovieinfo(name :string, price:number, rating:number) : number | string {
        return `movie name is ${name} \n price is ${price} \n rating is ${rating}`
    }
}
console.log(movie1.printmovieinfo("hera pheri",1000,10));

//interface with ts

interface Vehicle{
    start():void,
    end():void
}
class Car implements Vehicle{
    start():void{
        console.log("car started");
    }
    end():void{
        console.log("car stopped");
    }
}
const myCar =new Car();
myCar.start()

//declaration merging
interface myCar{
    brand:string,
    start():void
}
//here is the merging (interface extention)
interface myCar{
    model:string,
    stop():void
}

const myNewCar:myCar={
    brand: "BMW",
    model: "440D M1",
    start() {
        console.log("start");
    },
    stop() {
        console.log("stopped");
    }
}
myNewCar.start()
myNewCar.stop()
console.log(myNewCar.brand);
console.log(myNewCar.model);