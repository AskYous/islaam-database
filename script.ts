const key = 'AIzaSyDQNt2FlhWtrMUyNfS0pwXA9ngh904XrNk';
const sheetId = '1oEhVbC85KnVYpjOnqX18plTSyjyH6F4dxNQ4SjjkBAs';
const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?key=${key}`;

$.getJSON(sheetUrl, results => console.log(results), error=> console.error(error));
