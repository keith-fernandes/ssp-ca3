const   http = require('http'), // this module provides the HTTP server functionalities
        path = require('path'),// the path module provides utilities for working with file and directory paths 
        express = require ('express'), // this module allows this app to respond to HTTP requests, defines the routing and render back the required content
        fs  = require ('fs'),// this module allows to work with the file system read and write files back
        xmlParse = require ('xslt-processor'), xmlParse,// this module allows to work with XML files
        xsltProcess = requirre('xslt-processor'), xsltProcess,//the same module allows us to utilise XSL trasnformations
        xml2js = require('xml2js')// this module does XML<->JSON converion