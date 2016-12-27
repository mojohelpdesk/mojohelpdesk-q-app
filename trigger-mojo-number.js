"use strict";
var fetch = require('node-fetch')
var url = 'http://www.mojohelpdesk.com/feeds/quick_status?key=' + dddddddddddddddddddkey;
var count = 0;
fetch(url)
    .then(function (res) {
        return res.text();
    }).then(function (data) {
        console.log('data from fetch: ' + data);
        if (data > 0) {
            console.log('Montastic alarms: ' + data);
        } else {
            console.log('Mojo OK');
        }
        console.log(data);
    });
