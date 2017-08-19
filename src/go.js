define(
    ["./pokemon"],
    (pokemon) => {
        let myPokemon = pokemon.create({
            name: 'Pikachu',
            type: 'electric',
            species: 'mouse',
            height: 0.41,
            Weight: 6.0
        });

        return myPokemon;
    });
