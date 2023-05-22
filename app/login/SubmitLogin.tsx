"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

export function SubmitLogin() {
  const [submitResponse, setSubmitResponse] = useState(<p></p>);
  const [inputText, setInputText] = useState("");
  const isFirstRender = useRef(false);
  const router = useRouter();

  async function handleClick() {
    const responseInput = await fetch(`/api/login?input=${inputText}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const dataInput: { passed: boolean; uid: string; status: string } = await responseInput.json();

    if (dataInput.passed) {
      const sessionKey = localStorage.getItem("sessionKey");

      const responseConfirm = await fetch(
        `/api/login/confirm?uid=${dataInput.uid}&sessionKey=${sessionKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      const dataConfirm: { newRedirect: string; passed: boolean; status: string } =
        await responseConfirm.json();

      if (dataConfirm.status == "error") {
        setSubmitResponse(<p>An error happened</p>);
      } else {
        router.push(dataConfirm.newRedirect);
      }
    } else if (dataInput.status == "error") {
      setSubmitResponse(<p>An error happened</p>);
    } else {
      setSubmitResponse(<p>User doesn{"'"}t exist!</p>);
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
          placeholder="Enter e-mail"
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
