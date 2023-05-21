import styles from "./page.module.scss";
import { userAuth } from "@/lib/viskum-app/auth";
import { redirect } from "next/navigation";
//import { handleLogin } from "@/lib/viskum-app/actions";

export default function page({ params }: ViskumAppParams) {
  async function handleLogin(data: FormData) {
    const inputText = String(data.get("password"));
    const responseUid = await userAuth(inputText);
    if (responseUid) {
      redirect(`/viskum-app/${responseUid}`);
    }
  }

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
      <form action={handleLogin}>
        <input type="text" name="password" placeholder="Enter uid" spellCheck={false} />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
