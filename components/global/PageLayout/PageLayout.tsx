"use client";

import styles from "./PageLayout.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useState, useEffect } from "react";
import { hooks } from "@/lib/hooks/page-index";

interface Props {
  children: React.ReactNode;
}

export default function PageLayout(props: Props) {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [title, setTitle] = useState("");
  const [footerContent, setFooterContent] = useState([
    { name: "Home", imageActive: "", imageInactive: "" },
    { name: "Profile", imageActive: "", imageInactive: "" },
  ]);
  const [isFooterActive, setIsFooterActive] = useState(false);

  function updateHeader(newState: boolean) {
    setIsHeaderActive(newState);
  }
  function updateFooter(newState: boolean) {
    setIsFooterActive(newState);
  }
  function onPathChange(str: string) {
    setTitle(str);
    if (str === "Home") {
    } else if (str === "Fitness") {
    }
  }

  hooks.usePathnameEvent({ onPathChange });
  hooks.useFirstRenderEvent({ updateHeader, updateFooter });

  return (
    <>
      <Header title={title} isHeaderActive={isHeaderActive} />
      {props.children}
      <Footer footerContent={footerContent} isFooterActive={isFooterActive} />
    </>
  );
}
