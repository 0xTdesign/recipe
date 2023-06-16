"use client";
import "../../blog/blog.css";
import { kv } from "@vercel/kv";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function FormStatusButton() {
  const { pending } = useFormStatus();

  return (
    <div>
      <button type="submit">{pending ? "Sending Comment" : "Submit Comment"}</button>;
    </div>
  );
}
