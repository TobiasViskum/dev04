"use client";

interface Props {
  hashUid: string;
}

export default function confirmPassword(props: Props) {
  console.log(props.hashUid);
  const isLoggedIn: string | null = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn || isLoggedIn == "false") {
    return;
  }

  return;
}
