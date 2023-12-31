import React from "react";
import "./recipeMain.css";
import RecipeSection from "../Componets/recipeSection/recipeSection";
import Link from "next/link";
import { getPosts } from "../lib/post";
import { compareAsc } from "date-fns";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import fork from "public/image/gabel2.png";

type recipesearchParams = {
  [key: string]: string;
};

function sortDates(a: Post, b: Post) {
  if (a.date < b.date) {
    return -1;
  } else if (a.date > b.date) {
    return 1;
  } else {
    return 0;
  }
}

export default async function recipePage({ searchParams }: { searchParams: recipesearchParams }) {
  const posts = await getPosts().sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)));

  if (searchParams.sortBy === "asc") {
    posts.sort(sortDates);
  } else if (searchParams.sortBy === "desc") {
    posts.sort(sortDates).reverse();
  }

  return (
    <>
      <div className="main-container">
        <RecipeSection />
        <Image className="fork" src={fork} alt="fork" width="200" height="150" />
        <div className="arrows">
          <button>
            <Link href="/recipe?sortBy=asc"> &#8593;</Link>
          </button>
          <button>
            <Link href="/recipe?sortBy=desc">&#8595;</Link>
          </button>
        </div>
        <div className="recipe-blog">
          <div className="line"></div>
          <ul>
            {posts.map((post) => {
              return (
                <li key={post.slug}>
                  <Link href={`/recipe/${post.slug}`}>
                    <span className="post-title">{post.title}</span>
                    <span className="post-date">
                      <span className="published">Published: </span>
                      <span className="date">{format(parseISO(post.date), "LLLL d, yyyy")}</span>
                    </span>
                    <button className="read-btn">Read More</button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="line"></div>
      </div>
    </>
  );
}
