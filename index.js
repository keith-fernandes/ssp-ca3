const   http = require('http'), // this module provides the HTTP server functionalities
        path = require('path'),// the path module provides utilities for working with file and directory paths 
        express = require ('express'), // this module allows this app to respond to HTTP requests, defines the routing and render back the required content
        fs  = require ('fs'),// this module allows to work with the file system read and write files back
        xmlParse = require('xslt-processor').xmlParse,// this module allows to work with XML files
        xsltProcess = require('xslt-processor').xsltProcess, //the same module allows us to utilise XSL trasnformations
        xml2js = require('xml2js');// this module does XML<->JSON converion

const   router = express(), 
        server = http.createServer(router);

    router.use(express.static(path.resolve(__dirname,'views'))); //Serving static content from "views" folder

    router.get('/get/html', function(req, res) {

    res.writeHead[200, {'Content-Type' : 'text/html'}];

    let xml = fs.readFileSync('TripInnTrip.xml', 'utf8'), 
        xsl = fs.readFileSync('TripInnTrip.xsl', 'utf8');

    console.log(xml);
    console.log(xsl);

    let doc = xmlParse(xml),
        stylesheet = xmlParse(xsl);

    console.log(doc);
    console.log(stylesheet);

    let result = xsltProcess(doc, stylesheet);

    console.log(result);
    
    res.end(result.toString());

});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    const addr = server.address();
    console.log('Server listening at', addr.address + ':' + addr.port)
});