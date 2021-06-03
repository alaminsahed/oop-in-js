// class name in capital letter
class Human{
   // class must have a constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sleeping(){
        console.log(`${this.name} is sleeping`)
    }
}

class Student extends Human{
    constructor(name,age,batch, result){
        super(name,age);
        this.name = name;
        this.age = age;
        this.batch = batch;
        this.result = result;
    }

    reading(){
        console.log(`${this.name} is reading`)
    }
}

// sub class can access parent class method or property
// but parent class don;t access sub class method or property
const shuvo = new Student("shuvo",23,"morning","pass");
console.log(shuvo);

shuvo.sleeping();