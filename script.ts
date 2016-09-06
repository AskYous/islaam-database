const key = 'AIzaSyDQNt2FlhWtrMUyNfS0pwXA9ngh904XrNk';
const sheetId = '1oEhVbC85KnVYpjOnqX18plTSyjyH6F4dxNQ4SjjkBAs';
const range = 'ranges=Humans!A:I&ranges=Students!A:F';
const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values:batchGet?ranges=Humans!A:I&ranges=Students!A:F&key=${key}`;

$.getJSON(sheetUrl, results => {
  const people = results.valueRanges[0].values;
  const relations = results.valueRanges[1].values;

  console.log(results);
  console.log(people);
  console.log(relations);

}, error=> console.error(error));
