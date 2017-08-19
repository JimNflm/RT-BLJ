require({
        paths: {
            jquery: './lib/jquery-3.2.1.min',
            lodash: './lib/lodash-4.17.4.min',
            bootstrap: './lib/bootstrap.min'
        },
        shim: {
            bootstrap: {
                deps: ["jquery"]
            }
        }
    },
    ["main"],
    function(main) {
        main.start();
    }
);
