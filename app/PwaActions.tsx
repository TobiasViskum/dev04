"use client";

function isPWA() {
  const isPWA = window.matchMedia("(display-mode: standalone)").matches;
  return isPWA;
}
function isMobile() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return isMobile;
}

export default function PwaActions() {
  if (typeof window == "undefined") return <></>;
  const documentStyle = document.documentElement.style;

  if (isMobile() == false) return <></>;
  if (isPWA() == false) return <></>;

  documentStyle.setProperty("--touch-actions", "none");

  return <></>;
}
