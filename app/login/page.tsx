import styles from "./page.module.scss";
import { userAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
//import { handleLogin } from "@/lib/viskum-app/actions";
import { SubmitAction } from "./SubmitAction";

export default function page({ params }: ViskumAppParams) {
  return (
    <main className={styles.main}>
      <br />
      <br />
      <h1>Login</h1>
      <br />
      <p>
        You have entered a wrong uid
        <br />
        <br />
        Please login with the right uid:
      </p>
      <SubmitAction />
    </main>
  );
}
