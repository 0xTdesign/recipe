import "./SectionTwo.css";
// import plate from "/Image/plate.png";
import Image from "next/image";
// import chopstick from "/Image/chopsticks.png";

export default function SectionTwo() {
  return (
    <>
      <section className="sectionOne">
        <div className="partOne">
          <h2 id="about">About</h2>
          <p>
            I&apos;m a passionate food lover who finds joy in cooking a wide variety of cuisines. From the vibrant and
            aromatic flavors of Asian cuisine to the smoky and savory goodness of BBQ, my taste buds are always ready for an
            adventure. Exploring different cooking techniques and experimenting with unique ingredients is my way of
            expressing creativity in the kitchen. Through this blog, I aim to share my culinary experiences, favorite
            recipes, and tips and tricks I've learned along the way. Join me on this flavorful journey as we celebrate the
            diversity of food and the joy it brings to our lives. Let's dive into the wonderful world of Asian cuisine and
            savor the mouthwatering delights of BBQ together!
          </p>
        </div>
        <div className="partTwo">
          <Image className="plate" src="/Image/plate.png" alt="Plate" width={500} height={500} />
        </div>
      </section>
      <Image className="chopstick" src="/Image/chopsticks.png" alt="chopstick" width={500} height={500} />
    </>
  );
}
