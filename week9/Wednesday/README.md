## What is OOP ?

OOP stands for Object-Oriented Programming. It is a programming paradigm that uses objects to design applications and computer programs. It utilizes several techniques from previously established paradigms, including modularity, polymorphism, and encapsulation. An object is a self-contained entity that consists of both data and procedures to manipulate the data. Objects are instances of classes, which are like blueprints for objects. Classes define the properties and behaviors of objects. OOP allows for the definition of classes that can inherit properties and behaviors from other classes. This allows for the creation of hierarchies of classes that share common properties and behaviors. OOP is widely used in software development because it provides a way to model complex systems in a more natural and intuitive way. It also promotes code reuse and makes it easier to maintain and modify code. OOP is supported by many programming languages, including Java, C++, and Python.

## what is class ?

A class is a blueprint for creating objects. It defines the properties and behaviors that objects of the class will have. A class can be thought of as a template for creating objects. It defines the data that objects of the class will contain and the methods that can be used to manipulate that data. Classes are used to create objects, which are instances of the class. Objects are self-contained entities that contain both data and methods to manipulate that data. Classes can be used to create hierarchies of objects, with subclasses inheriting properties and behaviors from their parent classes. Classes are a fundamental concept in object-oriented programming and are used to model real-world entities in software applications.

example of class

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person = new Person("Alice", 30);
```

what is object
An object is an instance of a class. It is a self-contained entity that contains both data and methods to manipulate that data. Objects are created from classes, which define the properties and behaviors of the objects. Objects can be thought of as concrete instances of a class. They contain data that is unique to that instance of the class and methods.

what is inheritance -
Inheritance is a mechanism in object-oriented programming that allows a class to inherit properties and behaviors from another class. The class that inherits from another class is called a subclass, and the class that is inherited from is called a superclass. Inheritance allows for code reuse and promotes the creation of hierarchies of classes. Subclasses can override methods and properties of their parent classes, allowing for customization and specialization. Inheritance is a powerful feature of object-oriented programming that allows for the creation of complex systems with minimal code duplication.

example of inheritance

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");

dog.speak(); // Output: Buddy barks.
```

what is polymorphism -  
Polymorphism is a concept in object-oriented programming that allows objects of different classes to be treated as objects of a common superclass. This means that objects of different classes can be used interchangeably if they share a common superclass. Polymorphism allows for code reuse and promotes flexibility in software design. It allows for the creation of generic code that can operate on objects of different classes without knowing the specific class of each object. Polymorphism is a powerful feature of object-oriented programming that allows for the creation of flexible and extensible software systems.

example of polymorphism

```js
class Animal {
  speak() {
    console.log("The animal makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("The dog barks.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("The cat meows.");
  }
}
```

what is encapsulation -
Encapsulation is a concept in object-oriented programming that refers to the bundling of data and methods that operate on that data into a single unit, called a class. Encapsulation allows for the data to be hidden from the outside world and only accessed through the methods of the class. This provides a way to protect the data from being modified in unexpected ways and ensures that the data is always in a valid state. Encapsulation promotes code reuse and makes it easier to maintain and modify code. It also allows for the creation of classes that can be used by other developers without needing to know the internal details of the class. Encapsulation is a fundamental concept in object-oriented programming and is used to create modular and maintainable software systems.

example of encapsulation

```js
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    this._age = age;
  }
}
```

what is abstraction -
Abstraction is a concept in object-oriented programming that refers to the process of hiding the implementation details of a class and only exposing the essential features of the class. Abstraction allows for the creation of classes that represent real-world entities in a simplified way. It allows for the creation of classes that can be used without needing to know the internal details of the class. Abstraction promotes code reuse and makes it easier to maintain and modify code. It also allows for the creation of classes that can be used by other developers without needing to know the internal details of the class. Abstraction is a fundamental concept in object-oriented programming and is used to create modular and maintainable software systems.

example of abstraction

```js
class Animal {
  constructor(name) {
    this._name = name;
  }

  speak() {
    throw new Error("The speak method must be implemented by subclasses.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("The dog barks.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("The cat meows.");
  }
}
```
