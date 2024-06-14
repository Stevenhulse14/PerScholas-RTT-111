class Animals {
  constructor(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;
  }
  display() {
    return [this.name, this.height, this.weight];
  }
}

class Reptile extends Animals {
  #coldBlooded = true;
  #detachableTail = null;

  constructor(name, weight, height, legs, colors) {
    super(name, weight, height);
    this.legs = legs;
    this.colors = colors; //will be an array atleast two colors
  }
  isSnake() {
    if (this.legs === 0) {
      console.log("this reptile is a Snake");
    }
  }
  whatColor() {
    for (let i = 0; i <= this.colors.length - 1; i++) {
      console.log(
        `This animal is a reptile and has traces of ${this.colors[i]}`
      );
    }
  }
  isColdBlooded() {
    if (this.#coldBlooded) {
      return true;
    }
  }
  get gdetachableTail() {
    return this.#detachableTail;
  }
  set gdetachableTail(newValue) {
    this.#detachableTail = newValue;
  }
}

class Mammal extends Animals {
  #warmBlooded = true;

  constructor(name, weight, height, type, eyecolor) {
    super(name, weight, height);
    this.type = type;
    this.eyecolor = eyecolor;
  }
  whatTypeOfMammal() {
    console.log(`This mammal is a ${this.name}`);
  }
}
class Person {
  #_username = "Elephant";
  constructor(name) {
    this._name = name;
  }
  get getname() {
    return this._name;
  }
  set getname(newName) {
    this._name = newName.trim();
    if (newName === "") {
      throw "Please put in a new name";
    }
    this._name = newName;
  }
  get username() {
    return this.#_username;
  }
  set username(newValue) {
    this.#_username = newValue;
  }
}
let Tati = new Person("Tati");
Tati.username = "Steven";
console.log(Tati.username);
//Tati.getname = "Steven";
//console.log(Tati.getname);
// const Snake = new Reptile("Python", 2000, "50", 0, ["red", "green"]);
// Snake.detachableTail = true;
//console.log(Snake.gdetachableTail());
// const Humans = new Mammal("Humans", "120lb", "5'5", "female", "brown");
// console.log(Humans);

//const Anaconda = new Reptile("Python", 2000, "50", 0, ["red", "green"]);

//console.log(Anaconda.isSnake());
// const fish = new Animals("fishy", 2, "1");
// console.log(fish.display());
// console.log(fish);

// const Racoon = new Animals("Shadow", 50, "2'11");
// console.log(Racoon.display());

// console.log(Racoon);
// const lion = new Animals("King", 200, "6");
// console.log(lion.display());
// console.log(lion);

// const bird = new Animals("Owl", 20, "4");
// console.log(bird.display());
// console.log(bird);
