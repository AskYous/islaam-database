var key = 'AIzaSyDQNt2FlhWtrMUyNfS0pwXA9ngh904XrNk';
var sheetId = '1oEhVbC85KnVYpjOnqX18plTSyjyH6F4dxNQ4SjjkBAs';
var sheetUrl = "https://sheets.googleapis.com/v4/spreadsheets/" + sheetId + "?key=" + key;
$.getJSON(sheetUrl, function (results) { return console.log(results); }, function (error) { return console.error(error); });
