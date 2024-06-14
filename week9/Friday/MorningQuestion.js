const returnStr = (name1, name2) =>
  console.log(`${name1} is better than ${name2}`);

class OS {
  constructor(os) {
    this._os = os;
  }
}
// Create a class
class Computer {
  #pikachuPowered = null;
  // Created and Set Properties
  constructor(name, cpu, gpu, ram, memory, os) {
    this._name = name;
    this._cpu = cpu;
    this._gpu = gpu;
    this._ram = ram;
    this._memory = memory;
    this.#pikachuPowered = new OS(os);
  }
  // Static Method
  static compare(computer1, computer2) {
    if (computer1._ram > computer2._ram) {
      returnStr(computer1._name, computer2._name);
    } else {
      returnStr(computer2._name, computer1._name);
    }
  }
  get pikaPower() {
    return this.#pikachuPowered;
  }
}

// Created the Instance of a Class
const newCpu = new Computer("AmdRyzen5950x", "2080TI", 64, "SSD");
const newCpu2 = new Computer("a", "b ", 32, "HD");
console.log(newCpu);
console.log(Computer.compare(newCpu, newCpu2));
class Windows extends Computer {
  constructor(
    name,
    cpu,
    gpu,
    ram,
    memory,
    os,
    color,
    touchScreen,
    games,
    size
  ) {
    super(name, cpu, gpu, ram, memory, os);
    this._color = color;
    this._games = games;
    this._touchScreen = touchScreen;
    this._size = size;
  }
  displaySize() {
    return this._size;
  }
  displayGames() {
    return this._games;
  }

  displayColor() {
    return this._color;
  }
}
class Mac extends Computer {
  constructor(
    name,
    cpu,
    gpu,
    ram,
    memory,
    os,
    color,
    itunes,
    size,
    touchBar = "no"
  ) {
    super(name, cpu, gpu, ram, memory, os);
    this._color = color;
    this._touchBar = touchBar;
    this._music = itunes;
    this._size = size;
  }
  displaySize() {
    return this._size;
  }
  displayColor() {
    return this._color;
  }

  displayMusic() {
    return this._music;
  }
  isMac() {
    if (this._cpu === "m1") {
      return true;
    } else {
      return false;
    }
  }
}
