"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

export function SubmitAction() {
  const [submitResponse, setSubmitResponse] = useState(<p></p>);
  const [inputText, setInputText] = useState("");
  const isFirstRender = useRef(false);

  const router = useRouter();

  async function handleClick() {
    const response = await fetch(`/api/login?input=${inputText}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data: { redirect: string | null } = await response.json();
    if (data.redirect) {
      router.push(data.redirect);
    } else {
      setSubmitResponse(<p>User doesn't exist!</p>);
    }
  }

  useEffect(() => {
    if (isFirstRender.current == false) {
      isFirstRender.current = true;
    } else {
      setSubmitResponse(<p></p>);
    }
  }, [inputText]);

  return (
    <>
      <div>
        <input
          placeholder="Enter uid"
          spellCheck={false}
          onChange={(e) => setInputText(e.target.value)}
          defaultValue={inputText}
        />
        {submitResponse}
        <button onClick={handleClick}>Submit</button>
      </div>
    </>
  );
}
