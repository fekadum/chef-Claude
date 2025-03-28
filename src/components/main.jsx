import { useState } from "react";
export default function Main(){
    // const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const [ingredients,setIngredients]=useState([]) //initialze to empty arry to hide get recipe for page first loading
    const [recipeShown,setrecipeShow]=useState(false); // for recipe manage method incase if it requires hide and show.
    function addIngredient(e){
        debugger;
        let value=e.get("ingredient");
        // let value=e.target.elements.ingredient.value;
        if(value){
            setIngredients([...ingredients,value]);
        }
        // e.reset(); // it is not required in reactjs 19.
        console.log("submit btn");
    }
    const [count,setCount]=useState(0);
    function onSud(){
        setCount(prevCount=>prevCount+1);
        setCount(prevCount=>prevCount+1);
        setCount(prevCount=>prevCount+1);
    }
    function onAdd(){
        setCount(prev=>prev>0?prev-1:0)
        setCount(prev=>prev>0?prev-1:0)
    }
    const myFavoriteThings = []
    const [myfavoritelists,setmyfavoriteslsts]=useState(myFavoriteThings);
    const [index,setIndex]=useState(0);
    
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  const thingsElements = myfavoritelists.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    setmyfavoriteslsts([...myfavoritelists,allFavoriteThings[index]]);
    setIndex(prev=>prev+1);
  }
  function recipeManage(){
    
    setrecipeShow(show=>{
        return true;
    });
  }
    return (
        <main>
            <form action={addIngredient} className="" method="post">
                <input type="text" placeholder="eg. Oregano" name="ingredient"/>
                <button>Add Ingredient</button>
            </form>
                

      { ingredients.length>0 &&      <ul className="ingridentslst">
                {ingredients.map((ingredient,key)=>(
                    <li key={key}>{ingredient}</li>
                ))}
            </ul>}
            {
                ingredients.length>0 &&
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={recipeManage}>Get a recipe</button>
                </div>
            }
   { recipeShown &&  <section className="instructionmenus">
    <h2>Chef Claude Recommends:</h2>
    <article className="suggested-recipe-container" aria-live="polite">
        <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
        <h3>Beef Bolognese Pasta</h3>
        <strong>Ingredients:</strong>
        <ul>
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
        </ul>
        <strong>Instructions:</strong>
        <ol>
            <li>Bring a large pot of salted water to a boil for the pasta.</li>
            <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
            <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
            <li>Stir in the tomato paste and cook for 1 minute.</li>
            <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
            <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
            <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
            <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
            <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
        </ol>
    </article>
</section>
}
      <div className="AddandMinus">
            <span>add favorite emojis </span>
            <button onClick={addFavoriteThing}>Add item</button>
            <br></br>
            <h>{count} there are number of ingredient</h>
                <button onClick={onAdd}>-</button>
                <button onClick={onSud}>+</button>
      </div>
{thingsElements.length>0 && <section className="favoriteThings" aria-live="polite">
        {thingsElements}
      </section>}
        </main>
    )
}