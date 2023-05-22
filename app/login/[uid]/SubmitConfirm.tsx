"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

interface Props {
  uid: string;
}

export function SubmitConfirm(props: Props) {
  const [submitResponse, setSubmitResponse] = useState(<p></p>);
  const [inputText, setInputText] = useState("");
  const isFirstRender = useRef(false);
  const router = useRouter();

  const uid = props.uid;

  async function handleClick() {
    const responseInput = await fetch(`/api/login/confirm/session?input=${inputText}&uid=${uid}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const dataInput: { passed: boolean; sessionKey: string; status: string } =
      await responseInput.json();

    if (dataInput.passed) {
      localStorage.setItem("sessionKey", dataInput.sessionKey);
      router.push(`/${uid}`);
    } else if (dataInput.status == "error") {
      setSubmitResponse(<p>An error happened</p>);
    } else {
      setSubmitResponse(<p>Wrong password</p>);
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
          placeholder="Enter password"
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
