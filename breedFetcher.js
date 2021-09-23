const request = require('request');
const cat = process.argv.slice(2).toString();

let url = "https://api.thecatapi.com/v1/breeds/search?q=";

request(`${url}${cat}`, (error, response, body)=> {
  const data = JSON.parse(body);
  
  if (data[0] === undefined) {
    console.log(`No such ${cat} found please try again.`);
  } else {
    console.log(data[0].description);
  }

});
