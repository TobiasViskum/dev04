import styles from "./page.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Viskum App",
};

export default async function page() {
  return (
    <>
      <h1>Viskum App</h1>
    </>
  );
}
