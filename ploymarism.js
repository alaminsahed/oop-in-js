//polymerism
// when child class want to update parent class method or property

// class name in capital letter
class Human {
  // class must have a constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sleeping() {
    console.log(`${this.name} is sleeping`);
  }
}

class Student extends Human {
  constructor(name, age, batch, result) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.batch = batch;
    this.result = result;
  }
  // when shuvo.sleeping call then it checks this method in Student class
  // if don't get in this class then find in the parent class
  sleeping() {
    //now if we need both method then inherit the method with super keyword
    super.sleeping();
    console.log(`${this.name} is sleeping at night`);
  }
}

// sub class can access parent class method or property
// but parent class don't access sub class method or property
const shuvo = new Student("shuvo", 23, "morning", "pass");
console.log(shuvo);

shuvo.sleeping(); // shuvo is sleeping at night
