import styles from "./page.module.scss";
import { SubmitAction } from "./SubmitAction";

export const metadata = {
  title: "Login",
  description: "Made by Tobias T. Viskum",
};

export default async function page({ params }: ViskumAppParams) {
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
