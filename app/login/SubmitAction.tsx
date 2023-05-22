"use client";

import { handleLogin } from "@/lib/actions";
import { useTransition, useRef } from "react";

export function SubmitAction() {
  let [isPending, startTransition] = useTransition();
  const inputElement = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <input placeholder="Enter uid" spellCheck={false} ref={inputElement} />
      <button onClick={() => startTransition(() => handleLogin(inputElement.current?.value))}>
        Submit
      </button>
    </div>
  );
}
