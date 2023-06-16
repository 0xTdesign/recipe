import { kv } from "@vercel/kv";
import short from "short-uuid";

export async function saveComment(username: string, comment: string, slug: string) {
  const uuid = short.generate();

  const commentObject = JSON.stringify({
    username,
    comment,
    uuid,
  });

  kv.set(`comment:${uuid}`, commentObject);

  const commentsList = await kv.lpush(`comments:${slug}`, uuid);

  console.log("Comment saved, heres the list: ", commentsList);
  return uuid;
}

export async function getComments(slug: string) {
  //get all comments for the blog
  const commentsIds = await kv.lrange(`comments:${slug}`, 0, -1);
  const commentKeys = commentsIds.map((id) => `comment:${id}`);
  console.log(commentKeys);
  if (commentKeys.length < 1) {
    return new Promise((resolve, reject) => resolve(null));
  }
  return await kv.mget<Comment[]>(...commentKeys);
}
