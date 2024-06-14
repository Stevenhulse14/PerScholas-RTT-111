// creating out pokedex

class Pokedex {
  constructor() {
    this._pokemon = []; // Initializes an empty array to store pokemon data.
  }

  async fetchPokemon() {
    // Asynchronous method to fetch a list of Pokemon from the API.
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=151"
      ); // Fetches data from the Pokemon API with a limit of 151.

      const data = await response.json(); // Converts the response into JSON format.

      this._pokemon = data.results; // Stores the results array from the JSON data into the _pokemon array.
    } catch (error) {
      console.error(error); // Logs any errors that occur during the fetch operation.
    }
  }

  showAllPokemon() {
    // Method to log all pokemon names stored in _pokemon.
    this._pokemon.forEach(({ name }) => {
      // Loops through each pokemon in the _pokemon array.
      console.log(name); // Logs the name of each pokemon.
    });
  }

  //
  static async getApoke(name) {
    // Static asynchronous method to fetch a specific pokemon by name.
    try {
      const newpoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`); // Fetches data for a specific pokemon from the API using the provided name.
      const data = await newpoke.json(); // Converts the response into JSON format.

      return data; // Returns the JSON data.
    } catch (error) {
      console.log(error); // Logs any errors that occur during the fetch operation.
    }
  }
}

async function execute() {
  // Asynchronous function to execute fetch operations and display results.
  try {
    const Kanto = new Pokedex(); // Creates an instance of the Pokedex class.
    await Kanto.fetchPokemon(); // Calls the fetchPokemon method to load pokemon data.
    const poke = await Pokedex.getApoke("charmander"); // Calls the static getApoke method to fetch data for "charmander".
    console.log("New pokemon", poke.sprites); // Logs the sprites of the fetched pokemon.
  } catch (error) {
    console.log(error); // Logs any errors that occur during the execution of the function.
  }
}

execute(); // Calls the execute function to run the code.
