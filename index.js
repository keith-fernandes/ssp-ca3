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
    router.use(express.urlencoded({extended: true})); //allow the data send from the client to be encoded in a URL targeting our end point
    router.use(express.json());//include support for JSON

    function XMLtoJSON(filename, cb){
        let filepath = path.normalize(path.join(__dirname, filename));
        fs.readFile(filepath, 'utf8', function(err, xmlStr){
            if (err) throw (err);
            xml2js.parseString(xmlStr, {}, cb);
        });
    };

    function JSONtoXML(filename, obj, cb) {
        let filepath = path.normalize(path.join(__dirname, filename));
        let builder = new xml2js.Builder();
        let xml = builder.buildObject(obj);
        fs.unlinkSync(filepath);
        fs.writeFile(filepath, xml, cb);
    };

    router.get('/get/html', function(req, res) {

    res.writeHead[200, {'Content-Type' : 'text/html'}];

    let xml = fs.readFileSync('TripInnTrip.xml', 'utf8'), 
        xsl = fs.readFileSync('TripInnTrip.xsl', 'utf8');

    // console.log(xml);
    // console.log(xsl);

    let doc = xmlParse(xml),
        stylesheet = xmlParse(xsl);

    // console.log(doc);
    // console.log(stylesheet);

    let result = xsltProcess(doc, stylesheet);

    console.log(result);
    
    res.end(result.toString());

});

router.post('/post/json', function (req, res) {

    function appendJSON(obj) {

        console.log(obj);

        XMLtoJSON('TripInnTrip.xml', function (err, result){
            if (err) throw (err);

            result.trip.section[obj.sec_n].tour.push({'place': obj.item, 'price': obj.price});

            console.log(JSON.stringify(result, null, " "));

            JSONtoXML('TripInnTrip.xml', result, function(err){
                if (err) console.log(err);
            });

        });

    };

    appendJSON(req.body);

    res.redirect('back');

});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    const addr = server.address();
    console.log('Server listening at', addr.address + ':' + addr.port)
});