"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { firstLetterUppercase } from "@/lib/util";

interface Props {
  setHeaderTitle: (str: string) => void;
}
export default function usePathnameEvent(props: Props) {
  const pathname = usePathname();
  const setHeaderTitle = props.setHeaderTitle;

  useEffect(() => {
    const splitPathname = pathname.split("/");
    if (splitPathname.length == 2) {
      setHeaderTitle("Home");
    } else if (splitPathname.length == 3) {
      setHeaderTitle(firstLetterUppercase(splitPathname[2]));
    }
  }, [pathname]);
  return;
}
