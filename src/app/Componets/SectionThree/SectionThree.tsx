import "./SectionThree.css";
import pen from "public/Image/pen.png";
import Image from "next/image";

export default function SectionThree() {
  return (
    <section>
      <div className="sectionThree">
        <form action="">
          <h1>Shopping list</h1>
          <label htmlFor="usnername"></label>
          <br />
          <input type="text" name="" id="" placeholder="Name" />
          <br />
          <br />
          <label htmlFor=""></label>
          <textarea name="" id="" cols={30} rows={10} placeholder="Write shopping list"></textarea>
        </form>
        <div className="checklist">
          <h2>Checklist</h2>
          <p>Items</p>
          <p>Bread</p>
          <p>Bread</p>
          <p>Bread</p>
          <p>Bread</p>
          <p>Bread</p>
        </div>
        <div className="pen-image">
          <Image className="pen" src={pen} alt="pen" />
        </div>
      </div>
    </section>
  );
}
