'use strict';

var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

/*
fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue);
            console.log(data);
        });
    });
});
*/
fs.readdir('./', 'utf-8', function (err,files){
    console.log('data berofe save'.yellow);
    console.log(files);

    fs.writeFile('./file-names.txt', files.join('\n'), function(err){
        if (err) throw err;
        console.log('you got it'.yellow);
        fs.readFile('./file-names.txt', 'utf-8', function(err,data) {
            console.log('Data after save'.yellow);
            console.log(data);   
        });
    });
});