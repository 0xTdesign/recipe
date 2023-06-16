"use server";
import { saveComment } from "@/app/lib/comments";
import { revalidatePath } from "next/cache";

export async function handleSubmitFormAction(formData: FormData, slug: string) {
  const username = formData.get("username") as string;
  const comment = formData.get("comment") as string;

  const uuid = await saveComment(username, comment, slug);

  revalidatePath(`/recipe/${slug}`);
}
