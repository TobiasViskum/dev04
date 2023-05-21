import { userAuth } from "@/lib/viskum-app/auth";
import { redirect } from "next/navigation";

export default function SubmitAction() {
  async function handleLogin(data: FormData) {
    "use server";
    const inputText = String(data.get("password"));
    const result = await userAuth(inputText, "check only");

    if (result.length > 0) {
      redirect(`/viskum-app/${inputText}`);
    }
    return;
  }

  return (
    <form action={handleLogin}>
      <input type="text" name="password" placeholder="Enter uid" spellCheck={false} />
      <button type="submit">Submit</button>
    </form>
  );
}
