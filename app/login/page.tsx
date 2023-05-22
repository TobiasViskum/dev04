import styles from "./page.module.scss";
import { SubmitLogin } from "./SubmitLogin";

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
      <p>Please login with your uid:</p>
      <SubmitLogin />
    </main>
  );
}
