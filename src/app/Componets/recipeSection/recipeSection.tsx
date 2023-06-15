import React from "react";
import "./recipeSection.css";

export default function recipeSection() {
  return (
    <>
      <section className="sectionOne">
        <div className="partOne">
          <h2>Recipes</h2>
          <p>Below you will find my faviote recipes</p>
        </div>
        <div className="partTwo">{/* <Image className="food" src={food1} alt="Drink" /> */}</div>
      </section>
      {/* <Image className="icecream" src={icecream} alt="icecream" /> */}
    </>
  );
}
