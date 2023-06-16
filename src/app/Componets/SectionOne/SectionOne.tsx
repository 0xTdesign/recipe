import "./SectionOne.css";
import Image from "next/image";
import food1 from "/Image/food1.png";
import icecream from "/Image/icecream1.png";

export default function SectionOne() {
  return (
    <>
      <section className="sectionOne">
        <div className="partOne">
          <h2 id="home">Home</h2>
          <p>
            Welcome to Spice, the ultimate blog site for food enthusiasts! Here, I&apos;ll be sharing my favorite recipes
            that are sure to add a burst of flavor to your kitchen. From mouthwatering main courses to indulgent desserts,
            Spice is your go-to source for culinary inspiration. Join me as we explore a world of tantalizing tastes and
            discover the joy of cooking. Whether you're looking for quick and easy meals or gourmet creations, Spice has
            something to satisfy every palate. Get ready to ignite your passion for food and embark on a delicious journey
            with me at Spice!
          </p>
        </div>
        <div className="partTwo">
          <Image className="food" src={food1} alt="Drink" />
        </div>
      </section>
      <Image className="icecream" src={icecream} alt="icecream" />
    </>
  );
}
