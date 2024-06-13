// creating out pokedex

class Pokedex {
  constructor() {
    this._pokemon = [];
  }

  async fetchPokemon() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=151"
      );

      const data = await response.json();

      this._pokemon = data.results;

      //console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  showAllPokemon() {
    this._pokemon.forEach(({ name }) => {
      console.log(name);
    });
  }
  static async getApoke(name) {
    try {
      const newpoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await newpoke.json();

      //console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

async function execute() {
  try {
    const Kanto = new Pokedex();
    await Kanto.fetchPokemon();
    const poke = await Pokedex.getApoke("charmander");
    console.log("New pokemon", poke.sprites);
    //console.log("Empty,", Kanto._pokemon);
    //Kanto.showAllPokemon();
  } catch (error) {
    console.log(error);
  }
}

execute();
