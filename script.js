var svg = document.querySelector('svg');
var key = 'AIzaSyDQNt2FlhWtrMUyNfS0pwXA9ngh904XrNk';
var sheetId = '1oEhVbC85KnVYpjOnqX18plTSyjyH6F4dxNQ4SjjkBAs';
var range = 'ranges=Humans!A:I&ranges=Students!A:F';
var sheetUrl = "https://sheets.googleapis.com/v4/spreadsheets/" + sheetId + "/values:batchGet?ranges=Humans!A:I&ranges=Students!A:F&key=" + key;
$.getJSON(sheetUrl, function (results) {
    var people = results.valueRanges[0].values;
    var relations = results.valueRanges[1].values;
    people = people.slice(1, people.length - 1);
    relations = relations.slice(1, relations.length - 1);
    people = people.filter(function (person) { return person[0] != undefined && person[1] != undefined; }).map(function (person) {
        var id = parseInt(person[0]);
        var name = person[1];
        return {
            'id': id,
            'name': name
        };
    });
    relations = relations.map(function (relation) {
        return [parseInt(relation[0]), parseInt(relation[1])];
    });
    console.log(results);
    console.log(people);
    console.log(relations);
    var graph = new SVGOntologyGraph(people, relations, svg);
}, function (error) { return console.error(error); });
