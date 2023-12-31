import Link from "next/link";
import { getPostsBySlug } from "../../lib/post";
import { notFound } from "next/navigation";
import "./recipes.css";
import Image from "next/image";
import Comments from "@/app/Componets/comments/Comments";
// import ViewCounter from "@/app/Componets/PageCount/ViewCounter";

type recipesearchParams = { params: { slug: string } };

export default async function myRecipes({ params }: recipesearchParams) {
  const post = await getPostsBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <div className="recipe-container">
        <div className="title">
          {post.image && <Image className="recipe-image" src={post.image} alt="bear" width="200" height="150" />}
          <div dangerouslySetInnerHTML={{ __html: post.body.html }}></div>
          <Link href="/recipe">
            <button>
              Return <span>&#8617;</span>
            </button>
          </Link>
          <div className="views">
            {/* @ts-ignore-error Server Component */}
            {/* <ViewCounter kvKey={params.slug} /> */}
          </div>
        </div>
      </div>
      <Comments slug={params.slug} />
    </section>
  );
}
