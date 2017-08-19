define([
    "lodash", "./test/pokemon"
], function(
    _, pokemon
) {
    const start = function() {
        const allTester = _.concat([],
            pokemon
        );
        _.forEach(allTester, (v) => {
            test(v.testName, v.testFn);
        });
    };

    return {start};
});
