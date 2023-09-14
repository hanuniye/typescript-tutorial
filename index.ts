// let test = "test";
// typescript variableka wixii aad ku shubto ayey type uga dhigysaa mana ogolaanyso in type kale la galiy

let tests: String = "wow";

let numbers: number = 23;

let bool: boolean = false;

// union types 
let stringAndNumber: string | number | boolean = "waaaw";

// ARRAYS 
let arrayString: string[] = ["abdi", "farah", "jama"];
// arrayString = [12,13]

let arrayNumber: number[] = [12,4,5];
// arrayNumber = ["wow"]

// union types 
let arrayStringAndNumber: (string | number)[] = ["wow", 12];

let annyArray: any[] = ["12", 12, false];

// OBJECTS 
let testObject: {
    username: string,
    age: number,
    isAdmin: boolean,
    phone?: number
}

testObject = {
    username: "jama",
    age: 12,
    isAdmin: false,
}

//FUNCTIONS
 const stringFunct = ():string => {
    return ";;;"
 }
 const numberFunc = ():number => {
    return 12
 }

//  parameter type 
 const pramFunc = (num: number, st?:string): string | number => {
    return 123
 }

 pramFunc(12)

//  TYPE ALLIES OR CUSTOM TYPES
// type UserType = {
//    name: string,
//    age: number,
//    phone?: number
// }

type UserType = {
   name: string,
   age: number,
   phone?: number,
   theme: "light" | "dark"
}

const typeFunc = (user: UserType): UserType => {
   return user;
}

// INTERFACES
interface IUser {
   name: string,
   age: number,
   isWork: boolean
}

interface UEmployee extends IUser{
   employeId: number
}

let testObj: UEmployee = {
   name: "abdi",
   age: 12,
   isWork: false,
   employeId: 12
}

interface User {
   name: string,
   phone?: number
}

//GENERECIS
interface IAuthor {
   id: number,
   name: string,
}

interface ICategory{
   id: number,
   title: string
}

interface IPost{
   id: number,
   title: string,
   description: string,
   extra: ICategory[] | IAuthor[]
}

interface IPostBetter<T>{
   id: number,
   title: string,
   description: string,
   extra: T[]
}
