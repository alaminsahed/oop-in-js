// prototype: prototype is a property of a function that points a object
// Write capital prototype function name
// property- name, age
// method - function

function Human(name, age) {
  // constructive function
  // "this" is used instead of Object.create()
  // Object.create() behaviour
  /*{ let a = {
        age: 23
    }
    let b = object.create(a)

    a parent & b child
    b uses a behaviour 
}*/

  this.name = name;
  this.age = age;

  //Why prototype needed
  // In shuvo & kamal both has read function
  // It uses lots of memory

  // this.read= function(){
  //     console.log(`${this.name} is reading`);
  // }

 
}

function Student(name, age, batch, result) {
  // connect Human function property
  // Human parent & Student child function
  Human.call(this);
  this.name = name;
  this.age = age;
  this.batch = batch;
  this.result = result;
}

Human.prototype = {
    read: function () {
      console.log(`${this.name} is reading`);
    },
  };

// inheritance Human prototype to Student prototype

Student.prototype = Object.create(Human.prototype);
// update student constructor 
Student.prototype.constructor = Student;


const shuvo = new Student("Shovo", 23, "morning", "pass");
// console.log(shuvo);
// const kamal = new Human("kamal", 24);
// console.log(kamal);

 console.log(shuvo.read());  // shuvo is reading
// kamal.read();
