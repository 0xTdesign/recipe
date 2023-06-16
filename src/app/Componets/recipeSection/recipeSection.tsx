import React from "react";
import "./recipeSection.css";
// import pokebowl from "/image/pokebowl.png";
import Image from "next/image";

export default function recipeSection() {
  return (
    <>
      <section className="sectionRecipe">
        <div className="partOne">
          <h2>Recipes</h2>
          <p>
            Welcome to my culinary blog, where I share my favorite recipes that I genuinely enjoy cooking. From comforting
            chicken pot pie to fragrant Thai basil chicken, these dishes are sure to tantalize your taste buds. Feel free to
            explore, try them out, and don't forget to leave comments on your favorites! Let&apos;s embark on this delicious
            journey together.
          </p>
        </div>
        <div className="partTwo">
          <Image className="pokebowl" src="/Image/pokebowl.png" alt="pokebowl" width={500} height={500} />
        </div>
      </section>
    </>
  );
}
