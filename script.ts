const svg = document.querySelector('svg');

const key = 'AIzaSyDQNt2FlhWtrMUyNfS0pwXA9ngh904XrNk';
const sheetId = '1oEhVbC85KnVYpjOnqX18plTSyjyH6F4dxNQ4SjjkBAs';
const range = 'ranges=Humans!A:I&ranges=Students!A:F';
const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values:batchGet?ranges=Humans!A:I&ranges=Students!A:F&key=${key}`;

$.getJSON(sheetUrl, results => {
  let people = <any[]> results.valueRanges[0].values;
  let relations = <any[]> results.valueRanges[1].values;

  // Skip first elements
  people = people.slice(1, people.length);
  relations = relations.slice(1, relations.length);

  // convert to digraph-friendly objects
  people = people.filter(person => person[0] != undefined && person[1] != undefined).map(person => {
    const id = parseInt(person[0]);
    const name = person[1];

    return {
      'id': id,
      'name': name
    }
  });

  relations = relations.map(relation => {
    return [parseInt(relation[0]), parseInt(relation[1])];
  })

  console.log(results);
  console.log(people);
  console.log(relations);

  const graph = new SVGOntologyGraph(people, relations, svg);

}, error=> console.error(error));
