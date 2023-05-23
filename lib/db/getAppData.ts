import { execute } from "@/lib/db";

export async function getAppData() {
  const q = "SELECT * FROM app_data";

  const appData = await execute<AppData[]>(q, [""]);

  return appData;
}
