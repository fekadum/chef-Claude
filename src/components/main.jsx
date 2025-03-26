import { createContext } from "react";
import { useState } from "react";
export default function Main(){
    // const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const [ingredients,setIngredients]=useState(["Chicken", "Oregano", "Tomatoes"])
    function handleSumbit(e){
        debugger;
        e.preventDefault();
        let formData= new FormData(e.currentTarget);
        let value=formData.get("ingredient");
        // let value=e.target.elements.ingredient.value;
        if(value){
            setIngredients([...ingredients,value]);
        }
        e.currentTarget.reset();
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
    return (
        <main>
            <form onSubmit={handleSumbit} className="">
                <input type="text" placeholder="eg. oregano" name="ingredient"/>
                <button>Add Ingredient</button>
            </form>
                <h>{count} there are number of ingredient</h>
                <button onClick={onAdd}>-</button>
                <button onClick={onSud}>+</button>
            <ul>
                {ingredients.map((ingredient,key)=>(
                    <li key={key}>{ingredient}</li>
                ))}
            </ul>
        </main>
    )
}