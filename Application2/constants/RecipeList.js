
const Recipe = async () => {
  const response = await fetch('https://dummyjson.com/recipes');
  const data = await response.json();
  return data;
}


export const RecipeList = Recipe().then(value => {
  console.log("\nData fetched\n");
  console.log(value)
}).catch(error => console.log(error));


