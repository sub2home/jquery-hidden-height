var casper = require('casper').create();

// set up
casper.options.clientScripts = [
    './test/lib/jquery-1.10.2.min.js',
    './src/jquery.hidden.size.js'
    ];

casper.start('http://localhost:8888');
casper.then(function() {

	this.test.assertEqual(300, this.evaluate(function () {
		return $('#simple').hiddenSize().height;
	}));

});

casper.run();