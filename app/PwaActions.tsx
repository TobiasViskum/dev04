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
  if (isPWA() == false) return <></>;
  if (isMobile() == false) return <></>;

  const root = document.documentElement;
  const rootStyles = getComputedStyle(root);
  rootStyles.setProperty("--touch-actions", "none");

  return <></>;
}
