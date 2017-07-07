var casper = require('casper').create({
    verbose: true,
    //logLevel: "debug"
});

// increase the viewport
casper.options.viewportSize = {width: 1200, height: 1200};

// get a datestamp field
var m = new Date();
var now = m.getUTCFullYear() +"-"+ (m.getUTCMonth()+1) +"-"+ m.getUTCDate() + "_" + m.getUTCHours() + "-" + m.getUTCMinutes();

casper.echo("CasperJS Test Script Started");

// get the first passed in value
var domain = casper.cli.get(0);

casper.echo("domain: " + domain);
casper.echo("Date and Time: " + now);

var img_sufix = "_" + domain + "_" + now;

casper.start('http://' + domain, function() {
    // grab the homepage screen
    this.capture('homepage_of_' + domain + '_at_' + now + '.png');
});

casper.run(); 