define([
    "../src/pokemon"
], function(
    pokemon
) {
    const title = 'pokemon.js';
    const testData = (assert) => {
        const expected = {
            name: 'Pikachu',
            type: 'electric',
            species: 'mouse',
            height: 0.41,
            Weight: 6.0
        };

        const actual = pokemon.create({
            name: 'Pikachu',
            type: 'electric',
            species: 'mouse',
            height: 0.41,
            Weight: 6.0
        });

        assert.deepEqual(actual, expected, 'initial format should be equal');
    };

    const tester = [{
        testName: title,
        testFn(assert) {
            testData(assert);
            assert.end();
        }
    }];

    return tester;
});
