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
  if (typeof window == "undefined" || typeof document == "undefined") return <></>;
  const viewport = document.querySelector("meta[name=viewport]");
  const documentStyle = document.documentElement.style;

  if (isMobile() == false) return <></>;
  if (isPWA() == false) return <></>;

  viewport?.setAttribute(
    "content",
    "width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"
  );
  documentStyle.setProperty("--touch-actions", "pan-y");

  return <></>;
}
