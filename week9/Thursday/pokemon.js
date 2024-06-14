class Pokedex {
  constructor() {
    this.dex = [];
  }

  async fetchAll() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const data = await response.json();
      // Corrected from data.result to data.results
      this.dex = data.results;
      console.log(this.dex, data);
    } catch (error) {
      console.log(error);
    }
  }

  listDex() {
    console.log(this.dex);
    this.dex.forEach((element) => {
      console.log(element);
    });
  }
  static async getinfo(name) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

      const data = await response.json();

      return data;
    } catch (error) {}
  }
}

async function execute() {
  try {
    const poke = new Pokedex();
    await poke.fetchAll();
    console.log(poke.dex);
    //poke.listDex();
    console.log(poke.dex[20].name);
    console.log(await Pokedex.getinfo(poke.dex[20].name));
  } catch (error) {
    console.log(error);
  }
}

execute();
