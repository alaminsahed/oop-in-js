// getter get the value
// setter set the value

class Human{
 constructor(name,age){
     this.name = name;
     this.age = age;

 }

 sleeping(){
     console.log(`${this.name} is sleeping`)
 }

 // getter
 // first write get and function name
// write like a method but access like a property
 get getName(){
     return(this.name)
 }

 //setter
 //update class property or method from outside

 set setName(name){
     this.name = name;
     return this.name
 }

}

const shuvo = new Human("shuvo",23)

//access like a property
console.log(shuvo.name);

shuvo.setName = "kamal";
console.log(shuvo.name);
