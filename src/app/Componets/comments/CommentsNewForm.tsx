"use client";

import shortUUID from "short-uuid";
import FormStatusButton from "./FormStatusButton";

type CommentFormProps = {
  slug: string;
  saveCommentAction: (formData: FormData, slug: string) => Promise<shortUUID.SUUID>;
};

export default function CommentForm({ slug, saveCommentAction }: CommentFormProps) {
  async function handleForm(formData: FormData) {
    await saveCommentAction(formData, slug);
  }

  return (
    <form action={handleForm}>
      <label htmlFor="username">Name</label>
      <br />
      <input type="text" name="username" placeholder="Name" />
      <br />
      <br />
      <label htmlFor="comment">Comment</label>
      <br />
      <br />
      <textarea name="comment" cols={30} rows={10}></textarea>
      <br />
      <br />
      <div className="form-btn">
        <FormStatusButton />
      </div>
    </form>
  );
}
