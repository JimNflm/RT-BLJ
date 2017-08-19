define([],
    () => {
        let pokemon = {
            type: 'pokemon',
            data() {
                return {
                    name: this.name,
                    type: this.type,
                    species: this.species,
                    height: this.height,
                    Weight: this.Weight
                };
            }
        };

        let create = function create({
            name,
            type,
            species,
            height,
            Weight
        }) {
            return Object.assign(Object.create(pokemon), {
                name,
                type,
                species,
                height,
                Weight
            });
        };

        return {
            create
        };
    });