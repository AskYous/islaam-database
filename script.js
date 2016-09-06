var key = 'AIzaSyDQNt2FlhWtrMUyNfS0pwXA9ngh904XrNk';
var sheetId = '1oEhVbC85KnVYpjOnqX18plTSyjyH6F4dxNQ4SjjkBAs';
var range = 'ranges=Humans!A:I&ranges=Students!A:F';
var sheetUrl = "https://sheets.googleapis.com/v4/spreadsheets/" + sheetId + "/values:batchGet?ranges=Humans!A:I&ranges=Students!A:F&key=" + key;
$.getJSON(sheetUrl, function (results) {
    var people = results.valueRanges[0].values;
    var relations = results.valueRanges[1].values;
    console.log(results);
    console.log(people);
    console.log(relations);
}, function (error) { return console.error(error); });
