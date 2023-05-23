import { SubmitConfirm } from "./SubmitConfirm";
import styles from "../page.module.scss";

export default function page({ params }: ViskumAppParams) {
  const uid = params.uid;

  return (
    <main className={styles.main}>
      <br />
      <br />
      <h1>Verification</h1>
      <p>
        It seems to be a long time since you last logged in...
        <br />
        <br />
        Please confirm it{"'"}s you by providing your password:
      </p>
      <SubmitConfirm uid={uid} />
    </main>
  );
}
