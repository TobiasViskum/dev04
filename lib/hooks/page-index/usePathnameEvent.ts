"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { firstLetterUppercase } from "@/lib/util";

interface Props {
  onPathChange: (str: string) => void;
}
export default function usePathnameEvent(props: Props) {
  const pathname = usePathname();
  const onPathChange = props.onPathChange;

  useEffect(() => {
    const splitPathname = pathname.split("/");
    if (splitPathname.length == 2) {
      onPathChange("Home");
    } else if (splitPathname.length == 3) {
      onPathChange(firstLetterUppercase(splitPathname[2]));
    }
  }, [pathname, onPathChange]);
  return;
}
