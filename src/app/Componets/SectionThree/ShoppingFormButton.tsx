"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function FormStatusButton() {
  const { pending } = useFormStatus();

  return (
    <div className="save">
      <button type="submit">{pending ? "Sending Comment" : "Submit Comment"}</button>
    </div>
  );
}
