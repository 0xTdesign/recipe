"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function FormShoppingButton() {
  const { pending } = useFormStatus();

  return (
    <div className="save">
      <button type="submit">{pending ? "Sending Comment" : "Submit Comment"}</button>
    </div>
  );
}
