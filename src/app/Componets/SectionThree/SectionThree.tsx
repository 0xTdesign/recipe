import "./SectionThree.css";
import { WEBSITE_URL } from "config";
import pen from "public/image/pen.png";
import Image from "next/image";
import ShoppingButton from "./ShoppingFormButton";

export async function getMessage() {
  const res = await fetch(`${WEBSITE_URL}/api/shoppingList`, { next: { revalidate: 5 } });
  return await res.json();
}

export default function SectionThree() {
  console.log(WEBSITE_URL);
  const message = getMessage();
  return (
    <section>
      <div className="sectionThree">
        <form action="/api/shoppingList" method="POST">
          <h1 id="checklist">Shopping list</h1>
          <br />
          <br />
          <label htmlFor="message"></label>
          <textarea typeof="text" name="message" cols={30} rows={10} placeholder="Write shopping list"></textarea>
          <br />
          <ShoppingButton />
        </form>
        <div className="checklist">
          <h2>Checklist</h2>
          <p>{message}</p>
        </div>
        <div className="pen-image">
          <Image className="pen" src={pen} alt="pen" width="500" height="500" />
        </div>
      </div>
    </section>
  );
}
