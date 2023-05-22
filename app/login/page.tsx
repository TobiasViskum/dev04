import styles from "./page.module.scss";
import { userAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
//import { handleLogin } from "@/lib/viskum-app/actions";
import { SubmitAction } from "./SubmitAction";
import { execute } from "@/lib/db";

export default async function page({ params }: ViskumAppParams) {
  const profiles: ProfilesNoJoin[] = await execute("SELECT * FROM dim_profile", [""]);

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
      <SubmitAction profiles={profiles} />
    </main>
  );
}
