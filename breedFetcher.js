const request = require('request');
const cat = process.argv.slice(2).toString();
//breedName = "Suuuuuuun"

 //let url = `https://api.thecatapi.com/v1/breeds/search?q=`


const fetchBreedDescription = (breedName, callback) =>{
  
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(`${url}`, (error, response, body)=> {
    
    //console.log("response is ", response);
    if (error) {
      callback(error, null);
    }

    const data = JSON.parse(body);
    
    if (data[0] === undefined) {
      //console.log(data[0])
      callback('breed not found', null);
    } else {
      //console.log(data)
      callback(null, data[0].description);
    }
  
  });

};


module.exports = { fetchBreedDescription };



/*
request(`${url}${cat}`, (error, response, body)=> {
  const data = JSON.parse(body);
  
  if (data[0] === undefined) {
    console.log(`No such ${cat} found please try again.`);
  } else {
    console.log(data[0].description);
  }

});
*/