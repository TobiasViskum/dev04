"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

interface Props {
  profiles: ProfilesNoJoin[];
}

export function SubmitAction(props: Props) {
  const router = useRouter();
  const inputElement = useRef<HTMLInputElement | null>(null);
  const profiles = props.profiles;

  function handleClick() {
    if (!inputElement.current) return;
    const inputText = inputElement.current.value;
    let foundProfile = false;
    for (let i = 0; i < profiles.length; i++) {
      if (profiles[i].uid === inputText) {
        foundProfile = true;
        break;
      }
    }
    if (foundProfile) {
      router.push(`/${inputText}`);
    }
    return;
  }

  return (
    <div>
      <input placeholder="Enter uid" spellCheck={false} ref={inputElement} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
