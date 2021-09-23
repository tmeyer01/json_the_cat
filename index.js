const {fetchBreedDescription} = require("./breedFetcher");

//const breedName = process.argv.slice(2).toString();
//let breedName = "Siberian"

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
});