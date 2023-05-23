import styles from "./page.module.scss";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Viskum App",
};

export default async function page() {
  return (
    <div className={styles.main}>
      <br />
      <h1>Viskum App</h1>
      <br />
      <Link href={"/login"}>Go to Login Page</Link>
      <br />
      <br />

      <h2>You can download this website as an App! (PWA)</h2>
      <br />
      <p>But it{"'"}s recommended to wait until you have logged in</p>
      <br />
      <br />
      <h3>How to download:</h3>
      <br />
      <h4>iOS:</h4>
      <p>Share {"→"} Add to Homescreen</p>
      <br />
      <br />
      <h4>Android:</h4>
      <p>...</p>
    </div>
  );
}
