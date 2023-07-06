import React from "react";
import style from "./recipe.module.css";

const Recipe=({title,calories,image,ingredients})=>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol className={style.font}>
                {
                    ingredients.map(ingredients =>(
                        <li>{ingredients.text}</li>
                    ))
                }
            </ol>
            <p className={style.paragraph}>Calories:   {calories}</p>
            <img className={style.image} src={image} alt=""></img>
        </div>
    )
}
    
export default Recipe;